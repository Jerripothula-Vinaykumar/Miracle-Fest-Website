
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Footer() {
  const loc = useLocation();

  switch (loc.pathname) {
    
    case "/" :
       return (
        <div className="footerbottom-div2">
            
          <li className="footer-bottom2">Copyright &copy; 2025</li>
          <li className="footer-bottom">|</li>
          <li className="footer-bottom2">
            <Link to="/TermsandConditionsContent">Terms</Link>
          </li>
          <li className="footer-bottom2">|</li>
          <li className="footer-bottom2">
            <Link to="/PrivacyPolicyContent">Privacy</Link>
          </li>
          
        </div>
      );
      break;
    
    case "/AboutFestContent"  :
      return (
        <div className="footerbottom-div2">
            
          <li className="footer-bottom2">Copyright &copy; 2025</li>
          <li className="footer-bottom">|</li>
          <li className="footer-bottom2">
            <Link to="/TermsandConditionsContent">Terms</Link>
          </li>
          <li className="footer-bottom2">|</li>
          <li className="footer-bottom2">
            <Link to="/PrivacyPolicyContent">Privacy</Link>
          </li>
          
        </div>
      );
      break;

       case "/RegisterContent"  :
      return (
        <div className="footerbottom-div2">
            
          <li className="footer-bottom2">Copyright &copy; 2025</li>
          <li className="footer-bottom">|</li>
          <li className="footer-bottom2">
            <Link to="/TermsandConditionsContent">Terms</Link>
          </li>
          <li className="footer-bottom2">|</li>
          <li className="footer-bottom2">
            <Link to="/PrivacyPolicyContent">Privacy</Link>
          </li>
          
        </div>
      );
      break;
  

    case "/SignupContent":
      return (
        <div className="footerbottom-div2">
          <li className="footer-bottom2">Copyright &copy; 2025</li>
          <li className="footer-bottom">|</li>
          <li className="footer-bottom2">
            <Link to="/TermsandConditionsContent">Terms</Link>
          </li>
          <li className="footer-bottom2">|</li>
          <li className="footer-bottom2">
            <Link to="/PrivacyPolicyContent">Privacy</Link>
          </li>
        </div>
      );
      break;

      case "/CustomDialog":
      return (
        <div className="footerbottom-div2">
          <li className="footer-bottom2">Copyright &copy; 2025</li>
          <li className="footer-bottom">|</li>
          <li className="footer-bottom2">
            <Link to="/TermsandConditionsContent">Terms</Link>
          </li>
          <li className="footer-bottom2">|</li>
          <li className="footer-bottom2">
            <Link to="/PrivacyPolicyContent">Privacy</Link>
          </li>
        </div>
      );
      break;


      case "/TermsandConditionsContent":
      return (
        <div className="footerbottom-div2">
          <li className="footer-bottom2">Copyright &copy; 2025</li>
          <li className="footer-bottom2">|</li>
          <li className="footer-bottom2">
            <Link to="/PrivacyPolicyContent">Privacy</Link>
          </li>
        </div>
      );
      break;
      case "/PrivacyPolicyContent":
      return (
        <div className="footerbottom-div2">
          <li className="footer-bottom2">Copyright &copy; 2025</li>
          <li className="footer-bottom">|</li>
          <li className="footer-bottom2">
            <Link to="/TermsandConditionsContent">Terms</Link>
          </li>
        </div>
      );
      break;
    default:
      return (
        <footer className="footer">
          <nav className="footernav">
            <div className="navdiv">
              <h1>Admin Panel</h1>
              <li>
                <Link to="/FacultyDashboardContent">Faculty Dashboard</Link>
              </li>

              <li>
                <Link to="/EventCoordinatorsContent">Event Coordinators</Link>
              </li>
              <li>
                <Link to="/VolunteersAssignmentContent">
                  Volunteer`s Assignment
                </Link>
              </li>
            
              <li>
                <Link to="/CertificateDownloadContent">
                  Album Download
                </Link>
              </li>
              </div>
              <div className="navdiv">

              <h1>Gamification&Funfeatures</h1>
              <li>
                <Link to="/SportsEventsContent">Sports Events</Link>
              </li>
              <li>
                <Link to="/TechnicalEventsContent">Technical Events</Link>
              </li>
              <li>
                <Link to="/CulturalEventsContent">Cultural Events</Link>
              </li>
          </div>
          <div className="navdiv">
              <h1>Sponsors&Gallery</h1>
              <li>
                <Link to="/SponsorslogosandoffersContent">
                  Sponsor Logos and Offers
                </Link>
              </li>
              <li>
                <Link to="/StallsinfoandCouponsContent">
                 Food Stalls 
                </Link>
              </li>
              <li>
                <Link to="/AboutfestContent">About Fest</Link>
              </li>
          </div>
          <div className="navdiv">
              <h1>Suport&Accessbility</h1>
              <li>
                <Link to="/FaqSectionContent">FAQ Section</Link>
              </li>
              <li>
                <Link to="/EmergencyContactContent">Emergency Contacts</Link>
              </li>
              <li>
                <Link to="/LiveChatSupportContent"> Live Chat Support</Link>
              </li>
              </div>
            <div className="navdiv">
              <h1>Post-fest</h1>
              <li>
                <Link to="/FeedbackformContent">Feedback Form</Link>
              </li>
              <li>
                <Link to="/ResultsandWinnersDisplayContent">
                  Results & Winners Display
                </Link>
              </li>
             
              <li>
                <Link to="/AboutusContent">About us</Link>
              </li>
              <li>
                <Link to="/ContactusContent">Contact us</Link>
              </li>
              
            </div>
        </nav>
              <div className="footerbottom-div">

                <li className="footer-bottom">Copyright &copy; 2025 </li>
      
              </div>
              
            
        
          
        </footer>
      );
      break;
  }
}








