import React from "react";
import ReactRouterContext from "./ReactRouterContext";
import matchPath from "./matchPath";

class Route extends React.Component {
  static contextType = ReactRouterContext;
  render() {
    const { location, history } = this.context;
    const { exact, path, component: Component } = this.props;
    const match = matchPath(location.pathname, {
      strict: exact,
      path,
    });
    if (match) {
      return <Component location={location} history={history} match={match} />;
    } else {
      return null;
    }
  }
}

export default Route;
