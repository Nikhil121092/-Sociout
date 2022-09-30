import "../../style/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import users from "../../data/users.json";

function Login() {
  const initalValues = { username: "", password: "" };
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initalValues);
  const [formErrors, setFormErrors] = useState({});
  const [isUser, setIsUser] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
      return errors;
    } else if (!regex.test(values.username)) {
      errors.username = "This is not a valid username format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
      return errors;
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
      return errors;
    } else if (values.password.length > 20) {
      errors.password = "Password cannot exceed more than 20 characters";
      return errors;
    }
    loginApi(formValues.username, formValues.password);
  };

  const loginApi = (username, password) => {
    console.log(users);
    const user = users.find(
      (ele) => ele.email === username && ele.password === password
    );
    if (!user) {
      setIsUser(false);
      setTimeout(() => {
        setIsUser(true);
      }, 2000);
      return;
    }
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <form>
          <div>
            <span className="login-txt">Login</span>
          </div>
          <div>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Your email"
              value={formValues?.username}
            />
            <div>
              <p className="error">{formErrors?.username}</p>
            </div>
          </div>
          <div>
            <input
              type="passsword"
              name="password"
              onChange={handleChange}
              placeholder="Your password"
              value={formValues?.password}
            />

            <div>
              <p className="error">{formErrors?.password}</p>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>

          {!isUser && (
            <div className="alert alert-danger" role="alert">
              User does not exists.
            </div>
          )}
          <div>
            <span>New to this page? </span>
            <span className="rgst" onClick={() => navigate("/signup")}>
              Signup
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
