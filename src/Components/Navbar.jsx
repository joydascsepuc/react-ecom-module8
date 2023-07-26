import { NavLink } from "react-router-dom"
import LoginButton from "./LoginButton"
import LoginUsersNavSide from "./LoginUsersNavSide"

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <NavLink to={'/'} className="btn btn-ghost normal-case text-xl">Ecommerce</NavLink>
            </div>
            {localStorage.getItem('access_token') === null ? <LoginButton /> : <LoginUsersNavSide />}
        </div>
    </div>
  )
}

export default Navbar