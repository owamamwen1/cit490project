import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './newDonor.css';
import { Context } from '../../context/Context';

function NewDonor() {
    const location = useLocation();
    const path = (location.pathname.split("/")[2]);
    const [donor, setDonor] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [region, setRegion] = useState("");
    const [country, setCountry] = useState("");
    const [updateMode, setUpdateMode] = useState(false)

    const {user} = useContext(Context);

    // baseURL
    const HOST_BASE = "http://localhost:8080";

    const pfile = `${HOST_BASE}/images/`;

    useEffect(()=>{
        const getDonor = async ()=>{
            const res = await axios.get(`${HOST_BASE}/donors/` + path);
            setDonor(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
            setEmail(res.data.email);
            setPhone(res.data.phone);
            setAddress(res.data.address);
            setRegion(res.data.region);
            setCountry(res.data.country);
        };
        getDonor();
    },[path]);

    // Delete data
    const handleDelete = async () => {
        try{
            await axios.delete(`${HOST_BASE}/donors/${donor._id}`, {data:{username:user.username}});
            window.location.replace("/");
        }catch(err){};
    };
    
    // Update 
    const handleUpdate = async () => {
        try{
            await axios.put(`${HOST_BASE}/donors/${donor._id}`, {
                username: user.username, 
                title, 
                desc,
            });
            setUpdateMode(false);
        }catch(err){};
    }

  return (
    <div className='newDonor'>
        <div className='newDonorWrapper'>
        <ul class="m-d expand-list">
	<li data-md-content="500">
		<label name="tab" for="tab1" tabindex="-1" class="tab_lab" role="tab">Donor Details</label>
		<input type="checkbox" checked class="tab" id="tab1" tabindex="0" />
		<span class="open-close-icon">
			<i class="fas fa-plus"></i>
			<i class="fas fa-minus"></i>
		</span>
		<div class="content">
        <div className='act'>
            <span className='badge'>{donor.status}</span>
            {donor.photo && (
            <img className='newDonorImg' src={pfile + donor.photo} alt=''/>
            )}
            {
                updateMode ? 
                ( 
                <input className='newDonorTitleInput' type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                )
                :(
                    <h1 className='newDonorTitle'>
                    {title}
                    {donor.username === user?.username &&
                    <div className='newDonorEdit'>
                    <i className='newDonorIcon far fa-edit' onClick={() => setUpdateMode(true)}></i>
                    <i className='newDonorIcon far fa-trash-alt' onClick={handleDelete}></i>   
                    </div>
                    }                   
                </h1>
                )
            }
            </div>
            <div className='newDonorInfo'>
                <span className='newDonorAuthor'>
                Donor :
                <Link className='link' to={`/?user=${donor.username}`}>
                 <b> {donor.username}</b>
                 </Link>
                 </span>
                <span className='newDonorDate'>{new Date(donor.createdAt).toDateString()}</span>
            </div>
        </div>
    </li>
    <li data-md-content="300">
			<label name="tab" for="tab2" tabindex="-1" class="tab_lab" role="tab">Description</label>
			<input type="checkbox" class="tab" id="tab2" tabindex="0" />
			<span class="open-close-icon"><i class="fas fa-plus"></i><i class="fas fa-minus"></i></span>
			<div class="content">
                {
                updateMode ? ( 
                <textarea className='newDonorDescInput' value={desc} onChange={(e)=> setDesc(e.target.value)}/>) :(
                    <p className='newDonorDesc'>{desc}</p>
                )
            }
        </div>
    </li>
    <li data-md-content="600">
			<label name="tab" for="tab3" tabindex="-1" class="tab_lab" role="tab">Address</label>
			<input type="checkbox" class="tab" id="tab3" tabindex="0" />
			<span class="open-close-icon"><i class="fas fa-plus"></i><i class="fas fa-minus"></i></span>
      <div class="content">
        <p>
        {
                updateMode ? ( 
                <input className='writeInput' value={email} onChange={(e)=> setEmail(e.target.value)}/>) :(
                    <p className='writeInputUpdated'>Email: {email}</p>
                )
            }
            {
                updateMode ? ( 
                <input className='writeInput' value={phone} onChange={(e)=> setPhone(e.target.value)}/>) :(
                    <p className='writeInputUpdated'>Phone: {phone}</p>
                )
            }
            {
                updateMode ? ( 
                <input className='writeInput' value={address} onChange={(e)=> setAddress(e.target.value)}/>) :(
                    <p className='writeInputUpdated'>Address: {address}</p>
                )
            }
            {
                updateMode ? ( 
                <input className='writeInput' value={region} onChange={(e)=> setRegion(e.target.value)}/>) :(
                    <p className='writeInputUpdated'>Region: {region}</p>
                )
            }
             {
                updateMode ? ( 
                <input className='writeInput' value={country} onChange={(e)=> setCountry(e.target.value)}/>) :(
                    <p className='writeInputUpdated'>Country: {country}</p>
                )
            }
        </p>

			</div>
    </li>
</ul>
{ updateMode &&
             <button className='newDonorButton' onClick={handleUpdate}>Update</button>
            }
        </div>
    </div>
  );
}

export default NewDonor;










        
