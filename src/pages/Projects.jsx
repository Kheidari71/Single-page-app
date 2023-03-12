
import Portfolio from "./Portfolio.png";
export default function Dashboard() {
  return (
    <div className="ProjectContainer">
      <h2 className="ProjectH2">Here is some of my works.</h2>
      <div className="Portfolio">
        <img className="ProjectImg" src={Portfolio} alt="img" />
      </div>
    </div>
  );
}