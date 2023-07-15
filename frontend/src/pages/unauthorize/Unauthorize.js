import React from 'react';
import './unauthorize.css';
import TopBar from '../../components/topbar/Topbar';
import SideMenu from '../admin/sidebar/SideMenu';

function Unauthorize() {
  return (
  <div>
  <TopBar/>
  <div className='adminContent'>
  <div className='SideMenuAndPageContent'>
  <SideMenu/>
  <div className='authorize'>
  <h1 className='authHeader'>Unauthorized</h1>
  <p>You don't have the authorized access.</p>
  </div>
  </div>
  </div>
  </div>
  );
}

export default Unauthorize;