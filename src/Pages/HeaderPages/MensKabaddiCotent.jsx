import { Link } from "react-router-dom";

export function MensKabaddiContent() {
  return (
    <main className="menskabaddicontent">
      <div className="event-container">
        <h1 className="event-header">Men`s Kabaddi</h1>
        <div className="event-img">
          <img
            className="event-img"
            src="https://tse1.mm.bing.net/th?id=OIP.0dkMP6vbYIIyRAHrV92SbwHaH5&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <div className="event-info">
          Men’s Kabaddi is where strength meets strategy, and every raid is a
          test of courage and coordination. It’s one of the most intense,
          action-packed events of the fest — and it’s not for the faint-hearted.
          This is a full-contact team sport where players battle it out with
          speed, grip, and precision. The mat becomes a battlefield, and only
          the strongest and smartest survive. Open to all male students from all
          years, participants must register individually — teams will be created
          through official selection or balanced grouping by the organizers.
          Each team will consist of **7 players + 2 substitutes**, and matches
          will follow a **5-minute per half** format with a 2-minute break.
          **Standard kabaddi rules apply**, including proper tagging, struggle,
          and defense techniques. Misconduct or intentional fouls will lead to
          immediate disqualification. **Only court shoes or barefoot play
          allowed** — no spikes or boots permitted on the field. Each raid must
          be completed within **30 seconds**, and proper “Kabaddi! Kabaddi!”
          chants must be maintained throughout. No use of rings, chains, or
          accessories will be allowed during the match for safety reasons.
          Referee and line-judge decisions are final — fair play is mandatory.
          Teams must report at least 15 minutes before the match time; walkover
          will be given after 5 minutes of delay. Winners and runners-up will
          receive medals, certificates, and full fest recognition. All players
          must follow discipline, team spirit, and uphold the true essence of
          this traditional Indian sport. Every touch point, every tackle, and
          every second on the mat will count. So bring your stamina, your focus,
          and your warrior spirit — because Kabaddi is calling. Step into the
          ring and prove your grit in the Men’s Kabaddi showdown!
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
            <Link to="/MensKabaddiRegistrationContent">Register</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
