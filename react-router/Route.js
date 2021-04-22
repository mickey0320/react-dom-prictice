import React from "react"
import ReactRouterContext from "./ReactRouterContext"

class Route extends React.Component {
  static contextType = ReactRouterContext
  render() {
    const { location, history } = this.context
    const match = {}
    const { path, component: Component } = this.props
    if (path === location.pathname) {
      return <Component location={location} history={history} match={match} />
    } else {
      return null
    }
  }
}

export default Route
