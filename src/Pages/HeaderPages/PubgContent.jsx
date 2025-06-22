import { Link } from "react-router-dom";

export function PubgContent() {
  return (
    <main className="pubgcontent">
      <div className="event-container">
        <h1 className="event-header">Battle Grounds Mobile</h1>
        <div className="event-img">
          <img
            className="event-img"
            src="https://tse2.mm.bing.net/th?id=OIP.Wp2liTM_bFMo7rlt99jicwHaEo&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <div className="event-info">
          Get ready to drop, loot, and dominate — BGMI is here to bring elite
          mobile gamers together in a fierce battle for survival and glory. This
          high-stakes mobile eSports event is open to all students from all
          years and branches. Participants must register in **squads of 4
          players** — no solo or duo entries allowed for this edition. All
          matches will be held in **custom rooms**, monitored by event
          coordinators to ensure fair play and smooth execution. Only mobile
          devices (Android/iOS) are allowed — **emulators, gamepads, triggers,
          and hacks are strictly banned**. Players must use their own devices
          and data — no external Wi-Fi or power banks will be provided. The
          match format will include **Classic Battle Royale mode**, with maps
          like **Erangel, Miramar**, and **Sanhok** rotated across rounds.
          Scoring will be based on **placement points + kills**, with additional
          points for chicken dinner winners. **Abusive language, teaming, or
          exploiting glitches** will lead to instant disqualification. All teams
          must join the room within 5 minutes of the ID/password being shared —
          late entries won’t be entertained. Spectator view, casting, or
          livestream may be enabled during finals — so bring your best play.
          Finalists will battle it out in an intense finale, and the top squads
          will walk away with prizes, certificates, and gaming glory. Carry your
          earphones, charge your devices, and keep your strategy sharp. BGMI
          isn’t just a game — it’s a battleground of skill, synergy, and
          survival. Drop in, lock on, and let the hunt begin. Winner winner,
          chicken dinner awaits !
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
            <Link to="/PubgRegistrationContent">Register</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
