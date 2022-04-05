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



const RequiredAuth = () => {
  let isAuth = localStorage.getItem('access_token');
  if (!isAuth) {
    return <Navigate to="/" />
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


          {/* <Route element={<RequiredAuth />}> */}
          <Route index path="/login" element={<Login />} />
          {/* </Route> */}
        </Routes>
      </Router>

    </>
  );
}

export default App;
