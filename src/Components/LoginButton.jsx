import { NavLink } from "react-router-dom"

const LoginButton = () => {
  return (
    <div className="flex-end">
        <div className="navbar-end">
            <NavLink to={"/user-login"} className="btn btn-sm btn-success">Login</NavLink>
        </div>
    </div>
  )
}

export default LoginButton