import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./sidebar.css";

export default function Sidebar() {
  // baseURL
  const HOST_BASE = "http://localhost:8080";

  const [cats, setCats] = useState([]);

  useEffect(()=>{
      const getCagetory = async ()=>{
          const res = await axios.get(`${HOST_BASE}/categories`);
          setCats(res.data);
      };
      getCagetory();
  },[]);


  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">GOOD FOOD</span>
        <img
          src="https://cdn.glitch.global/a1ac18a2-2ef1-4598-a52e-4a3c74d9ff97/food-a.png"
          alt=""
        />
        <p>
        Good food is important for our overall health, well-being, and longevity. It provides essential nutrients, boosts energy levels, improves brain function, supports healthy growth and development, reduces the risk of chronic diseases, supports the immune system, and promotes a healthy weight.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c)=>(
            <Link className="link" to={`/?cat=${c.name}`}>
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
