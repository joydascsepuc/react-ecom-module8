import LoginButton from "./LoginButton"

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Ecommerce</a>
            </div>
            <LoginButton />
        </div>
    </div>
  )
}

export default Navbar