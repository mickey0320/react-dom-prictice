import React from "react"
import ReactRouterContext from "./ReactRouterContext"

class Router extends React.Component {
  state = {
    location: this.props.history.location,
  }
  constructor() {
    super()
  }
  componentDidMount() {
    const history = this.props.history
    this.unlisten = history.listen(({ location }) => {
      this.setState({
        location,
      })
    })
  }
  componentWillUnmount() {
    this.unlisten()
  }
  render() {
    return (
      <ReactRouterContext.Provider value={{ history, location }}>
        {this.props.children}
      </ReactRouterContext.Provider>
    )
  }
}
export default Router
