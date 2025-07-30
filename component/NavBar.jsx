import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
    <Link to="/">Home</Link> <br></br>
    <Link to="/profile"> Ram</Link><br></br>
    {/* <Link to="/profile/Ram">Ram's Profile</Link><br></br>
    <Link to="/profile/Shyam">Shyam's Profile</Link><br></br>
    <Link to="/profile/Varsha">Varsha's Profile</Link><br></br> */}

        {/* <li><a href="/home">Home</a></li>
        <li><a href="/profile">Profile</a></li> */}
     
    </div>
  );
}
export default NavBar;