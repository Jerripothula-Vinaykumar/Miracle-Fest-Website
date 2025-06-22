import { Link } from "react-router-dom";

export function MensCricketContent() {
  return (
    <main className="menscricketcontent">
      <div className="event-container">
        <h1 className="event-header">Men`s Cricket</h1>
        <div className="event-img">
          <img
            className="event-img"
            src="https://tse1.mm.bing.net/th?id=OIP.WgReTzz0qUYbdKHE78lCIAAAAA&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <div className="event-info">
          Get ready for the roar of the crowd and the thrill of the game — the
          Cricket Tournament is here to ignite the fest with raw energy, team
          spirit, and unforgettable moments on the pitch! This classic sporting
          event invites teams to clash in a knockout-style tournament, bringing
          strategy, stamina, and skill into every over. Open to all years and
          branches, participants must register individually. Teams will be
          finalized based on a fair draw by the organizing team. Each match will
          follow a **6-over format** with **8 players per side**, keeping the
          game short, exciting, and intense. Standard cricket rules apply with a
          few fest-specific additions to keep it fair and fun. **No professional
          equipment is allowed** — bats, balls, and stumps will be provided at
          the venue. **Bowling must be underarm or low-arm only**, to ensure
          safety and equal opportunity. **No aggressive sledging or foul
          language** will be tolerated — respect is key on and off the field.
          **LBW and leg-byes are not counted** to simplify the format for all
          participants. The umpire’s decision is final — any disputes will lead
          to disqualification of the team or player involved. Winners and
          runners-up will receive trophies, certificates, and massive fest
          recognition. Proper sports shoes are mandatory — no slippers or
          barefoot play allowed. It’s not just about winning — it's about team
          bonding, fair play, and true sportsmanship. So get your game face on,
          bring the heat, and take your team all the way to glory! Let the
          Cricket Tournament begin — may the best squad lift the cup! F
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
            <Link to="/MensCricketRegistrationContent">Register</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
