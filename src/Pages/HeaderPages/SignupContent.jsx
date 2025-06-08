import axios from "axios";
import { useState } from "react";

  
export  function SignupContent() {
     
    return (
       <main className="registercontent"> 
            
        <section className="register-container">
            <form onSubmit={handleSubmit}>
           <input type="email" className="signupinput"  placeholder="  E-mail address"/>
            <input type="password" className="signupinput"  placeholder="  Password"/>
        </form>
            <div className="captcha"><input type="checkbox" className="checkbox" /> <p className="verify">Verify if you are a human</p></div>
            <button type="submit" className="signupinputbutton">Sign up</button> 
            <div ></div>
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


