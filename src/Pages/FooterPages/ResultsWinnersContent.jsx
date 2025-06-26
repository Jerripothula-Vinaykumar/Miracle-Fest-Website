import { useState } from "react";
export function ResultsandWinnersDisplayContent() {
  const [Category, setCategory] = useState("sports");

  switch (Category) {
    case "tech":
      return (
        <main className="resultsandwinnersdisplaycontent">
          <div className="resultsandwinnersdisplayselectcontainer">
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="resultsandwinnerssselect"
            >
              <option value="sports">Sports Events</option>
              <option value="tech">Technical Events</option>
            </select>
          </div>

          <div className="resultsandwinnersdisplaygridcontainer">
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Pro Coder</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg">Winner Photo</div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">
              </div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Guess The Output</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg">Winner Photo</div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo"></div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Quiz</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg">Team Photo</div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo"></div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Essay Writing</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg">Team Photo</div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo"></div>
            </div>
            
          </div>
        </main>
      );
      break;
    default:
      return (
        <main className="resultsandwinnersdisplaycontent">
          <div className="resultsandwinnersdisplayselectcontainer">
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="resultsandwinnerssselect"
            >
              <option value="sports">Sports Events</option>
              <option value="tech">Technical Events</option>
            </select>
          </div>

          <div className="resultsandwinnersdisplaygridcontainer">
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Men`s Cricket</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg">Team Picture </div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Men`s Kabaddi</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg">Team Picture</div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Men`s Volley Ball</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg">Team Picture</div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Men`s Kho Kho</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg"></div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Carrom Board</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg">Team Picture</div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Free Fire</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg">Team Picture</div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">PUBG</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg">Team Picture</div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Women`s Throw Ball</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg">Team Picture</div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
          </div>
        </main>
      );
      break;
  }
}
