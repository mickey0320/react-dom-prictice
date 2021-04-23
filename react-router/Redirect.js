import { useContext, useEffect } from "react";
import ReactRouterContext from "./ReactRouterContext";

function Redirect(props) {
  const { history } = useContext(ReactRouterContext);
  useEffect(() => {
    const { to } = props;
    history.push(to);
  }, []);

  return null;
}

export default Redirect;
