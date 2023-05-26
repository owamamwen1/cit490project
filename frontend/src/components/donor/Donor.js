import{ Link } from 'react-router-dom';
import "./donor.css";

function Donor({donor}) {

    // baseURL
    const HOST_BASE = "http://localhost:8080";

  const pfile = `${HOST_BASE}/images/`;

    return (
     <div className="donor">
       <Link className='link' to={`/view/${donor._id}`}>
      {donor.photo && (
        <img className="donorImg" src={pfile + donor.photo} alt="" />
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


