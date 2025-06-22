import { Link } from "react-router-dom";

export function ProCoderContent() {
  return (
    <main className="procodercontent">
      <div className="event-container">
        <h1 className="event-header">Pro Coder</h1>
        <div className="event-img">
          <img
            className="event-img"
            src="https://tse1.mm.bing.net/th?id=OIP.-4mlYMympHgX0Qg0nGFiwwHaEK&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <div className="event-info">
          ProCoder is the ultimate test of logic, presence of mind, and pure
          programming skill — designed for true coders who can think fast and
          act faster. No shortcuts, no machines — just brainpower. Open to all
          students across all years and branches, this event challenges
          participants to solve algorithmic and logic-based questions on paper,
          without the use of any gadgets. That’s right — **no laptops, no
          phones, no smart devices**. Just you, a pen, and the brilliance of
          your mind. The challenge is built to bring out raw problem-solving
          talent and real-time thinking under pressure. From flowcharts to dry
          runs, every task will push you to think like a real developer in
          low-resource scenarios. Whether you're a first-year explorer or a
          final-year pro, the playing field is level — and the thrill is
          unmatched. There will be multiple rounds with increasing difficulty —
          logic puzzles, syntax tracing, algorithm design, and more. Accuracy,
          clarity, and approach matter just as much as the final answer — so
          stay sharp. ProCoder is not just about writing code — it's about
          understanding it, breaking it down, and solving problems from the
          roots. Winners will walk away with not just prizes, but the title of
          true logic warriors. Bring your notebook, bring your confidence — and
          leave the gadgets behind. Team size: Individual participation only —
          your mind is your only teammate here. Make sure you register early, as
          limited seats are available for this high-stakes challenge. Be the
          coder who doesn’t just write code — but understands it, lives it, and
          rules it. ProCoder awaits. Are you ready to prove your power ?
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
            <Link to="/ProcoderRegistrationContent">Register</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
