import { Link } from "react-router-dom";

export function MensKhoKhoContent() {
  return (
    <main className="menskhokhocontent">
      <div className="event-container">
        <h1 className="event-header"> Mens Kho Kho</h1>
        <div className="event-img">
          <img
            className="event-img"
            src="https://wallpapercave.com/wp/wp7149881.jpg"
            alt=""
          />
        </div>
        <div className="event-info">
          Men’s Kho-Kho is a high-speed test of agility, awareness, and tactical
          movement — a traditional Indian sport where reflexes matter more than
          brute force. This event brings together male participants from all
          years and branches for a fierce face-off of speed and teamwork. Each
          team will consist of **9 players on field + 3 substitutes**, following
          standard Kho-Kho rules and court dimensions. The match will have **2
          innings**, each consisting of **9 minutes** of chasing and defending
          time. Runners must dodge, twist, and think on their feet, while
          chasers must communicate, strategize, and tag with precision. Only
          hand-touch tagging is allowed, and players must follow the entry and
          direction rules strictly. Chasers must pass the Kho (directional
          change) using proper technique — fouls will result in point
          deductions. Foot outside the line, early entry, or improper turns will
          be considered faults. No footwear is allowed on the court — barefoot
          play is mandatory for safety and tradition. Teams must report 15
          minutes before match time — failing to do so may lead to
          disqualification. Unsportsmanlike conduct, verbal abuse, or rough
          physical contact will not be tolerated. Referee’s decision will be
          final and binding in all situations. Winners and runners-up will
          receive medals, certificates, and festive shoutouts. Kho-Kho isn’t
          just about running — it’s about reading the game, reacting smart, and
          playing with heart. Get ready to dive, chase, and conquer in the Men’s
          Kho-Kho championship!
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
            <Link to="/MensKhoKhoRegistrationContent">Register</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
