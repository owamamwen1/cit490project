import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
import edit from '../src/img/edit.png';
import inbox from '../src/img/envelope.png';
import settings from '../src/img/settings.png';
import help from '../src/img/question.png';
import logout from '../src/img/log-out.png';

export default function TopBar() {
  //
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
  //
  // baseURL
  const HOST_BASE = "http://localhost:8080";
  // Picture profile
  const pfile = `${HOST_BASE}/images/`;

  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link to="/" className="link">HOME</Link></li>
          <li className="topListItem"><Link to="/about" className="link">ABOUT</Link></li>
          <li className="topListItem"><Link to="/" className="link">FOODS</Link></li>
          <li className="topListItem"><Link to="/donor" className="link">DONOR</Link></li>
          <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (<div className='menu-container' ref={menuRef}><div className='menu-trigger' onClick={()=>{setOpen(!open)}}><img src={pfile+user.profilePic} alt=""></img></div><div className={`dropdown-menu ${open? 'active' : 'inactive'}`} ><h3>The Kiet<br/><span>Website Designer</span></h3><ul><DropdownItem img = {user} text = {"My Profile"}/><DropdownItem img = {edit} text = {"Edit Profile"}/><DropdownItem img = {inbox} text = {"Inbox"}/><DropdownItem img = {settings} text = {"Settings"}/><DropdownItem img = {help} text = {"Helps"}/><DropdownItem img = {logout} text = {"Logout"}/></ul></div></div>) 
        : 
        (
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">LOGIN</Link></li>
          <li className="topListItem">
            <Link className="link" to="/register">REGISTER</Link></li>
        </ul>
        )}
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img} alt=""></img>
      <a> {props.text} </a>
    </li>
  );
}

// https://avatars.githubusercontent.com/u/24244287?v=4





<div className="topRight">
{/* {user ? (<Link to="/settings"><img className="topImg" src={pfile+user.profilePic} alt="" /></Link>)  */}
{/* :  */}
{/* ( */}
{/* <ul className="topList">
  <li className="topListItem">
    <Link className="link" to="/login">LOGIN</Link></li>
  <li className="topListItem">
    <Link className="link" to="/register">REGISTER</Link></li>
</ul> */}
{/* )} */}
</div>

{/* <Link to="/settings"><img className="topImg" src={pfile+user.profilePic} alt="" /></Link> */}