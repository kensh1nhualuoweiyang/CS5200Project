import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import * as client from "../client";
import Cookies from "js-cookie";

function Login() {
    const [error, setError] = useState();
    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        const response = await client.userLogin(username, password);
        if (response.data === "Login Success") {
         
            const userCookie = Cookies.get('user');
            if (userCookie) {
                const userData = JSON.parse(userCookie);
                navigate(`/Application/Profile/${userData._id}`);
            } else {
                setError("User cookie not found");
            }
        } else {
            setError(response.data);
        }
    };

    return (
        <div className="wd-login-content">
            {error && <p className="wd-login-error-msg">{error}</p>}
            <div className="wd-login-form">
                <h4>Login</h4>
                <label htmlFor="username" className="form-label mt-4">
                    Username
                </label>
                <input type="text" id="username" className="form-control" onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="loginPassword" className="form-label mt-4">
                    Password
                </label>
                <input type="password" id="loginPassword" className="form-control" onChange={(e) => setPass(e.target.value)} />
                <button type="button" className="btn btn-secondary mt-3 mb-3 me-3" onClick={login}>
                    Login
                </button>
                <Link to="/Application/Home" className="btn btn-secondary mt-3 mb-3">
                    Cancel
                </Link>
            </div>
        </div>
    );
}

export default Login;
