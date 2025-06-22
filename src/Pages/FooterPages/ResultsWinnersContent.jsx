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
              <h1 className="resultsandwinnersdisplayeventname">Event Name</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg">Team Photo</div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain) , Player Name , Player Name ,
                 Player Name , Player Name , Player Name , Player Name , Player Name , Player Name , Player Name , Player Name 

              </div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Event Name</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg"></div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Event Name</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg"></div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Event Name</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg"></div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Event Name</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg"></div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
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
              <h1 className="resultsandwinnersdisplayeventname">Event Name</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg">Sports</div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Event Name</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg"></div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Event Name</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg"></div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Event Name</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg"></div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
            <div className="resultsandwinnersdisplaygriditem">
              <h1 className="resultsandwinnersdisplayeventname">Event Name</h1>
              <div className="resultsandwinnersdisplaygridinneritem1squadimg"></div>
              <div className="resultsandwinnersdisplaygridinneritem2squadinfo">Team : Name (captain)</div>
            </div>
          </div>
        </main>
      );
      break;
  }
}
