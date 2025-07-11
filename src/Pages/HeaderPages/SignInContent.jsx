import axios from "axios";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";

export function SignupContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, seInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submit button clicked at in try");
      const response = await axios.post(
        "https://miracle-fest-website-backend.onrender.com/api/auth/login",
        {
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
      setLoading(false);
      seInvalid(true);
      if (error.response) {
        if (error.response.status === 409) {
          setErrorMessage("Email already registered");
        } else if (error.response.status === 404) {
          setErrorMessage("User not found with this email");
        } else if (error.response.status === 401) {
          setErrorMessage("Invalid password");
        } else if (error.response.status === 500) {
          setErrorMessage("Server error, try again later");
        } else {
          setErrorMessage("Signup failed, try again");
        }
      } else {
        setErrorMessage("Network error");
      }

      console.error("Signup error:", error);
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
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="signupinput"
                  placeholder="  E-mail address"
                />
                <input
                  type="password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="signupinput"
                  placeholder="  Password"
                />

                <div className="captcha">
                  <input type="checkbox" className="checkbox" required />
                  <p className="verify">Verify if you are a human</p>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="signupinputbutton"
                >
                  Sign up
                </button>
                {invalid ? (
                  <p className="invalidcredentials">{errorMessage}</p>
                ) : (
                  <></>
                )}
              </div>
            </form>
            <div className="signinwithcontainer">
              <p className="signinwith">or you can sign in with , </p>
              <div className="signupcontainer">
                <img
                  className="signupicon"
                  src="https://cdn-icons-png.flaticon.com/128/10110/10110386.png"
                  alt=""
                />
                <img
                  className="signupicon"
                  src="https://img.icons8.com/?size=100&id=12599&format=png"
                  alt=""
                />
                <img
                  className="signupicon"
                  src="https://cdn-icons-png.flaticon.com/128/15047/15047495.png"
                  alt=""
                />
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
