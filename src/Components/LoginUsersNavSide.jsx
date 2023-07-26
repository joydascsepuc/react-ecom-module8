import { NavLink, useNavigate } from "react-router-dom";

const LoginUsersNavSide = () => {

    const navigator = useNavigate();

    const logout = () => {
        localStorage.clear('access-token');
        navigator(`/`);
    }

    return (
        <div className="flex-end">
            <div className="navbar-end">
                <NavLink to={"/cart"} className="btn btn-sm btn-success">Cart</NavLink>
            </div>
            <div className="navbar-end">
                <a onClick={logout} className="btn btn-sm btn-success">Logout</a>
            </div>
        </div>
    )
}

export default LoginUsersNavSide