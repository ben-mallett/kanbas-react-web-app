import Signin from "./users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../components/nav";
import Account from "./users/account";
import ProjNav from "./proj_nav";
import UserTable from "./users/table";
import Signup from "./users/signup";


function Project() {
  return (
    <div className="row">
      <Nav />
      <ProjNav />
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="home" element={<h1>Home</h1>}/>
          <Route path="signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable/>}/>
          <Route path="/signup" element={<Signup/>} />
        </Routes> 
      </div>
    </div>
  );
}
export default Project;