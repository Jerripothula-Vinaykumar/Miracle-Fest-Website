import { Link } from "react-router-dom"
export function EventContent() {
     

    return (
       <main className="eventcontent"> 
            <h1 className="eventheader"> List of Events in Miracle fest</h1>
            <h1 className="culturalheader"> Cultural Events</h1>
           <div className="culturalevents">
               <div className="eventcard">
               <h1 className="eventname"> Banner Launch</h1>
               <hr className="chr" />
               <p  className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p  className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p  className="eventstartdate"><span className="eventkey">Event Venue </span> <span className="eventcolon"> : </span> <span className="eventvalue"></span> </p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/BannerLaunchContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname">Traditional day</h1>
               <hr className="chr" />
               <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey"> Event Venue</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span> </p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/TraditionalDayContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname">Final Fest </h1>
               <hr className="chr" />
               <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey">Event Venue </span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/FinalFestContent">more</Link></button>
            </div>
            </div>
           
              <h1 className="culturalheader"> Technical Events</h1>
               <div className="culturalevents">
              <div className="eventcard">
               <h1 className="eventname"> Pro Coder</h1>
               <hr className="chr" />
               <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey"> Event Venue</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span> </p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/ProCoderContent">more</Link></button>
            </div>
              <div className="eventcard">
               <h1 className="eventname"> Guess the Output </h1>
               <hr className="chr" />
               <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey"> Event Venue</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span> </p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/GuessTheOutptContent">more</Link></button>
            </div>
              <div className="eventcard">
               <h1 className="eventname">Quiz</h1>
               <hr className="chr" />
               <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey">Event Venue </span> <span className="eventcolon"> : </span> <span className="eventvalue"></span> </p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/QuizContent">more</Link></button>
            </div>
              <div className="eventcard">
               <h1 className="eventname"> Essay Writing</h1>
               <hr className="chr" />
               <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey">Event Venue </span> <span className="eventcolon"> : </span> <span className="eventvalue"></span> </p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/EssayWritingContent">more</Link></button>
            </div>
            </div>
           <h1 className="culturalheader">Sports Events</h1>
          <div className="culturalevents">
            <div className="eventcard">
               <h1 className="eventname">Men`s Cricket</h1>
               <hr className="chr" />
               <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
               <p className="eventstartdate"><span className="eventkey">Event Venue </span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/MensCricketContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname"> Men`s Kabaddi</h1>
                 <hr className="chr" />
                 <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                 <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                 <p className="eventstartdate"><span className="eventkey"> Event Venue</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>    
                 <hr className="chr" />
                 <button className="eventmore"><Link to="/MensKabaddiContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname">Men`s Volley Ball</h1>
                <hr className="chr" />
                <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                <p className="eventstartdate"><span className="eventkey">Event Venue </span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>    
                <hr className="chr" />
                <button className="eventmore"><Link to="/MensVolleyBallContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname">Men`s Kho Kho</h1>
                 <hr className="chr" />
                 <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                 <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                 <p className="eventstartdate"><span className="eventkey"> Event Venue</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>    
                <hr className="chr" />
                <button className="eventmore"><Link to="/MensKhoKhoContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname">Carrom Board</h1>
                 <hr className="chr" />
                 <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                 <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                 <p className="eventstartdate"><span className="eventkey">Event Venue </span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>    
                <hr className="chr" />
                <button className="eventmore"><Link to="/CarromBoardContent">more</Link></button>
            </div>
            
             <div className="eventcard">
               <h1 className="eventname">Free Fire</h1>
                 <hr className="chr" />
                 <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                  <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                   <p className="eventstartdate"><span className="eventkey">Event Venue </span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>    
                <hr className="chr" />
                <button className="eventmore"><Link to="/FreeFireContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname">Pubg</h1>
                 <hr className="chr" />
                 <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                  <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                 <p className="eventstartdate"><span className="eventkey">Event Venue </span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>    
                <hr className="chr" />
                <button className="eventmore"><Link to="/PubgContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname"> Women`s Throwball</h1>
                 <hr className="chr" />
                 <p className="eventstartdate"><span className="eventkey">Event date</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                 <p className="eventstartdate"><span className="eventkey">Event start time</span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>
                 <p className="eventstartdate"><span className="eventkey">Event Venue </span> <span className="eventcolon"> : </span> <span className="eventvalue"></span></p>    
                <hr className="chr" />
                <button className="eventmore"><Link to="/WomensThrowBallContent">more</Link></button>
            </div>
            </div>
       </main>
    )
  
  }
