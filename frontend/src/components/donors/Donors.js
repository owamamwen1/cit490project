import React from 'react';
import Donor from "../donor/Donor";
import "./donors.css";

function Donors({donors}) {
  return (
    <div className='donors'>
      {donors.map((d)=>(
        <Donor donor={d}/>
      ))}
      
    </div>
  );
}

export default Donors;
