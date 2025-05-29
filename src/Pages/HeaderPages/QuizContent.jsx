import { Link } from "react-router-dom"


export function QuizContent() {
  return (
      <main className="quizcontent">
          <div className="event-container">
         <h1 className="event-header">Quiz</h1>
          <div className="event-img">
                  <img className="event-img" src="https://tse1.mm.bing.net/th?id=OIP.WgNDvSJohcANNX6r4z_r0QHaFW&pid=Api&P=0&h=180" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
           
            <button className="register-button"><Link to="/QuizRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}
