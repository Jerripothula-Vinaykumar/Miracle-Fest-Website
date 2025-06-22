import { Link } from "react-router-dom";

export function EssayWritingContent() {
  return (
    <main className="essaywritingcontent">
      <div className="event-container">
        <h1 className="event-header">Essay Writing</h1>
        <div className="event-img">
          <img
            className="event-img"
            src="https://i.pinimg.com/originals/76/a7/8e/76a78e7c51a8ca6d4c8004a7e02875e4.jpg"
            alt=""
          />
        </div>
        <div className="event-info">
          Essay Writing is where thoughts find words and creativity takes the
          spotlight. It's a platform for students to express, reflect, and
          inspire through the beauty of writing. This event invites participants
          to showcase their perspectives, opinions, and storytelling skills on
          carefully chosen topics. Whether it's a social issue, a futuristic
          idea, or a personal reflection, your words have the power to move
          minds. Open to all students across all years and branches, the event
          focuses on clarity, originality, and depth of thought. Participants
          will be given topics at the venue, with a limited time to organize,
          write, and complete their essays. No pre-written content is allowed —
          this is a real-time challenge to your writing and thinking skills.
          Plagiarism is strictly prohibited — only your original voice matters
          here. Gadgets are not allowed — only pen and paper will be provided
          for a distraction-free experience. Language medium and topic type will
          be announced before the event begins — stay tuned! Essays will be
          judged on structure, creativity, relevance, and impact. This is not
          just about grammar — it's about the message, the flow, and the
          emotional connection. Let your pen do the talking and prove that
          powerful minds don’t always speak — they write. Participation
          certificates will be awarded to all who attempt, and top writers will
          win exciting prizes. Come write your way into the spotlight — one
          sentence at a time. Because in a world full of noise, your words can
          make a difference.
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
            <Link to="/EssayWritingRegistrationContent">Register</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
