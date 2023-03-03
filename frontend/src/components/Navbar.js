import { Link } from "react-router-dom";





const Navbar = () =>{

    return (

        <nav className="navigation">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>All Games</Link>
            <Link>Sign Up</Link>
            <Link>Login </Link>

        </nav>
    )


}

export default Navbar;