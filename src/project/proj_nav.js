import { Link } from "react-router-dom";


export default function ProjNav() {
 return (
   <nav className="nav nav-tabs mb-2">
     <Link className="nav-link" to="/project/home">Home</Link>
     <Link className="nav-link" to="/project/signin">Sign In</Link>
     <Link className="nav-link" to="/project/account">Account</Link>
     <Link className="nav-link" to="/project/signup">Sign Up</Link>
   </nav>
 );
}