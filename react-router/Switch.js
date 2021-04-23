import React from "react";
import { useContext } from "react";
import ReactRouterContext from "./ReactRouterContext";
import matchPath from "./matchPath";

function Switch(props) {
  const { location } = useContext(ReactRouterContext);
  let Route = null;
  let match;
  React.Children.forEach(props.children, (child) => {
    if (Route) return;
    const { path, exact } = child.props;
    match = matchPath(location.pathname, { exact, path });
    if (match) {
      Route = child;
    }
  });

  return Route && React.cloneElement(Route, { computedMatch: match });
}

export default Switch;
