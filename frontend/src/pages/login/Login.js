// import { Link } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { Context } from "../../context/Context"
import axios from "axios";
import "./login.css";
import TopBar from "../../components/topbar/Topbar";

export default function Login() {
   // baseURL
  const HOST_BASE = "http://localhost:8080";

  // form validation
  const userRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  //
  
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userRef.current.value === '') {
      setError('Please enter your username.');
      return;
    }

    if (passwordRef.current.value === '') {
      setError('Please enter your password.');
      return;
    }
    dispatch({type: "LOGIN_START"})
    try{
      const res = await axios.post(`${HOST_BASE}/auth/login`,{
      username: userRef.current.value,
      password: passwordRef.current.value,
      });
    dispatch({type: "LOGIN_SUCCESS", payload:res.data});
    }catch(err){
    dispatch({type: "LOGIN_FAILURE"});
    }
  };
  
  return (
    <div>
    <TopBar/>
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="loginInput" placeholder="Enter your username..." ref={userRef} />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password..." ref={passwordRef} />
        {error && <p className="span">{error}</p>}
        <button className="loginButton" type="submit" disabled={isFetching} >Login</button>
      </form>
    </div>
    </div>
  );
}
