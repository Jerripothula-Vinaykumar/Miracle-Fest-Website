import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export function MyProfileContent() {
  const [Option, setOption] = useState("");
  const [userData, setUserData] = useState(null);
  
  useEffect( () => {
    const fetchUserData = async () => {  
      try {
        const token = localStorage.getItem("token");
        console.log("Token:", token);
        const response = await axios.get(
          "https://miracle-fest-website-backend.onrender.com/api/auth/getProfile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const userData = response.data;
          setUserData(userData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchUserData();
  } , []);



  
  switch (Option) {
    case "editprofile":
      return (
        <main className="myprofilecontent">
          <div className="myprofilecontainer">
            <div className="profilepiccon">Profile Picture</div>
            <div className="myprofileinfo">
              <form onSubmit={handleSubmit}>
                <p className="festuserinfocon">
                  {" "}
                  <span className="festuserkey">Name</span>{" "}
                  <span className="myprofileinfocolon">:</span>{" "}
                  <input
                  value={userData.username}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="festusereditvalue"
                  ></input>
                </p>
                <p className="festuserinfocon">
                  {" "}
                  <span className="festuserkey">Year</span>{" "}
                  <span className="myprofileinfocolon">:</span>{" "}
                  <input
                    value={userData.year}
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                    className="festusereditvalue"
                  ></input>
                </p>
                <p className="festuserinfocon">
                  {" "}
                  <span className="festuserkey">Branch</span>{" "}
                  <span className="myprofileinfocolon">:</span>
                  <input
                    value={userData.branch}
                    onChange={(e) => {
                      setBranch(e.target.value);
                    }}
                    className="festusereditvalue"
                  ></input>
                </p>
                <p className="festuserinfocon">
                  {" "}
                  <span className="festuserkey">Section</span>{" "}
                  <span className="myprofileinfocolon">:</span>
                  <input
                    value={userData.section}
                    onChange={(e) => {
                      setSection(e.target.value);
                    }}
                    className="festusereditvalue"
                  ></input>{" "}
                </p>
                <p className="festuserinfocon">
                  {" "}
                  <span className="festuserkey"> Mobile no</span>
                  <span className="myprofileinfocolon">:</span>{" "}
                  <input
                    value={userData.mobileno}
                    onChange={(e) => {
                      setMobileno(e.target.value);
                    }}
                    className="festusereditvalue"
                  ></input>
                </p>
                <p className="festuserinfocon">
                  {" "}
                  <span className="festuserkey">Linked IN</span>{" "}
                  <span className="myprofileinfocolon">:</span>
                  <input
                    value={userData.linkedin}
                    onChange={(e) => {
                      setLinkedin(e.target.value);
                    }}
                    className="festusereditvalue"
                  ></input>
                </p>
                <p className="festuserinfocon">
                  {" "}
                  <span className="festuserkey">Insta I`D</span>{" "}
                  <span className="myprofileinfocolon">:</span>{" "}
                  <input
                    value={userData.instaid}
                    onChange={(e) => {
                      setInstaid(e.target.value);
                    }}
                    className="festusereditvalue"
                  ></input>
                </p>
                <p className="festuserinfocon">
                  {" "}
                  <span className="festuserkey">Village</span>{" "}
                  <span className="myprofileinfocolon">:</span>{" "}
                  <input
                    value={userData.village}
                    onChange={(e) => {
                      setVillage(e.target.value);
                    }}
                    className="festusereditvalue"
                  ></input>
                </p>
                <p className="festuserinfocon">
                  {" "}
                  <span className="festuserkey">District</span>{" "}
                  <span className="myprofileinfocolon">:</span>
                  <input
                    value={userData.district}
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
                    className="festusereditvalue"
                  ></input>{" "}
                </p>
                <p className="festuserinfocon">
                  {" "}
                  <span className="festuserkey"> State </span>
                  <span className="myprofileinfocolon">:</span>{" "}
                  <input
                    value={userData.state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                    className="festusereditvalue"
                  ></input>
                </p>
                <button onClick={() => setOption("")} className="editprofile">
                  Save
                </button>
              </form>
            </div>
          </div>
        </main>
      );

      break;
    default:
      return (
        <main className="myprofilecontent">
          <div className="myprofilecontainer">
            <div className="profilepiccon">Profile Picture</div>
            <div className="myprofileinfo">
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Name</span>{" "}
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue">{userData?.username}</span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Year</span>{" "}
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue"> {userData?.year} </span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Branch</span>{" "}
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue"> {userData?.branch}</span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Section</span>{" "}
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue"> {userData?.section} </span>{" "}
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey"> Mobile no</span>
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue">{userData?.mobileno}</span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Linked IN</span>{" "}
                <span className="myprofileinfocolon">:</span>
                <span className="festuservalue">{userData?.linkedin}</span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Insta I`D</span>{" "}
                <span className="myprofileinfocolon">:</span>
                <span className="festuservalue">{userData?.instaid}</span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Village</span>{" "}
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue">{userData?.village}</span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">District</span>{" "}
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue">{userData?.district}</span>{" "}
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey"> State </span>
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue">{userData?.state}</span>
              </p>
              <button
                onClick={() => {
                  setOption("editprofile");
                }}
                className="editprofile"
              >
                Edit
              </button>
            </div>
          </div>
        </main>
      );

      break;
  }
}
