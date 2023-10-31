import { Link } from "react-router-dom"
import "./index.css"
function Register() {
    const errorMsg = "Duplicate Username Found, Please Chose another user name"
    return (
        <div className="wd-register-content " >
            <p className="wd-register-error-msg">{errorMsg }</p>
            <div className="wd-register-form ">
                <h4>Register</h4>
                <label for="username" className="form-label mt-4">Username</label>
                <input type="username" id="password" className="form-control" />
                <label for="password" className="form-label mt-4">Password</label>
                <input type="password" id="password" className="form-control" />
                <label for="email" className="form-label mt-4">Email</label>
                <input type="email" id="password" className="form-control" />
                <button type="submit" className="btn btn-secondary mt-3 mb-3 me-3">Register</button>
                <Link to="/Application/Home" className="btn btn-secondary mt-3 mb-3">Cancel</Link>
            </div>
        </div>


    )
}

export default Register