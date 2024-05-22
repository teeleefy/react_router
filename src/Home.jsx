import NavBar from "./NavBar"
import "./Home.css";
import vending from "./assets/vending.jpeg"

function Home() {
  return (
    <div className="Home">
    <h1 className="Home-header">Choose a Refreshment!</h1>
    <img src={vending}></img>
    <NavBar/>
    </div>
  );
}

export default Home;