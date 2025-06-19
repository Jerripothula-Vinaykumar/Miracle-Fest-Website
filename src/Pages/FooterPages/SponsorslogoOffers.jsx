import { useState } from "react";

export function SponsorslogosandoffersContent() {
 
   const [Year , setYear] = useState("2026");
 
 switch(Year){
    case "2025" :
      return (
    <main className="sponsorslogosandofferscontent">
       <div className="facultydashboardforothersselectcontainer">
              <select onChange = {(e) => setYear(e.target.value)} className="sponsorslogossselect">
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
      <div className="sponserlogoheader">Sponsers Logos </div>
      <div className="sponserlogoheader">2024 - 25</div>
      <div className="logosflexcontainer"><div className="logoflexitems">Banner</div></div>
      <div className="logosgridcontainer">
        <div className="logogriditems">Image</div>
        <div className="logogriditems">Image</div>
        <div className="logogriditems">Image</div>
      </div>
    </main>
      );
      break;

       case "2024" :
      return (
    <main className="sponsorslogosandofferscontent">
       <div className="facultydashboardforothersselectcontainer">
              <select onChange = {(e) => setYear(e.target.value)} className="sponsorslogossselect">
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
      <div className="sponserlogoheader">Sponsers Logos </div>
      <div className="sponserlogoheader">2023 - 24</div>
      <div className="logosflexcontainer"><div className="logoflexitems">Banner</div></div>
      <div className="logosgridcontainer">
        <div className="logogriditems">Image</div>
        <div className="logogriditems">Image</div>
        <div className="logogriditems">Image</div>
      </div>
    </main>
      );
      break;

      case "2023" :
      return (
    <main className="sponsorslogosandofferscontent">
       <div className="facultydashboardforothersselectcontainer">
              <select onChange = {(e) => setYear(e.target.value)} className="sponsorslogossselect">
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
      <div className="sponserlogoheader">Sponsers Logos </div>
      <div className="sponserlogoheader">2022 - 23</div>
      <div className="logosflexcontainer"><div className="logoflexitems">Banner</div></div>
      <div className="logosgridcontainer">
        <div className="logogriditems">Image</div>
        <div className="logogriditems">Image</div>
        <div className="logogriditems">Image</div>
      </div>
    </main>
      );
      break;

    default :
       return (
    <main className="sponsorslogosandofferscontent">
       <div className="facultydashboardforothersselectcontainer">
              <select onChange = {(e) => setYear(e.target.value)} className="sponsorslogossselect">
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
      <div className="sponserlogoheader">Sponsers Logos </div>
      <div className="sponserlogoheader">2025 - 26</div>
      <div className="logosflexcontainer"><div className="logoflexitems">Banner</div></div>
      <div className="logosgridcontainer">
        <div className="logogriditems">Image</div>
        <div className="logogriditems">Image</div>
        <div className="logogriditems">Image</div>
      </div>
    </main>
  );
    break ;
  }
  
}
