import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export function MyProfileContent() {
  const [Option, setOption] = useState("");
  const [username, setName] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instaid, setInstaid] = useState("");
  const [village, setVillage] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token in my rofile:", token); 

        const response = await axios.get(
          "https://miracle-fest-website-backend.onrender.com/api/auth/getProfile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true
          }
        );

        if (response.status === 200) {
          const userData = response.data;
          setUserData(userData);
          setName(userData.username || "");
          setYear(userData.year || "");
          setBranch(userData.branch || "");
          setSection(userData.section || "");
          setMobileno(userData.mobileno || "");
          setLinkedin(userData.linkedin || "");
          setInstaid(userData.instaid || "");
          setVillage(userData.village || "");
          setDistrict(userData.district || "");
          setState(userData.state || "");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.patch(
        "https://miracle-fest-website-backend.onrender.com/api/auth/setProfile",
        {
          username: username,
          year: year,
          branch: branch,
          section: section,
          mobileno: mobileno,
          linkedin: linkedin,
          instaid: instaid,
          village: village,
          district: district,
          state: state,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setOption("");
        
      }
    } catch (error) {
      setOption("");
      console.error("Error updating profile:", error);
    }
  };

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
                    value={username}
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
                    value={year}
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
                    value={branch}
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
                    value={section}
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
                    value={mobileno}
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
                    value={linkedin}
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
                    value={instaid}
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
                    value={village}
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
                    value={district}
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
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                    className="festusereditvalue"
                  ></input>
                </p>
                <button
                  type="submit"
                  className="editprofile"
                >
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
            <div className="profilepiccon">Hello , {username}</div>
            <div className="myprofileinfo">
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Name</span>{" "}
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue">{username}</span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Year</span>{" "}
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue"> {year} </span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Branch</span>{" "}
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue"> {branch}</span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Section</span>{" "}
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue"> {section} </span>{" "}
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey"> Mobile no</span>
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue">{mobileno}</span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Linked IN</span>{" "}
                <span className="myprofileinfocolon">:</span>
                <span className="festuservalue">{linkedin}</span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Insta I`D</span>{" "}
                <span className="myprofileinfocolon">:</span>
                <span className="festuservalue">{instaid}</span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">Village</span>{" "}
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue">{village}</span>
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey">District</span>{" "}
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue">{district}</span>{" "}
              </p>
              <p className="festuserinfocon">
                {" "}
                <span className="festuserkey"> State </span>
                <span className="myprofileinfocolon">:</span>{" "}
                <span className="festuservalue">{state}</span>
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
