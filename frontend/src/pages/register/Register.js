import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "./register.css";
import TopBar from "../../components/topbar/Topbar";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorinput, setErrorinput] = useState('');
  const [error, setError] = useState(false);

  // baseURL
  const HOST_BASE = "http://localhost:8080";

      // Select donor Stype
      const getInitialState = () => {
        const donorType = "Personal";
         return donorType;
        };
        const [donorType, setDonorType] = useState(getInitialState);
      const handleChange = (e) => {
         setDonorType(e.target.value);
      };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === '') {
      setErrorinput('Please enter your username.');
      return;
    }
    if (email === '') {
      setErrorinput('Please enter your email.');
      return;
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      setErrorinput('Invalid email.');
      return;
    }
    if (password === '') {
      setErrorinput('Please enter your password.');
      return;
    }
    setError(false);
    try{
      const res = await axios.post(`${HOST_BASE}/auth/register`,{
        username,
        email,
        password,
        donorType,
      });
      res.data && window.location.replace("/login");
    }catch (err){
      setError(true);
    }
  };
  return (
    <div>
      <TopBar/>
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter your username..."
        onChange={e=>setUsername(e.target.value)}/>
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Enter your email..."
        onChange={e=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter your password..."
        onChange={e=>setPassword(e.target.value)}/>
        <label>DonorType</label>
        <div>
        <select value={donorType} onChange={handleChange}>
          <option value="Personal">Personal</option>
           <option value="Organisation">Organisation</option>
          </select>
        </div>
        {errorinput && <p className="span">{errorinput}</p>}
        <button className="registerButton" type="submit">Register</button>
      </form>
      {error && <span className="error">Something went wrong!</span>}
      {/* <button className="registerLoginButton">
      <Link className="link" to="/login">Login</Link>
      </button> */}
      </div>
    </div>
  );
}
