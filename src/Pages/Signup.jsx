import { Link } from "react-router-dom";
import "../styles/login.css";
import "../styles/signup.css";

export default function Signup() {
  return (
    <div className="login login-s">
      <div class="login-form signup">
        <h2>Signup</h2>
        <form>
          <label class="field-label">First Name</label>
          <input type="text" class="input-form" />
          <label class="field-label">Last Name</label>
          <input type="text" class="input-form" />
          <label class="field-label">Email Address</label>
          <input class="input-form" placeholder="joe@abcd.com" />
          <label class="field-label">Password</label>
          <input type="password" class="input-form" />
          <div class="flex">
            <input type="checkbox" />
            <label class="rem-label">
              I accept all terms and return-refund policy.
            </label>
          </div>
          <button class="btn login-btn">Register</button>
        </form>

        <div class="flex-link">
          <p>
            Already a member?<br></br>
            <Link to="/login" class="pw-link">
              Login Here
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
