import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from '../../pages/home/Home';
import Register from '../../pages/register/Register';
import Login from '../../pages/login/Login';
import WriteDonor from '../../pages/write/WriteDonor';
import Setting from '../../pages/settings/Setting';
import Help from '../../pages/help/Help';
import PageAdmin from '../../pages/admin/PageAdmin';
import About from '../../pages/about/About';
import Single from '../../pages/single/Single';
// import TopBar from '../topbar/Topbar';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import FoodDonor from '../../pages/inventory/FoodDonor';
import ViewUser from '../../pages/view-user/ViewUser';
import Unauthorize from '../../pages/unauthorize/Unauthorize';

function ModuleUserRoute() {
    const {user} = useContext(Context);
  return (
    <Router>
      {/* <TopBar/> */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={ user ? <Home/> : <Register/>} />
      <Route path="/login" element={user ? <Home/> : <Login/>} />
      <Route path="/donor" element={user ? <WriteDonor/> : <Register/>} />
      <Route path="/settings" element={user ? <Setting/> : <Register/>} />
      <Route path="/help" element={user ? <Help/> : <Register/>} />
      <Route path="/dashboard" element={ user ? <PageAdmin/> : <Register/>} />
      <Route path="/about" element={<About />} />
      <Route path="/view/:donorId" element={<Single />} />
      <Route path="/users" element={user?.userRole === "Admin" ?<ViewUser/> : <Unauthorize/>} />
    <Route path="/inventory" element={user ? <FoodDonor/> : <Register/>}></Route>
    </Routes>
  </Router>
  );
}

export default ModuleUserRoute;
