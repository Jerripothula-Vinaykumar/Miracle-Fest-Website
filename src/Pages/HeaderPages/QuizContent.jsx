import { Link } from "react-router-dom";

export function QuizContent() {
  return (
    <main className="quizcontent">
      <div className="event-container">
        <h1 className="event-header">Quiz</h1>
        <div className="event-img">
          <img
            className="event-img"
            src="https://tse1.mm.bing.net/th?id=OIP.WgNDvSJohcANNX6r4z_r0QHaFW&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <div className="event-info">
          Quiz Quest is the ultimate brain battle where knowledge, teamwork, and
          quick thinking collide in a high-energy competition. It’s not just
          about what you know — it’s how well you adapt. In this event, you
          don’t choose your team — **we do!** All participants register
          individually, and teams will be formed by the organizers on the spot
          by pairing candidates randomly or strategically. This format adds a
          twist of excitement and unpredictability, making the event fresh and
          challenging. Open to students from all years and branches, the quiz
          will cover a wide range of topics — general knowledge, logical
          reasoning, tech trivia, and more. Expect multiple rounds including
          MCQs, buzzer rounds, audio-visual questions, and rapid fire! Phones
          and other gadgets are strictly not allowed — it's your instincts and
          interaction that count. You’ll need to communicate, trust, and think
          fast with your surprise teammate. Every round raises the stakes — only
          the sharpest teams make it to the final showdown. Get ready for
          questions that challenge your brain and moments that test your
          teamwork. Tiebreakers will be high-pressure and spontaneous — speed
          and synergy are key. Winning teams walk away with exciting prizes, but
          every participant earns a story worth telling. Participation
          certificates will be awarded to all — because being curious is always
          worth it. So come solo, leave as part of a team, and prove your quiz
          game is on point. Quiz Quest is calling — are you ready to think,
          connect, and conquer?
        </div>
        <div className="each-event-details-container">
          <p className="event-details-header">Event Details </p>
          <div className="event-timings-info">
            <p className="event-timings-info-item">
              <span className="event-details-key">Event Date</span>
              <span className="event-details-column">:</span>
              <span className="event-details-value"></span>{" "}
            </p>
            <p className="event-timings-info-item">
              <span className="event-details-key">Event Start time</span>
              <span className="event-details-column">:</span>
              <span className="event-details-value"></span>{" "}
            </p>
            <p className="event-timings-info-item">
              <span className="event-details-key">Event Venue</span>
              <span className="event-details-column">:</span>
              <span className="event-details-value"></span>
            </p>
            <p className="event-timings-info-item">
              <span className="event-details-key">Event End time</span>
              <span className="event-details-column">:</span>
              <span className="event-details-value"></span>{" "}
            </p>
          </div>

          <button className="event-register-button">
            <Link to="/QuizRegistrationContent">Register</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
