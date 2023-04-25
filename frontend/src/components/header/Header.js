import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">help address the root causes of poverty and hunger</span>
        <span className="headerTitleLg">Food Donation Management</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.glitch.global/a1ac18a2-2ef1-4598-a52e-4a3c74d9ff97/food-2.jpg"
        alt=""
      />
    </div>
  );
}
