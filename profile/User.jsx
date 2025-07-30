import { useParams } from "react-router-dom";
import User1 from "./User1";
import User2 from "./User2";
import User3 from "./User3";
function User(){
    const { username } = useParams();
    return(
        <div>
            {/* <h2>User component</h2>
            <h1>Welcome: {username}</h1>
            <p>This is the {username} component created to learn react routing</p> */}
           {username=== "ram"?<User1/> :username==="shyam" ? <User2/> : username==="ajay"? <User3/>:<h2>guest Component:</h2>}
        </div>
    );
}
export default User;