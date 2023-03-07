import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../context/loading.context";
import { Link } from "react-router-dom";
// import UpdateList from "./Updates";
import { Route } from 'react-router-dom';
import Updates from './Updates';


const Profile = () => {

  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetch('/api/updates')
  .then((response) => response.json())
  .then((data) => setUpdates(data));
}, []);


const navigate = useNavigate()

  return (
    <div>
       <Link to={"/profile-edit"}>
        <button>Edit Profile</button>
       </Link>
      <Link to={"/EducationResources"}>
        <button>Resources</button>
      </Link>
      <button onClick={(() => {localStorage.removeItem("authToken"); navigate("/login")})}> Log Out</button>

      <h1>Parent Dashboard</h1>
      <Route path="/child/:childId/updates" component={Updates} />

    </div>
  )
}

export default Profile