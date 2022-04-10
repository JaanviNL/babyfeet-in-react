import { Link } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label className="field-label">Email Address</label>
          <input className="input-form" placeholder="joe@abcd.com" />
          <label className="field-label">Password</label>
          <input type="password" className="input-form" />
          <div className="flex">
            <input type="checkbox" />
            <label className="rem-label">Remember Me</label>
          </div>
          <button className="btn login-btn">Login</button>
        </form>

        <div className="flex-link">
          <Link to="/signup" className="pw-link">
            Forgot Password?
          </Link>
          <p>
            Don't have an account.<br></br>
            <Link to="/signup" className="pw-link">
              Register Here
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
