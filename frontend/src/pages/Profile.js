import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../context/loading.context";
import { Link } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate()
  return (
    <div>
       <Link to={"/updates"}>
       <button>Child Updates</button>
       </Link>
       <Link to={"/about"}>
        <button>About</button>
       </Link>
      <Link to={"/EducationResources"}>
        <button>Resources</button>
      </Link>
      <button onClick={(() => {localStorage.removeItem("authToken"); navigate("/login")})}> Log Out</button>


    </div>
  )
}

export default Profile