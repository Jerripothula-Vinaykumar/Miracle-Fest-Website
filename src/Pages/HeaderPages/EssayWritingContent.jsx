
export function EssayWritingContent() {
  return (
      <main className="essaywritingcontent">
          <div className="event-container">
         <h1 className="event-header">Essay Writing</h1>
          <div className="event-img">
                  <img className="event-img" src="https://i.pinimg.com/originals/76/a7/8e/76a78e7c51a8ca6d4c8004a7e02875e4.jpg" alt="" />
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
          
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}
