import { Link } from "react-router-dom";

const Navbar = () =>{

    return (

        <nav className="navigation">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/games'}>All Games</Link>
            <Link to={'/signup'}>Sign Up</Link>
            <Link to={"/login"}>Login </Link>

        </nav>
    )


}

export default Navbar;