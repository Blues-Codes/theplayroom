import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../context/loading.context";
import { Link } from "react-router-dom";




const Profile = () => {
  return (
    <div>
       <button><Link to={"/updates"}>See what your child has played!</Link></button>
       <button><Link to={"/about"}>Why did we create this site?</Link></button>
        


    </div>
  )
}

export default Profile