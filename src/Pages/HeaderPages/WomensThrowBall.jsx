import { Link } from "react-router-dom"

export function WomensThrowBallContent() {
  return (
      <main className="womensthrowballcontent">
        <div className="event-container">
         <h1 className="event-header">Women`s Throw Ball</h1>
          <div className="event-img">
                  <img className="event-img" src="https://st2.depositphotos.com/1518767/11358/i/950/depositphotos_113581422-stock-photo-sportswoman-throwing-ball.jpg" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="each-event-details-container">
           <p className="event-details-header">Event Details </p>
            <div className="event-timings-info">
               <p className="event-timings-info-item"><span className="event-details-key">Event Date</span><span className="event-details-column">:</span><span className="event-details-value"></span> </p>
              <p className="event-timings-info-item"><span className="event-details-key">Event Start time</span><span className="event-details-column">:</span><span className="event-details-value"></span> </p>
              <p className="event-timings-info-item"><span className="event-details-key">Event Venue</span><span className="event-details-column">:</span><span className="event-details-value"></span></p>
              <p className="event-timings-info-item"><span className="event-details-key">Event End time</span><span className="event-details-column">:</span><span className="event-details-value">8 : 00 PM</span> </p>
           
            </div>
          
            <button className="event-register-button"><Link to="/WomesThrowBallRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}

