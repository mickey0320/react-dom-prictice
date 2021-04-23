import React from "react";
import { useContext } from "react";
import ReactRouterContext from "./ReactRouterContext";
import matchPath from "./matchPath";

function Switch(props) {
  const { location } = useContext(ReactRouterContext);
  let element = null;
  let match;
  React.Children.forEach(props.children, (child) => {
    if (match) return;
    element = child;
    const { path, exact } = child.props;
    match = matchPath(location.pathname, { exact, path });
  });

  return match && React.cloneElement(element, { computedMatch: match });
}

export default Switch;
