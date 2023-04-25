import "./sidebar.css";

export default function Sidebar() {


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
            <li className="sidebarListItem">Salad</li>
            <li className="sidebarListItem">Pasta & risotto</li>
            <li className="sidebarListItem">Curry</li>
            <li className="sidebarListItem">Bread & doughs</li>
            <li className="sidebarListItem">Antipasti</li>
            <li className="sidebarListItem">Stew</li>

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
