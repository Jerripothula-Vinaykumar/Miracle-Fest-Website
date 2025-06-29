import { useState } from "react";

export function MyProfileContent() {
  const [Option, setOption] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instaid, setInstaid] = useState("");
  const [village, setVillage] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = () => {};

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
                <span className="festuservalue">{name}</span>
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
