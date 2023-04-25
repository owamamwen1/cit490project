import "./topbar.css";

export default function TopBar() {

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">FOODS</li>
          <li className="topListItem">DONORS</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
      <img className="topImg" src='https://avatars.githubusercontent.com/u/24244287?v=4' alt="" />
          <ul className="topList">
            {/* <li className="topListItem">LOGIN</li> */}
            {/* <li className="topListItem">REGISTER</li> */}
          </ul>
      </div>
    </div>
  );
}
