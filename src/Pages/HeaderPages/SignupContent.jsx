import axios from "axios";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";

export function SignupContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://miracle-fest-website-backend.onrender.com/api/auth/login",
        {
          email,
          password
        }
      );
      if (response.status === 200) {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);

          navigate("/HomeContent");
        }, 1300);
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
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="signupinput"
                  required
                  placeholder="  E-mail address"
                />
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="signupinput"
                  required
                  placeholder="  Password"
                />

                <div className="captcha">
                  <input type="checkbox" className="checkbox" required />
                  <p className="verify">Verify if you are a human</p>
                </div>
                <button type="submit" className="signupinputbutton">
                  Sign up
                </button>
              </div>
            </form>
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
