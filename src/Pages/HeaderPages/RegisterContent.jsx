import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";

export function RegisterContent() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://miracle-fest-website-backend.onrender.com/api/auth/signup",
        {
          username,
          email,
          password,
        }
      );

      if (response.status === 200 && response.data) {
        setLoading(true);
        const token = response.data;

        localStorage.setItem("token", token);

        setTimeout(() => {
          setLoading(false);
          navigate("/HomeContent");
        }, 1000);
      }
    } catch (error) {
      console.error("Signup error:", error);
      setLoading(false);

      if (error.response) {
        const { status, data } = error.response;

        if (status === 409) {
          setErrorMessage("Email already registered");
        } else if (status === 500) {
          setErrorMessage("Server error, try again later");
        } else {
          setErrorMessage(data || "Signup failed");
        }
      } else {
        setErrorMessage("Network error, please try again");
      }
    }
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <main className="registercontent">
          <section className="register-container">
            <form onSubmit={handleSubmit}>
              <div className="signupinputcontainer">
                <input
                  type="text"
                  className="signupinput"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="  Username"
                />
                <input
                  type="email"
                  className="signupinput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="  E-mail address"
                />
                <input
                  type="password"
                  className="signupinput"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="  Password"
                />
                <input
                  type="password"
                  className="signupinput"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="  Confirm password"
                />

                <div className="captcha">
                  <input type="checkbox" className="checkbox" required />
                  <p className="verify">Verify if you are a human</p>
                </div>

                <button type="submit" className="signupinputbutton">
                  Submit
                </button>

                {errorMessage && (
                  <p className="invalidcredentials">{errorMessage}</p>
                )}
              </div>
            </form>

            <div className="haveanacccontainer">
              <p className="haveanacc">
                Have an account? <Link to="/SignupContent">Sign in</Link>
              </p>
              <p className="signinwith">or you can sign in with</p>
            </div>

            <div className="signupcontainer">
              <img
                className="signupicon"
                src="https://cdn-icons-png.flaticon.com/128/10110/10110386.png"
                alt="google"
              />
              <img
                className="signupicon"
                src="https://img.icons8.com/?size=100&id=12599&format=png"
                alt="linkedin"
              />
              <img
                className="signupicon"
                src="https://cdn-icons-png.flaticon.com/128/15047/15047495.png"
                alt="github"
              />
            </div>
          </section>
        </main>
      )}
    </>
  );
}
