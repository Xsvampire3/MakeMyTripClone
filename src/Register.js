import "./styles.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebasecomfig";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userName = data.get("userName");
    const password = data.get("password");

    createUserWithEmailAndPassword(auth, userName, password).then(
      (userDetails) => {
        console.log(userDetails.user);
        alert("Registration successful!");
      }
    );

    setTimeout(() => {
      navigate("/login");
    }, 0);
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="login3">
          <div className="login2">
            <div>
              <img
                style={{ width: "100px", height: "100px" }}
                src="https://cdn-icons-png.flaticon.com/128/10008/10008285.png"
                alt="register-logo"
              />
            </div>
            <div>
              <label>
                Email:
                <input
                  type="text"
                  name="userName"
                  placeholder="abc@gmail.com"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                />
              </label>
            </div>
          </div>
          <button type="submit" className="button-64">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
