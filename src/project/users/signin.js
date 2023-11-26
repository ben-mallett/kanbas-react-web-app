import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    console.log(credentials);
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
    <div className="form-group grid">
      <div className="row">
        <h1 className="pl-100">Log In</h1>
      </div>
      <div className="row">
        <input className="form-control col" value={credentials.username} placeholder="username" onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
        <input className="form-control col" value={credentials.password} placeholder="password" onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      </div>
      <div className="row">
        <button className="btn btn-primary" onClick={signin}> Signin </button>
      </div>
    </div>
  );
}
export default Signin;