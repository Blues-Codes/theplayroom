import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar';
import About from './pages/About';
import ChildLogin from './pages/ChildLogin';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
import ParentLogin from './pages/ParentLogin'
import Profile from './pages/Profile';
import ParentSignUp from './pages/ParentSignup';
import Updates from './pages/Updates';
import PreLoadedGames from './pages/PreLoadedGames';
import Resources from './pages/Resources';
import EditProfile from './pages/EditProfile';
import CreatedGames from './pages/CreatedGames';
import Storytime from './pages/Storytime';
import PaintingGame from './Games/Painting';
import Shapes from './Games/Shapes';
import TraceGame from './Games/Tracing';
import Weather from './Games/Weather';


const App = () => {

  let token = localStorage.getItem("authToken");

  const LoggedIn = () => {
    return token ? <Outlet /> : <Navigate to="/" />;
  };

  const NotLoggedIn = () => {
    return !token ? <Outlet /> : <Navigate to="/" />;
  };


  return (
    <div className='playRoomImg' >

      <Navbar />
      
        <Routes>


          <Route path='/' element={<Home />} />
          <Route path='/about'element={<About/>} />
          <Route path='/signup'element={<ParentSignUp />} />
          <Route path='/login'element={<ParentLogin />} />
          <Route path='/childlogin' element={<ChildLogin />}/>

          <Route element={<LoggedIn />}>

            <Route path='/updates/:id'element={<Updates />} />
            <Route path='/edit-profile'element={<EditProfile />} />
            <Route path='/profile'element={<Profile />} /> 
            <Route path='/childlogin'element={<ChildLogin />} />
            <Route path='/Comingsoon' element={<ComingSoon />} />
            <Route path='/preloaded-games' element={<PreLoadedGames />} />
            <Route path='/created-games' element={<CreatedGames />} />
            <Route path='/Resources' element={<Resources />} />
            <Route path='/StoryTime' element={<Storytime />}/>
            <Route path='/tracing' element={<TraceGame />} />
            <Route path='/shapes' element={<Shapes />} />
            <Route path='/painting' element={<PaintingGame />} />
            <Route path='/weather' element={<Weather />} />


          </Route>

          <Route element={<NotLoggedIn />}>

            <Route path='/Signup'element={<ParentSignUp />} />
            <Route path='/login'element={<ParentLogin />} />

          </Route>


        </Routes>
        
        
    </div>
  );
}

export default App;