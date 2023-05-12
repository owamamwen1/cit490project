import{ Link } from 'react-router-dom';
import "./donor.css";

function Donor({donor}) {
    return (
     <div className="donor">
       <Link className='link' to={`/donor/${donor._id}`}>
      {donor.photo && (
        <img className="donorImg" src={donor.photo} alt="" />
      )}
      <span className='badge'>{donor.status}</span>
        <div className="donorInfo">
          <div className="donorCats">        
          {donor.categories.map((c)=> (
            <span className="donorCat">{c.name}</span>
          ))}
          </div>       
          <span className="donorTitle">{donor.title}</span>    
          <hr/>
          <span className="donorDate">{new Date(donor.createdAt).toDateString()}</span>
        </div>
        <p className="donorDesc">{donor.desc}</p>
        </Link>
      </div>
    );
}

export default Donor;


