import { useContext, useRef, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './setting.css';
import { Context } from '../../context/Context';
import axios from "axios";
import TopBar from '../../components/topbar/Topbar';

function Setting() {
  // baseURL
  const HOST_BASE = "http://localhost:8080";
  // Picture profile
  const pfile = `${HOST_BASE}/images/`;

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  
  // form validation
  const usernameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const [error, setError] = useState('');
  //
  const handleUpdatedUserSubmit = async (e) => {
    e.preventDefault();
    if (usernameRef.current.value === '') {
      setError('Please enter your username.');
      return;
    }
    if (firstNameRef.current.value === '') {
      setError('Please enter your firstName.');
      return;
    }
    if (lastNameRef.current.value === '') {
      setError('Please enter your lastName.');
      return;
    }
    if (emailRef.current.value === '') {
      setError('Please enter your email.');
      return;
    }
    if (passwordRef.current.value === '') {
      setError('Please enter your password.');
      return;
    }
    if (phoneRef.current.value === '') {
      setError('Please enter your phone number.');
      return;
    }
    dispatch({type:"UPDATE_START"})
    const updatedUser = {
      userId: user._id,
      username: usernameRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
     password: passwordRef.current.value,
     phone: phoneRef.current.value,
     address,
     region,
     country
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try{
        await axios.post(`${HOST_BASE}/upload`, data);
      }catch(err){};
      try{
      const res = await axios.put(`${HOST_BASE}/users/`+user._id, updatedUser);
      setSuccess(true);
      dispatch({type:"UPDATE_SUCCESS", payload: res.data});
      }catch(err){
        dispatch({type: "UPDATE_FAILURE"});
      };
    }
  }
  
  return (
    <div>
      <TopBar/>
    <div className='setting'>
        <div className='settingWrapper'>
            <div className='settingTitle'>
                <span className='settingUpdateTitle'>Update Your Account</span>
                <span className='settingDeleteTitle'>DonorType: {user.donorType}</span>
                {/* <span className='settingDeleteTitle'>Delete Account</span> */}
            </div>  
            <form className='settingForm' onSubmit={handleUpdatedUserSubmit}>
                <label>Profile Picture</label>
                <div className='settingPic'>
                    <img src={file ? URL.createObjectURL(file) : pfile+user.profilePic} alt=''/>
                    <label htmlFor='fileInput'>
                        <i className='settingPicIcon far fa-user circle'></i>
                    </label>
                    <input type='file' id='fileInput' className='settingFileOutpit'  onChange={(e)=> setFile(e.target.files[0])}/>
                </div>
                <label>UserName</label>
                <input type='text' placeholder={user.username} onChange={(e)=> setUsername(e.target.value)} ref={usernameRef}/>
                <label>FirsrName</label>
                <input type='text' placeholder={user.firstName} onChange={(e)=> setFirstName(e.target.value)} ref={firstNameRef}/>
                <label>LastName</label>
                <input type='text' placeholder={user.lastName} onChange={(e)=> setLastName(e.target.value)} ref={lastNameRef}/>
                <label>Email</label>
                <input type='email' placeholder={user.email} onChange={(e)=> setEmail(e.target.value)} ref={emailRef}/>
                <label>Password</label>
                <input type='password' onChange={(e)=> setPassword(e.target.value)} ref={passwordRef}/>
                <label>Phone</label>
                <input type='number' placeholder={user.phone} onChange={(e)=> setPhone(e.target.value)} ref={phoneRef}/>
                <label>Address</label>
                <input type='text' placeholder={user.address} onChange={(e)=> setAddress(e.target.value)}/>
                <label>Region</label>
                <input type='text' placeholder={user.region} onChange={(e)=> setRegion(e.target.value)}/>
                <label>Country</label>
                <input type='text' placeholder={user.country} onChange={(e)=> setCountry(e.target.value)}/>
                {error && <p className="span">{error}</p>}
                <button className='settingSubmit' type='submit'>Update</button>
                {success && (
                    <span className='user-updated'>Profile has been updated...</span>
                )}
            </form>
        </div>
        <Sidebar/>
    </div>
    </div>
  );
}

export default Setting;
