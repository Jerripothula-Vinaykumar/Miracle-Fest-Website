import { useState } from "react";


export function FacultyDashboardContent() {
  const role = "";
  const [Branch , setBranch] = useState("CSE");

  switch (Branch) {
    
    case "CSE" :
      return(
         <main className="facultydashboardforotherscontent">
         
         <div className="facultydashboardforotherscontentcontainer">
             <div className="facultydashboardforothersselectcontainer">
              <select onChange = {(e) => setBranch(e.target.value)} className="facultydashboardforothersselect">
                <option value="CSE">Computer Science</option>
                <option value="ECE">Electronics & Communication</option>
                <option value="EEE">Electrical & Electronics</option>
                <option value="Mech">Mechanical</option>
              </select>
            </div>
            <div className="facultydashboardgridcontainer">
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Raja Sheaker </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> CSE HOD</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Computer Science</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name</span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> CSE Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Computer Science</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name</span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> CSE Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Computer Science</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name</span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> CSE Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Computer Science</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name</span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue">  CSE Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Computer Science</span></div>
                
                </div>
              </div>
            </div>
         </div>
         
        </main>
      )
    break;

    case "ECE" :
      return(
         <main className="facultydashboardforotherscontent">
         <div className="facultydashboardforotherscontentcontainer">
             <div className="facultydashboardforothersselectcontainer">
              <select onChange = {(e) => setBranch(e.target.value)} className="facultydashboardforothersselect">
                <option value="CSE">Computer Science</option>
                <option value="ECE">Electronics & Communication</option>
                <option value="EEE">Electrical & Electronics</option>
                <option value="Mech">Mechanical</option>
              </select>
            </div>
            <div className="facultydashboardgridcontainer">
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> HOD Name </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> ECE HOD</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Electronics</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> ECE Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Electronics</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> ECE Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Electronics</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> ECE Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Electronics</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> ECE Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Electronics</span></div>
                
                </div>
              </div>
            </div>
         </div>
        </main>
      )
    break;

    case "EEE" :
      return(
         <main className="facultydashboardforotherscontent">
          <div className="facultydashboardforotherscontentcontainer">
             <div className="facultydashboardforothersselectcontainer">
              <select onChange = {(e) => setBranch(e.target.value)} className="facultydashboardforothersselect">
                <option value="CSE">Computer Science</option>
                <option value="ECE">Electronics & Communication</option>
                <option value="EEE">Electrical & Electronics</option>
                <option value="Mech">Mechanical</option>
              </select>
            </div>
            <div className="facultydashboardgridcontainer">
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> HOD Name </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> EEE HOD</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Electrical</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> EEE Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Electrical</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue">EEE Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Electrical</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue">EEE Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Electrical</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> EEE Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Electrical</span></div>
                
                </div>
              </div>
            </div>
         </div>
        </main>
      )
    break;

    case "Mech" :
      return(
         <main className="facultydashboardforotherscontent">
          <div className="facultydashboardforotherscontentcontainer">
             <div className="facultydashboardforothersselectcontainer">
              <select onChange = {(e) => setBranch(e.target.value)} className="facultydashboardforothersselect">
                <option value="CSE">Computer Science</option>
                <option value="ECE">Electronics & Communication</option>
                <option value="EEE">Electrical & Electronics</option>
                <option value="Mech">Mechanical</option>
              </select>
            </div>
            <div className="facultydashboardgridcontainer">
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue">  HOD Name </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> Mech HOD</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Mechanical</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> Mech Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Mechanical</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue">Faculty Name</span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> Mech Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Mechanical</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name</span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue"> Mech Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Mechanical</span></div>
                
                </div>
              </div>
              <div className="facultydashboardgriditems">
                <div className="facultydashboradgriditemprofilepic">Teacher Photo</div>
                <div className="facultydashboradgriditemprofilebio">
                  <div className="facultyinfo"><span className="facultykey">Name</span><span className="facultycolon">:</span><span className="facultyvalue"> Faculty Name </span></div>
                  <div className="facultyinfo"><span className="facultykey">Designation</span><span className="facultycolon">:</span><span className="facultyvalue">Mech Faculty</span></div>
                  <div className="facultyinfo"><span className="facultykey">Bus</span><span className="facultycolon">:</span><span className="facultyvalue">Emo</span></div>
                  <div className="facultyinfo"><span className="facultykey">Department</span><span className="facultycolon">:</span><span className="facultyvalue">Mechanical</span></div>
                
                </div>
              </div>
            </div>
         </div>
        </main>
      )
    break;

    case "faculty":
      return (
        <main className="facultydashboardcontent">
          <div className="facultydashboard-container">
      
            <div className="assign-coordinators-container">
              
              <div className="assign-event-coordinator-header-container">
                <p className="assign-event-coordinator-header">
                  Assign Event Coordinator
                </p>
              </div>
             <div className="coor-ass-inputs-container">
               <select
                type="text"
                className="signupinput-assign-coor"
                placeholder="  Name of the Event"
              >
              <option value="None" selected> None</option>
              <option value="Banner Launch"> Banner Launch</option>
              <option value="Traditional Day"> Traditional Day</option>
              <option value="Final Fest"> Final Fest</option>
              <option value=" Men`s Cricket"> Men`s Cricket</option>
              <option value="Men`s Kabaddi"> Men`s Kabaddi</option>
              <option value="Men`s Volley Ball"> Men`s Volley Ball</option>
              <option value="Men`s Kho Kho"> Men`s Kho Kho</option>              
              <option value=" Carroms"> Carroms</option>             
              <option value="PUBG"> PUBG</option>         
              <option value=" Free Fire"> Free Fire</option>
              <option value=" Womens Throw Ball"> Womens Throw Ball</option>
              
               </select>
              <input
                type="text"
                className="signupinput-assign-coor"
                placeholder="  Coordinator Name"
              />
              <input
                type="text"
                className="signupinput-assign-coor"
                placeholder="  Branch"
              />
              <input
                type="text"
                className="signupinput-assign-coor"
                placeholder="  Year"
              />
              <input
                type="text"
                className="signupinput-assign-coor"
                placeholder="  Department"
              />
              <input
                type="text"
                className="signupinput-assign-coor"
                placeholder="  Section"
              />
              </div> 
              <button className="event-coordinator-assign-submit-button">
                Set as Coordinator
              </button>

            </div>
            
           <div className="assign-event-details-container">
              <div className="assign-event-details-header-container">
                <p className="assign-event-details-header">
                  Assign Event Details
                </p>
              </div>
             <div className="coor-ass-inputs-container">
              <select
                type="text"
                className="signupinput-assign-coor"
                placeholder="  Name of the Event"
              >
              <option value="None" selected> None</option>
              <option value="Banner Launch"> Banner Launch</option>
              <option value="Traditional Day"> Traditional Day</option>
              <option value="Final Fest"> Final Fest</option>
              <option value=" Men`s Cricket"> Men`s Cricket</option>
              <option value="Men`s Kabaddi"> Men`s Kabaddi</option>
              <option value="Men`s Volley Ball"> Men`s Volley Ball</option>
              <option value="Men`s Kho Kho"> Men`s Kho Kho</option>              
              <option value=" Carroms"> Carroms</option>             
              <option value="PUBG"> PUBG</option>         
              <option value=" Free Fire"> Free Fire</option>
              <option value=" Womens Throw Ball"> Womens Throw Ball</option>
              
               </select>
              <input
                type="text"
                className="signupinput-assign-coor"
                placeholder="Event Date ( D - M - Y )"
              />
               <input
                type="text"
                className="signupinput-assign-coor"
                placeholder="Event Venue"
              />
              

              <input
                type="text"
                className="signupinput-assign-coor"
                placeholder="Event Start time  ex 9hr"
              />
              <input
                type="text"
                className="signupinput-assign-coor"
                placeholder="Event End time  ex 9hr"
              />
              
              </div> 
              <button className="event-details-assign-submit-button">
                Set Event Details
              </button>
            </div>
           
            
         </div>

           <div className="hodnote-container">
               <p className="hodnotetext">
                Only Access to ,
              </p>
              <p className="hodnotetext">
                Head of The Department , CSE HOD
              </p>
               <p className="hodnotetext">
               Mr Raja Sheaker
              </p>
             </div>
        </main>
      );
      break;
   
  }
}
