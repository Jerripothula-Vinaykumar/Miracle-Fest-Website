import { Link } from "react-router-dom";

export function CarromBoardContent() {
  return (
    <main className="carromboardcontent">
      <div className="event-container">
        <h1 className="event-header">Carroms</h1>
        <div className="event-img">
          <img
            className="event-img"
            src="https://tse2.mm.bing.net/th?id=OIP.d6fTjJ1_7Hk6FkmIyHNz7wHaEo&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <div className="event-info">
          Carrom Board is the ultimate indoor showdown of precision, patience,
          and control. It’s not about luck — it’s about strategy, skill, and
          smooth fingertips. This event invites participants from all branches
          and years to test their aim and dominate the board with perfect flicks
          and pocket shots. Players can register for either **singles** or
          **doubles** — and each match will follow standard knockout rules. In
          singles, it’s one-on-one — pure skill and focus. In doubles, it’s all
          about team coordination and shared rhythm. Matches will be played to
          **21 points** or **2 boards max**, whichever comes first. **Fouls like
          pocketing the striker or covering the queen without a follow-up coin**
          will be penalized as per carrom rules. **The queen must be covered
          within the next valid shot**, or it returns to the center. All players
          must maintain fair play, avoid distractions, and handle the equipment
          with care. Players will not be allowed to use personal strikers —
          standard strikers will be provided by organizers. No rough flicks,
          loud talking, or external coaching during matches. Participants must
          report to the venue 10 minutes before their match timing — latecomers
          may face disqualification. Winners and runners-up will receive
          certificates, medals, and bragging rights as board kings! All boards
          and coins will be arranged by the coordinators — just bring your focus
          and finesse. This is not just a game of coins — it's a duel of nerves
          and hands. Pocket smart, play smooth, and let your fingers do the
          talking!
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
            <Link to="/CarromsRegistrationContent">Register</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
