import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar';
import About from './pages/About';
import ChildLogin from './pages/ChildLogin';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
import ParentLogin from './pages/ParentLogin'
// import Profile from './pages/Profile';
import ParentSignUp from './pages/ParentSignup';
import Updates from './pages/Updates';


const App = () => {

  let token = localStorage.getItem("authToken");

  const LoggedIn = () => {
    return token ? <Outlet /> : <Navigate to="/" />;
  };

  const NotLoggedIn = () => {
    return !token ? <Outlet /> : <Navigate to="/" />;
  };


  return (
    <div >

      <Navbar />

        <Routes>


          <Route path='/' element={<Home />} />
          <Route path='/about'element={<About/>} />
          <Route path='/signup'element={<ParentSignUp />} />
          <Route path='/Parentlogin'element={<ParentLogin />} />

          <Route element={<LoggedIn />}>

            <Route path='/updates/:id'element={<Updates />} />
            {/* <Route path='/edit-profile/:id'element={<EditProfile />} />
            <Route path='/profile/:id'element={<Profile />} /> */}
            <Route path='/Childlogin'element={<ChildLogin />} />
            <Route path='/Comingsoon' element={<ComingSoon />} />

          </Route>

          <Route element={<NotLoggedIn />}>

            <Route path='/Signup'element={<ParentSignUp />} />
            <Route path='/Parentlogin'element={<ParentLogin />} />

          </Route>


        </Routes>

    </div>
  );
}

export default App;