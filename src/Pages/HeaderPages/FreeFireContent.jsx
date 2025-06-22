import { Link } from "react-router-dom";

export function FreeFireContent() {
  return (
    <main className="freefirecontent">
      <div className="event-container">
        <h1 className="event-header">Free Fire </h1>
        <div className="event-img">
          <img
            className="event-img"
            src="https://tse1.mm.bing.net/th?id=OIP.0KfXnQE0PT2B2ibHuXeJ6AHaEK&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <div className="event-info">
          Free Fire brings the battleground to your fingertips — a
          high-intensity mobile gaming tournament where only one squad walks out
          as champion. This event is for all gaming enthusiasts who live for
          survival, strategy, and shooting under pressure. Open to all years and
          branches, participants must register in **teams of 4 players** — no
          solo entries allowed. Matches will be held in **custom rooms** with
          standard Free Fire rules and professional supervision. Only **Android
          and iOS mobile devices are allowed** — emulators or PCs are strictly
          banned. Each team must use their own mobile data — no Wi-Fi access
          will be provided at the venue. **No use of hacks, external devices,
          triggers, or unfair tools** — strict disqualification for violations.
          Voice chat between team members is allowed, but abusive language will
          result in immediate removal. Each squad must report at least 15
          minutes before their scheduled match — late entries will be skipped.
          Scoring will be based on both **placement rank** and **kill points**,
          with bonus points for Booyah winners. Finals will feature the top
          teams from all rooms in an epic battle for the fest championship.
          Winners and runners-up will receive cash prizes, certificates, and
          gamer-worthy shoutouts. Spectator mode and casting may be used during
          finals — so play fair and play fierce. It’s not just about survival —
          it’s about smart movement, teamwork, and cool execution. Gear up, drop
          in, and let your squad fight for the ultimate Booyah!
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
            <Link to="/FreeFireRegistrationContent">Register</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
