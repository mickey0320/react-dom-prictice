import { useContext } from "react"
import ReactRouterContext from "./ReactRouterContext"

function withRouter(OldComponent) {
  return (props) => {
    const routeProps = useContext(ReactRouterContext)

    return <OldComponent {...props} {...routeProps} />
  }
}

export default withRouter
