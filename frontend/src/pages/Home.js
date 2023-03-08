// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { LoadingContext } from "../context/loading.context";
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        
        Welcome to The Playroom! 
        <Link to={"/login"}></Link>
        <button>Parent Login</button>
        <Link to={"/childlogin"}></Link>
        <button>Child Login</button>

        </div>
  )
}

export default Home