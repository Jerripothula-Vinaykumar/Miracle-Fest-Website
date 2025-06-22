import { Link } from "react-router-dom";

Link;

export function GuessTheOutptContent() {
  return (
    <main className="guesstheoutputcontent">
      <div className="event-container">
        <h1 className="event-header">Guess the Output</h1>
        <div className="event-img">
          <img
            className="event-img"
            src="https://tse1.mm.bing.net/th?id=OIP.Lq5oR1qOfuv2QvuPIqpfWwHaEK&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <div className="event-info">
          Guess the Output is a brain-twisting technical event where your eyes
          and logic will be put to the test. It's not about writing programs —
          it's about understanding how they work and predicting what they’ll
          produce. Participants will be shown code snippets from various
          programming languages — C, C++, Java, Python, and more. Your job?
          Decode it, trace it, and guess the correct output. Sounds simple?
          Think again. These programs are designed to test your observation,
          debugging skills, and deep understanding of concepts like loops,
          memory, conditions, and edge cases. Open to all students, this event
          is perfect for quick thinkers and sharp minds. The twist? Some
          questions are intentionally tricky, with misleading syntax, nested
          logic, or unexpected outputs. You don’t need to be a master coder —
          you just need to be a smart observer and a fast processor. Each
          question will have multiple options, but only one will be the perfect
          answer. Choose wisely. Speed matters — so does accuracy. The clock is
          ticking, and the pressure builds with every round. Rounds get tougher
          as you advance, but so do the bragging rights. Come solo, bring your
          focus, and get ready for a coding battle of the minds. Electronic
          gadgets are not allowed — just your raw skills and reasoning power.
          Winners will be decided based on correctness, time, and clarity of
          explanation (in case of a tie). Guessing is allowed — but guessing
          right is what wins the game. Are you ready to crack the code without
          writing a single line? Join us and prove your logical supremacy at
          “Guess the Output” !
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
            <Link to="/GuessTheOutputRegistrationContent">Register</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
