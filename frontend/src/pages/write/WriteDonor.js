import { useContext, useState } from 'react';
import axios from "axios";
import './writeDonor.css';
import { Context } from '../../context/Context';

function WriteDonor() {
  // baseURL
  const HOST_BASE = "https://owas-senior-project.onrender.com";

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
 
  const {user} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDonor = {
      username: user.username,
      title,
      desc,
     status,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newDonor.photo = filename;
      try{
        await axios.post(`${HOST_BASE}/upload`, data);
      }catch(err){};
      try{
       const res =  await axios.post(`${HOST_BASE}/donors`, newDonor);
        window.location.replace("/view/"+res.data._id);
      }catch(err){};
    }
  }

  // Select food Status
  const getInitialState = () => {
    const status = "available";
    return status;
  };
  const [status, setStatus] = useState(getInitialState);

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className='write'>
      {file && (
        <img className='writeImg' src={URL.createObjectURL(file)} alt=''/>
      )}
        <form className='writeForm' onSubmit={handleSubmit}>
          <div className='writeFormGroup'>
                <label htmlFor='fileInput'><i className='writeIcon fas fa-plus'></i></label>
                <input className='fileOutpit' type='file' name='' id='fileInput' onChange={(e)=> setFile(e.target.files[0])}/>
                <input type='text' placeholder='title' className='writeInput' autoFocus={true} onChange={(e)=> setTitle(e.target.value)}/>
              <select value={status} onChange={handleChange}>
                  <option value="available">available</option>
                  <option value="unavailable">unavailable</option>
                </select>
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='Please describe the food...' type='text' className='writeInput writeText' onChange={(e)=> setDesc(e.target.value)}></textarea>
            </div>
            <div className='writeFormGroup'>
            <button className='writeSubmit' type='submit'>Publish</button>
            </div>
        </form>
    </div>
  );
}

export default WriteDonor;