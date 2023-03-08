import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoadingContext } from "../context/loading.context";

const Navbar = () =>{
    const {parent } = useContext(LoadingContext)

    console.log("this is the parent", parent)
    return (
           
        <>
        {

            parent ? 

            <nav className="navigation">
            <Link to={'/about'}>About</Link>
            <Link to={'/PreLoaded-games'}>PreLoaded Games</Link>
            <Link to={'/created-games'}>Created Games</Link>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/updates'}>Updates</Link>
            <Link to={'/childprofile'}>Child Profile</Link>
        </nav>

            :
      
        
        <nav className="navigation">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/signup'}>Sign Up</Link>
            <Link to={'/login'}>Login </Link>
            <Link to={'/childlogin'}>Child Login </Link>

        </nav>
        }
       </>
    )


}

export default Navbar;