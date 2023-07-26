import Navbar from "../Components/Navbar"

const Layout = (props) => {
  return (
    <div>
        <div className="container mx-auto">
            <Navbar />
            {props.children}
        </div>
    </div>
  )
}

export default Layout