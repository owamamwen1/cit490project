import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  // baseURL
  const HOST_BASE = "https://owas-senior-project.onrender.com";
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
          <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
          <li className="topListItem"><Link to="/" className="link">FOODS</Link></li>
          <li className="topListItem"><Link to="/donor" className="link">DONOR</Link></li>
          <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (<Link to="/settings"><img className="topImg" src={pfile+user.profilePic} alt="" /></Link>) 
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

// https://avatars.githubusercontent.com/u/24244287?v=4
