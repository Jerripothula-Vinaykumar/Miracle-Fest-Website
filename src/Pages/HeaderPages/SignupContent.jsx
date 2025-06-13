import axios from "axios";
import { useState } from "react";

  
export  function SignupContent() {
        const [email , setEmail ] = useState("");
        const [password , setPassword] = useState("");

        const handleSubmit = (e) => {
            try{
                const response = axios.post("http://localhost:8080/api/auth/signup" , { 
                    email , 
                    password
                });
                console.log(response.data);
            }
            catch(error){
                console.log("Error : " + error);
            }
        } 
    return (
       <main className="registercontent"> 
            
        <section className="register-container">
            <form onSubmit={handleSubmit}>
          <div className="signupinputcontainer">
            <input type="email" onChange={(e) => {setEmail(e.target.value)}} className="signupinput"  placeholder="  E-mail address"/>
            <input type="password" onChange={(e) => {setPassword(e.target.value)}} className="signupinput"  placeholder="  Password"/>
            </div>
        
            <div className="captcha"><input type="checkbox" className="checkbox" /> <p className="verify">Verify if you are a human</p></div>
            <button type="submit" className="signupinputbutton">Sign up</button> 
            <div ></div>
            </form>
            <div className="">
                <p className="signinwith">or you can sign in with , </p>
                <div className="signupcontainer">
                    <img className="signupicon" src="https://cdn-icons-png.flaticon.com/128/10110/10110386.png" alt="" />
                    <img className="signupicon" src="https://img.icons8.com/?size=100&id=12599&format=png" alt="" />
                    <img className="signupicon" src="https://cdn-icons-png.flaticon.com/128/15047/15047495.png" alt="" />
               
                </div>

            </div>
        </section>
       </main>
    )
  
  }


