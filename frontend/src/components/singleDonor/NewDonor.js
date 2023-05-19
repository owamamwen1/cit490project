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
    const [updateMode, setUpdateMode] = useState(false)

    const {user} = useContext(Context);

    // baseURL
    const HOST_BASE = "https://owas-senior-project.onrender.com";

    const pfile = `${HOST_BASE}/images/`;

    useEffect(()=>{
        const getDonor = async ()=>{
            const res = await axios.get(`${HOST_BASE}/donors/` + path);
            setDonor(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
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
            <div className='act'>
            <span className='badge'>{donor.status}</span>
            {donor.photo && (
            <img className='newDonorImg' src={pfile + donor.photo} alt=''/>
            )}
            {
                updateMode ? ( <input className='newDonorTitleInput' type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>)
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
            {
                updateMode ? ( <textarea className='newDonorDescInput' value={desc} onChange={(e)=> setDesc(e.target.value)}/>) :(
                    <p className='newDonorDesc'>{desc}</p>
                )
            }
            { updateMode &&
             <button className='newDonorButton' onClick={handleUpdate}>Update</button>
            }
        </div>
    </div>
  );
}

export default NewDonor;
