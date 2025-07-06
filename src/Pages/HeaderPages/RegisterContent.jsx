import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";

export function RegisterContent() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validate = () => {};
    setLoading(true);
    try {
      const response = await axios.post(
        "https://miracle-fest-website-backend.onrender.com/api/auth/login",
        {
          username,
          email,
          password,
        }
      );
      
      if (response.status === 200) {
        setTimeout(() => {
          setLoading(false);

          navigate("/HomeContent");
        }, 1500);
      }
    } catch (error) {
      console.log("Error : " + error);
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
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                  name="name"
                  placeholder="  Username"
                />
                <input
                  type="email"
                  name="email"
                  className="signupinput"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  placeholder="  E-mail address"
                />
                <input
                  type="password"
                  name="password"
                  className="signupinput"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="  Password"
                />
                <input
                  type="password"
                  name="confirm password"
                  className="signupinput"
                  required
                  placeholder="  Confirm password"
                />

                <div className="captcha">
                  <input
                    type="checkbox"
                    name="captcha"
                    className="checkbox"
                    required
                  />
                  <p className="verify">Verify if you are a human</p>
                </div>
                <button type="submit" className="signupinputbutton">
                  Submit
                </button>
              </div>
            </form>
            <div>
              <p className="haveanacc">
                Have an account ? <Link to="/SignupContent">Sign in</Link>
              </p>
            </div>
            <div className="">
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
