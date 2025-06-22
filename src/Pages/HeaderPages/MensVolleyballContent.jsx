import { Link } from "react-router-dom";

export function MensVolleyBallContent() {
  return (
    <main className="mensvolleyballcontent">
      <div className="event-container">
        <h1 className="event-header">Men`s Volley Ball</h1>
        <div className="event-img">
          <img
            className="event-img"
            src="https://tse1.mm.bing.net/th?id=OIP.XICFwqLzCt8cziRG2Hn0QgHaHa&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <div className="event-info">
          Men’s Volleyball is a thrilling mix of power, coordination, and
          lightning-fast reflexes — where every serve, set, and spike takes you
          one step closer to glory. This event invites male students from all
          years and branches to battle it out on the court with precision,
          teamwork, and explosive energy. Teams will consist of **6 players on
          court + 2 substitutes**, and matches will follow a **best-of-3 sets**
          format. Each set will be played to **21 points (rally scoring)** with
          a 2-point lead to win. Standard volleyball rules apply — including
          rotations, service zones, and no double touches. All players must wear
          proper sports attire — **no slippers or barefoot play allowed**. Only
          overhand and underhand serves are allowed — no jump serves to ensure
          fairness. Misconduct, arguing with referees, or unsportsmanlike
          behavior will result in penalties or immediate team disqualification.
          **Teams must report 15 minutes before match time** — walkovers will be
          given after 5 minutes of delay. Blocking a serve or touching the net
          will be considered a fault. The organizing team will provide
          volleyballs — players must bring their own gear (shoes, towels, etc.).
          Matches will be held in a knockout format — each game is do-or-die.
          Winners and runners-up will receive medals, certificates, and full
          fest-stage recognition. This is more than a game — it’s about focus,
          rhythm, and passion for the sport. So warm up, gear up, and get ready
          to serve your way to victory!
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
            <Link to="/MensVolleyBallRegistrationContent">Register</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
