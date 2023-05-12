// import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {


  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input type="text" className="loginInput" placeholder="Enter your username..."/>
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password..."/>
        <button className="loginButton" type="submit" disabled={true}>Login</button>
      </form>
      {/* <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
      </button> */}
    </div>
  );
}
