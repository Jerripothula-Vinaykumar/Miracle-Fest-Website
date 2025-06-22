import { Link } from "react-router-dom";

export function WomensThrowBallContent() {
  return (
    <main className="womensthrowballcontent">
      <div className="event-container">
        <h1 className="event-header">Women`s Throw Ball</h1>
        <div className="event-img">
          <img
            className="event-img"
            src="https://st2.depositphotos.com/1518767/11358/i/950/depositphotos_113581422-stock-photo-sportswoman-throwing-ball.jpg"
            alt=""
          />
        </div>
        <div className="event-info">
          Women’s Throwball brings fierce energy, fast reactions, and perfect
          teamwork to the court — where every serve is a statement and every
          point a victory earned. This high-energy team sport is open to all
          girl students from any year or branch. Each team must consist of **7
          players on court + 2 substitutes**, and matches will follow the
          **best-of-3 sets** format. Each set will be played up to **15 points**
          with a minimum 2-point lead required to win. Underarm serves only are
          allowed, and the ball must be caught and thrown in a single motion —
          no holding, juggling, or delay. Players must follow proper formations,
          rotations, and service turns. **Only one catch and one throw per
          rally** — no multiple contacts or bouncing the ball allowed. Foot
          faults during service, line touches, or improper throws will lead to
          point penalties. No jewellery or accessories allowed during the match
          for safety purposes. Proper non-marking sports shoes are mandatory —
          no bare feet or slippers permitted. Umpires and line judges will be
          assigned to each match, and their decisions will be final. Teams must
          report 15 minutes before match time — no-show results in
          disqualification. Winners and runners-up will be honored with medals,
          certificates, and campus-wide recognition. Throwball is not just a
          game — it's about confidence, coordination, and rising as one team. So
          gear up, step onto the court, and show the strength of women in sport!
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
            <Link to="/WomesThrowBallRegistrationContent">Register</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
