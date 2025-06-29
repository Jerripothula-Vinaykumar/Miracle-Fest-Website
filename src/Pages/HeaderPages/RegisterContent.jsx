import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export function RegisterContent() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const navigateto = async (e) => {
    e.preventDefault();

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
            <form onSubmit={navigateto}>
              <input
                type="text"
                className="signupinput"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="  Username"
              />
              <input
                type="email"
                className="signupinput"
                onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                placeholder="  E-mail address"
              />
              <input
                type="password"
                className="signupinput"
                onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                placeholder="  Password"
              />
              <input
                type="password"
                className="signupinput"
                placeholder="  Confirm password"
              />

              <div className="captcha">
                <input type="checkbox" className="checkbox" />{" "}
                <p className="verify">Verify if you are a human</p>
              </div>
              <button type="submit" className="signupinputbutton">
                Sign up
              </button>
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
