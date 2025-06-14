import { Link } from "react-router-dom"

export function FreeFireContent() {
  return (
      <main className="freefirecontent">
      <div className="event-container">
         <h1 className="event-header">Free Fire </h1>
          <div className="event-img">
                  <img className="event-img" src="https://tse1.mm.bing.net/th?id=OIP.0KfXnQE0PT2B2ibHuXeJ6AHaEK&pid=Api&P=0&h=180" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="each-event-details-container">
           <p className="event-details-header">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
           
            <button className="event-register-button"><Link to="/FreeFireRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}