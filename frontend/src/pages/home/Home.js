import Donors from "../../components/donors/Donors";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home() {


  return (
    <>
      <Header />
      <div className="home">
        <Donors/>
        <Sidebar />
      </div>
      <Footer/>
    </>
  );
}
