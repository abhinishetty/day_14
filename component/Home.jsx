import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
<h2>Home component</h2>
<p>This is the home component.created to learn react routing</p>
<Link to="/profile">Go to Profile</Link>
        </div>
    )
}
export default Home;    