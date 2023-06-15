import { useContext, useState, useEffect } from 'react';
import axios from "axios";
import './writeDonor.css';
import { Context } from '../../context/Context';

function WriteDonor() {
  // baseURL
  const HOST_BASE = "http://localhost:8080";

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
 
  const {user} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDonor = {
      username: user.username,
      title,
      desc,
     status,
     categories,
     email,
     phone,
     address,
     region,
     country,

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

  // Select food categories
  const [cats, setCats] = useState([]);
  const [categories, setCategories] = useState([{name:"Pizza"}]);

  useEffect(()=>{
      const getCagetory = async ()=>{
          const res = await axios.get(`${HOST_BASE}/categories`);
          setCats(res.data);
      };
      getCagetory();
  },[]);

  //  const getInitialCat = () => {
  //   const cat = [{name:"Pizza"}];
  //   // const cat = "Pizza";
  //   return cat;
  // };

  const handleCategoryChange = (e) => {
    setCategories(e.target.value);
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
                &nbsp;&nbsp;
                <select value={categories} onChange={handleCategoryChange}>
                {cats.map((d)=>(
                // <option value={`[{name:${d.name}}]`}>{d.name}</option>
                <option value={d.name}>{d.name}</option>
                ))}
                </select>
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='Please describe the food...' type='text' className='writeInput writeText' onChange={(e)=> setDesc(e.target.value)}></textarea>
            </div>
            <div className='writeFormGroupColumn'>
            <input type='email' placeholder='john@donor.com' className='writeInput' autoFocus={true} onChange={(e)=> setEmail(e.target.value)}/>
            <input type='number' placeholder='343456545646' className='writeInput' autoFocus={true} onChange={(e)=> setPhone(e.target.value)}/>
            <input type='text' placeholder='12 staint-merri, paris' className='writeInput' autoFocus={true} onChange={(e)=> setAddress(e.target.value)}/>
            <input type='text' placeholder='Île-de-France' className='writeInput' autoFocus={true} onChange={(e)=> setRegion(e.target.value)}/>
            <input type='text' placeholder='France' className='writeInput' autoFocus={true} onChange={(e)=> setCountry(e.target.value)}/>
            </div>
            <div className='writeFormGroup'>
            <button className='writeSubmit' type='submit'>Publish</button>
            </div>
        </form>
    </div>
  );
}

export default WriteDonor;