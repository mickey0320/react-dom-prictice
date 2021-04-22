import React from "react"
import { createBrowserHistory } from "history"
import { Router } from "../react-router"

const BrowserRouter = (props) => {
  const history = createBrowserHistory()
  return <Router history={history}>{props.children}</Router>
}

export default BrowserRouter
