import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  const save = async () => {
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };


  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div className="form-group grid">
            <div className="row">
                <div className="col">
                    <label htmlFor="password" className="m-1">Password</label>
                    <input id="password" className="form-control m-1" value={account.password} onChange={(e) => setAccount({ ...account, password: e.target.value })}/>
                </div>
                <div className="col">
                    <label htmlFor="firstName" className="m-1">First Name</label>
                    <input id="firstName" className="form-control m-1" value={account.firstName} onChange={(e) => setAccount({ ...account, firstName: e.target.value })}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="lastName" className="m-1">Last Name</label>
                    <input id="lastName" className="form-control m-1" value={account.lastName} onChange={(e) => setAccount({ ...account, lastName: e.target.value })}/>
                </div>
                <div className="col">                    
                    <label htmlFor="dob" className="m-1">Date of Birth</label>
                    <input id="dob" className="form-control m-1" value={account.dob} onChange={(e) => setAccount({ ...account, dob: e.target.value })}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="email" className="m-1">Email</label>
                    <input id="email" className="form-control m-1" value={account.email} onChange={(e) => setAccount({ ...account, email: e.target.value })}/>
                </div>
                <div className="col">
                    <label htmlFor="role" className="m-1">Email</label>
                    <select id="role" className="form-control m-1" onChange={(e) => setAccount({ ...account,
                        role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <button className="btn btn-secondary w-100 m-1" onClick={save}>Submit</button>
                <button onClick={signout} className="btn btn-danger">
                    Signout
                </button>
            </div>
            
            <div className="row">
                <Link to="/project/admin/users" className="btn btn-warning m-1 w-100">
                    Users
                </Link>
            </div>
        </div>
      )}
    </div>
  );
}
export default Account;