import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './newDonor.css';

function NewDonor() {
    const location = useLocation();
    const path = (location.pathname.split("/")[2]);
    const [donor, setDonor] = useState({});

    useEffect(()=>{
        const getDonor = async ()=>{
            const res = await axios.get("https://example.com/donors/" + path);
            setDonor(res.data);
        };
        getDonor();
    },[path]);
    
  return (
    <div className='newDonor'>
        <div className='newDonorWrapper'>
            <div className='act'>
            {donor.photo && (
            <img className='newDonorImg' src={donor.photo} alt=''/>
            )}
            <span className='badge'>{donor.status}</span>
            </div>
            <h1 className='newDonorTitle'>
                {donor.title} 
                <div className='newDonorEdit'>
                    <i className='newDonorIcon far fa-edit'></i>
                    <i className='newDonorIcon far fa-trash-alt'></i>
                   
                </div>
            </h1>
            <div className='newDonorInfo'>
                <span className='newDonorAuthor'>
                Donor :
                <Link className='link' to={`/?user=${donor.username}`}>
                 <b> {donor.username}</b>
                 </Link>
                 </span>
                <span className='newDonorDate'>{new Date(donor.createdAt).toDateString()}</span>
            </div>
            <p className='newDonorDesc'>{donor.desc}</p>
        </div>
    </div>
  );
}

export default NewDonor;
