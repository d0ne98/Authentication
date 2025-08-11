import { useNavigate } from "react-router-dom"
import {useAuth} from "../AuthContext";
export default function Header() {

    const {isAuthenticated, logout} = useAuth();

    const navigate = useNavigate();
    return(
        <div>
            <button onClick= {() => navigate("/")} >HomePage</button>
            {isAuthenticated ? <button onClick= {() => logout() } >Logout</button> : 
            <div> <button onClick= {() => navigate("/login")} >Login</button>
            <button onClick={() => navigate("/register")} >Register</button> </div> }
            <button onClick={() => navigate("/secret")} >Secret Page</button>
        </div>
    )
}