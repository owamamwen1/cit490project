import { useEffect, useState } from "react";
import Donors from "../../components/donors/Donors";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from 'axios';
import "./home.css";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [donors, setDonors] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async ()=> {
     const res = await axios.get("https://example.com/donors"+search);
    setDonors(res.data);
    }
    fetchPosts();
  },[search]);

  return (
    <>
      <Header />
      <div className="home">
        <Donors donors={donors}/>
        <Sidebar />
      </div>
      <Footer/>
    </>
  );
}
