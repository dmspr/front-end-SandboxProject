import React from 'react'
import Homepage from './pages/homepage';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
  Outlet
} from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/register';
// import SidemenuPage from './components/Dashboard/sidemenuPage';
import Dashboard from './pages/dashboard';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Event from '../src/pages/event'
import Discover from './pages/discover';
import DiscoverPageById from './pages/discoverById';



const RequiredAuth = () => {
  let isAuth = localStorage.getItem('access_token');
  if (!isAuth) {
    return <Navigate to="/login" />
  }
  //outlet is childer of private route
  return <Outlet />
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/register" element={<Register />} />
          <Route path="/discover">
            <Route path=':id' element={<DiscoverPageById/>} />
            <Route index element={<Discover />} />
          </Route>

          <Route element={<RequiredAuth />}>
            <Route index path="/dashboard/:id" element={<Dashboard />} />
            <Route index path="/make-event" element={<Event />} />
          </Route>
        </Routes>
        <ToastContainer theme='colored' />
      </Router>

    </>
  );
}

export default App;
