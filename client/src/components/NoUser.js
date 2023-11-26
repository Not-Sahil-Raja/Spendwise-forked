import "../styles/NoUser.css";
import "../index.css";
import Default from "../images/default.png";


function NoUser()
{
    return(
        <div className="noUser_container">
            <img src={Default} alt="No User" />
        </div>
    );
}


export default NoUser;