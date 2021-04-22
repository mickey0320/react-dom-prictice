import React from "react"
import { createHashHistory } from "history"
import { Router } from "../react-router"

const HashRouter = (props) => {
  const history = createHashHistory()
  return <Router history={history}>{props.children}</Router>
}

export default HashRouter
