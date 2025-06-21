import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPageContent() {
  
      return (
        <main className="landingpagecontent">
          <div className="landingpagecontainer">
            <div className="landingpagefirstgrid">
              <div className="landingpagefirstgriditem1">
                <h1 className="landingpagegriditem1headerforlaptop">
                  Welcome To Miracle Educational Society Group of Institutions
                </h1>
                 <h1 className="landingpagegriditem1headerformobile">
                  Welcome To Miracle 
                </h1>
              </div>
              <div className="landingpagefirstgriditem2">
                <details className="landingpagedetailscontainer">
                  <summary className="landingpagedetailsqncon">
                    <span className="landingpagedetailsqn">
                      {" "}
                      What is our fest about{" "}
                    </span>
                  </summary>
                  <p className="landingpagedetailsanswer">
                    Our college fest is an annual celebration of talent,
                    creativity, and innovation where students from various
                    departments showcase their skills. It features cultural
                    performances, tech events, sports competitions, and exciting
                    guest appearances. The event fosters collaboration and
                    offers a platform for holistic development. Participants
                    gain exposure, confidence, and unforgettable experiences.
                    It's a fusion of fun, learning, and vibrant energy.{" "}
                  </p>
                  <hr className="landingpagedetailsqnhr" />
                </details>

                <details className="landingpagedetailscontainer">
                  <summary className="landingpagedetailsqncon">
                    <span className="landingpagedetailsqn">
                      {" "}
                      Who can participate in events{" "}
                    </span>
                  </summary>
                  <p className="landingpagedetailsanswer">
                    Students from our college as well as from other invited
                    institutions can participate in the fest events. Some events
                    may be open to the public, while others might require prior
                    registration or be limited to college members only. Each
                    event will have specific eligibility rules listed on the
                    event registration page. Everyone is welcome to join the
                    celebration in some capacity. Spectators can also attend and
                    enjoy the experience.
                  </p>
                  <hr className="landingpagedetailsqnhr" />
                </details>
                <details className="landingpagedetailscontainer">
                  <summary className="landingpagedetailsqncon">
                    <span className="landingpagedetailsqn">
                      {" "}
                      How to register for events{" "}
                    </span>
                  </summary>
                  <p className="landingpagedetailsanswer">
                    You can register for events by visiting the Events section
                    of this website and clicking on the event you're interested
                    in. There you’ll find a detailed description and a “Register
                    Now” button. You’ll be redirected to a form where you need
                    to enter your details and make any necessary payment. Upon
                    successful registration, a confirmation email or message
                    will be sent to you. Make sure to read event-specific rules
                    before registering.
                  </p>
                  <hr className="landingpagedetailsqnhr" />
                </details>
                <details className="landingpagedetailscontainer">
                  <summary className="landingpagedetailsqncon">
                    <span className="landingpagedetailsqn">
                      {" "}
                      Is there any registration fee{" "}
                    </span>
                  </summary>
                  <p className="landingpagedetailsanswer">
                    Yes, most events have a nominal registration fee which
                    varies depending on the type of event. Technical and solo
                    events may have lower fees, while team or cultural events
                    may charge slightly more. The collected fee helps cover
                    event costs, guest arrangements, and prizes. All fees and
                    payment details are clearly mentioned on the registration
                    page. Early registration may offer discounts or priority
                    access.
                  </p>
                  <hr className="landingpagedetailsqnhr" />
                </details>
                <details className="landingpagedetailscontainer">
                  <summary className="landingpagedetailsqncon">
                    <span className="landingpagedetailsqn">
                      {" "}
                      What are the event categories{" "}
                    </span>
                  </summary>
                  <p className="landingpagedetailsanswer">
                    Our fest features a diverse range of categories including
                    Cultural, Technical, Sports, Classical, and Informal events.
                    Cultural events highlight music, dance, and drama; Technical
                    ones include coding, robotics, and quizzes. Sports events
                    range from cricket to indoor games, and Classical events
                    focus on tradition and arts. Informal events add fun with
                    activities like treasure hunts and open mics. There’s
                    something for everyone!
                  </p>
                  <hr className="landingpagedetailsqnhr" />
                </details>
                <details className="landingpagedetailscontainer">
                  <summary className="landingpagedetailsqncon">
                    <span className="landingpagedetailsqn">
                      {" "}
                      Can outsiders attend the fest{" "}
                    </span>
                  </summary>
                  <p className="landingpagedetailsanswer">
                    Outsiders can attend the fest only if they are invited or
                    have registered for open-to-all events. Entry to certain
                    areas may be restricted based on ID verification and passes.
                    We encourage guests to pre-register or accompany someone
                    from our college. Visitors should adhere to campus rules and
                    maintain decorum. Security personnel will monitor entry
                    points to ensure safety.
                  </p>
                  <hr className="landingpagedetailsqnhr" />
                </details>
              </div>
              <div className="landingpagefirstgriditem3"></div>
            </div>

             <div className="landingpageloginbuttonitem">
              <h1 className="landingpageloginbuttonincontent">
                Want to Know More ,{" "}
              </h1>
              <button className="landingregisterincontent">
                <Link to="/RegisterContent">Login</Link>
              </button>
            </div>

            <div className="landingpagegallerygridcontainer">
              <div className="landingpagegallerygriditem1"></div>
              <div className="landingpagegallerygriditem2"></div>
              <div className="landingpagegallerygriditem3"></div>
              <div className="landingpagegallerygriditem4"></div>
              <div className="landingpagegallerygriditem5"></div>
              <div className="landingpagegallerygriditem6"></div>
            </div>

          </div>
        </main>
      );
     
}
