
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Footer() {
  const loc = useLocation();

  switch (loc.pathname) {
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
       case "/TermsandConditionsContent":
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
       case "/PrivacyPolicyContent":
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
    default:
      return (
        <footer className="footer">
          <nav className="footernav">
            <ul className="footerul">
              <h1>Admin Panel</h1>
              <li>
                <Link to="/FacultyDashboardContent">Faculty Dashboard</Link>
              </li>
              <li>
                <Link to="/CoordinatorDashboardContent">
                  Coordinator Dashboard
                </Link>
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
                <Link to="/SupportQAContent">Support&QA</Link>
              </li>
              <li>
                <Link to="/CertificateDownloadContent">
                  Certificate Download
                </Link>
              </li>

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

              <h1>Sponsors&Gallery</h1>
              <li>
                <Link to="/SponsorslogosandoffersContent">
                  Sponsor Logos and Offers
                </Link>
              </li>
              <li>
                <Link to="/StallsinfoandCouponsContent">
                  Stalls Info and Coupons
                </Link>
              </li>
              <li>
                <Link to="/AboutfestContent">About Fest</Link>
              </li>

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
                <Link to="/ExportDataContent">Export Data (Excel/PDF)</Link>
              </li>

              <li>
                <Link to="/AboutusContent">About us</Link>
              </li>
              <li>
                <Link to="/ContactusContent">Contact us</Link>
              </li>
              <li>
                <Link to="/ArchiveofPastEventsandWinnersContent">
                  Archive of Past Events and Winner`s
                </Link>
              </li>
              <div className="footerbottom-div">
                <li className="footer-bottom">Copyright &copy; 2025 </li>
                <li className="footer-bottom">|</li>
                <li className="footer-bottom">
                  <Link to="/TermsandConditionsContent">Terms</Link>
                </li>
                <li className="footer-bottom">|</li>
                <li className="footer-bottom">
                  <Link to="/PrivacyPolicyContent">Privacy</Link>
                </li>
               
              </div>
              <hr></hr>
            </ul>
          </nav>
        </footer>
      );
      break;
  }
}








