import React from "react";
import ReactRouterContext from "./ReactRouterContext";

class Router extends React.Component {
  state = {
    location: this.props.history.location,
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const history = this.props.history;
    this.unlisten = history.listen((location) => {
      this.setState({
        location,
      });
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    const value = {
      history: this.props.history,
      location: this.state.location,
    };
    return <ReactRouterContext.Provider value={value}>{this.props.children}</ReactRouterContext.Provider>;
  }
}
export default Router;
