import { Link } from "react-router-dom"

export function EventRegistrationContent() {
      return(
        <main className="eventregistrationcontent">
            <div className="container2">
           <p className="event-registration-header">Registration Form </p>
            <div className="event-timings-info">
              <input type="text" className="signupinput-eve-reg"  placeholder="  Name of the Event"/>
              <input type="text" className="signupinput-eve-reg"  placeholder="  Branch"/>
               <input type="text" className="signupinput-eve-reg"  placeholder="  Year"/>
                 <input type="text" className="signupinput-eve-reg"  placeholder="  Department"/>
              <input type="text" className="signupinput-eve-reg"  placeholder="  Section"/>
             <button className="event-reg-submit-button"><Link to="/EventRegistrationContent">Submit</Link></button>
            </div>
           <div className="event-register-info">
              <p>For any Queries Contact Coordinator , 
              </p>
              <p>Coordinator Name : </p>
              <p>Coordinator Mobile : 00000-00000</p>
            </div>
            </div>
        </main>
      )
}