import { useState } from "react";

export  function MyProfileContent() {
    
  const [Option , setOption] = useState("");


  switch(Option)
  {
    case "editprofile":
       return (
       <main className="myprofilecontent"> 
        <div className="myprofilecontainer">
          <div className="profilepiccon">
            Profile Picture
         </div>
          <div className="myprofileinfo">
            <p className="festuserinfocon"> <span className="festuserkey">Name</span> <span className="myprofileinfocolon">:</span> <input className="festusereditvalue"></input></p>
            <p className="festuserinfocon"> <span className="festuserkey">Year</span> <span className="myprofileinfocolon">:</span> <input className="festusereditvalue"></input></p>
            <p className="festuserinfocon"> <span className="festuserkey">Branch</span> <span className="myprofileinfocolon">:</span><input className="festusereditvalue"></input></p>
            <p className="festuserinfocon"> <span className="festuserkey">Section</span> <span className="myprofileinfocolon">:</span><input className="festusereditvalue"></input> </p>
            <p className="festuserinfocon"> <span className="festuserkey"> Mobile no</span><span className="myprofileinfocolon">:</span> <input className="festusereditvalue"></input></p>
            <p className="festuserinfocon"> <span className="festuserkey">Linked IN</span>  <span className="myprofileinfocolon">:</span><input className="festusereditvalue"></input></p>
            <p className="festuserinfocon"> <span className="festuserkey">Insta I`D</span>  <span className="myprofileinfocolon">:</span> <input className="festusereditvalue"></input></p>
            <p className="festuserinfocon"> <span className="festuserkey">Village</span> <span className="myprofileinfocolon">:</span> <input className="festusereditvalue"></input></p>
            <p className="festuserinfocon"> <span className="festuserkey">District</span> <span className="myprofileinfocolon">:</span><input className="festusereditvalue"></input> </p>
            <p className="festuserinfocon"> <span className="festuserkey"> State </span><span className="myprofileinfocolon">:</span> <input className="festusereditvalue"></input></p>
            <button onClick={() => setOption("")} className="editprofile">Save</button>
          </div>
        </div>
        
    
       </main>
    )
  
    break;
    default :
          return (
       <main className="myprofilecontent"> 
        <div className="myprofilecontainer">
          <div className="profilepiccon">
            Profile Picture
         </div>
          <div className="myprofileinfo">
            <p className="festuserinfocon"> <span className="festuserkey">Name</span> <span className="myprofileinfocolon">:</span>      <span className="festuservalue"></span></p>
            <p className="festuserinfocon"> <span className="festuserkey">Year</span> <span className="myprofileinfocolon">:</span>      <span className="festuservalue"></span></p>
            <p className="festuserinfocon"> <span className="festuserkey">Branch</span> <span className="myprofileinfocolon">:</span>    <span className="festuservalue"></span></p>
            <p className="festuserinfocon"> <span className="festuserkey">Section</span> <span className="myprofileinfocolon">:</span>   <span className="festuservalue"></span> </p>
            <p className="festuserinfocon"> <span className="festuserkey"> Mobile no</span><span className="myprofileinfocolon">:</span> <span className="festuservalue"></span></p>
            <p className="festuserinfocon"> <span className="festuserkey">Linked IN</span>  <span className="myprofileinfocolon">:</span><span className="festuservalue"></span></p>
            <p className="festuserinfocon"> <span className="festuserkey">Insta I`D</span>  <span className="myprofileinfocolon">:</span><span className="festuservalue"></span></p>
            <p className="festuserinfocon"> <span className="festuserkey">Village</span> <span className="myprofileinfocolon">:</span>   <span className="festuservalue"></span></p>
            <p className="festuserinfocon"> <span className="festuserkey">District</span> <span className="myprofileinfocolon">:</span>  <span className="festuservalue"></span> </p>
            <p className="festuserinfocon"> <span className="festuserkey"> State </span><span className="myprofileinfocolon">:</span>    <span className="festuservalue"></span></p>
            <button onClick={()=>{setOption("editprofile")}} className="editprofile">Edit Profile</button>
          </div>
        </div>
        
    
       </main>
    )
  
    break;
  }
    
  }
