import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export function Footer() {
    const loc = useLocation();
    
    switch (loc.pathname ) {
        
        
        case "/RegisterContent":
                return(
                 <div className="footerbottom-div2">
                        <li className="footer-bottom2"> &copy; Copyright 2025</li><li className="footer-bottom">-</li>
                        <li className="footer-bottom2"><Link to="/TermsandConditionsContent">Terms & Conditions</Link></li>
                        <li className="footer-bottom2">-</li>
                        <li className="footer-bottom2"><Link to="/PrivacyPolicyContent">Privacy Policy</Link></li>
                   </div>
                )
                break;
        case "/SignupContent":
                return(
                 <div className="footerbottom-div2">
                        <li className="footer-bottom2"> &copy; Copyright 2025</li><li className="footer-bottom">-</li>
                        <li className="footer-bottom2"><Link to="/TermsandConditionsContent">Terms & Conditions</Link></li>
                        <li className="footer-bottom2">-</li>
                        <li className="footer-bottom2"><Link to="/PrivacyPolicyContent">Privacy Policy</Link></li>
                   </div>
                )
                break;
        default : 
                return (
        
        <footer className="footer">
            
            <nav className="footernav">
            
                
                <ul className="footerul">

                    <h1>Admin Panel</h1>
                    <li><Link to="/FacultyDashboardContent">Faculty Dashboard</Link></li>
                    <li><Link to="/CoordinatorDashboardContent">Coordinator Dashboard</Link></li>
                    <li><Link to="/EventCoordinatorsContent">Event Coordinators</Link></li>
                    <li><Link to="/VolunteersAssignmentContent">Volunteer`s Assignment</Link></li>
                    <li><Link to="/SupportQAContent">Support&QA</Link></li>
                    <li><Link to="/CertificateDownloadContent">Certificate Download</Link></li>
                    
                    <h1>Gamification&Funfeatures</h1>
                    <li><Link to="/ClassicalEventsContent">Classical Events</Link></li>
                    <li><Link to="/TechnicalEventsContent">Technical Events</Link></li>  
                    <li><Link to="/CulturalEventsContent">Cultural Events</Link></li>
               
                    <h1>Sponsors&Gallery</h1>
                    <li><Link to="/SponsorslogosandoffersContent">Sponsor Logos and Offers</Link></li>
                    <li><Link to="/StallsinfoandCouponsContent">Stalls Info and Coupons</Link></li>
                    <li><Link to="/AboutfestContent">About Fest</Link></li>
                    
                    <h1>Suport&Accessbility</h1>
                    <li><Link to="/FaqSectionContent">FAQ Section</Link></li>
                    <li><Link to="/EmergencyContactContent">Emergency Contacts</Link></li>
                    <li><Link to="/LiveChatSupportContent"> Live Chat Support</Link></li>
               
           
                    <h1>Post-fest</h1>
                    <li><Link to="/FeedbackformContent">Feedback Form</Link></li>
                    <li><Link to="/ResultsandWinnersDisplayContent">Results & Winners Display</Link></li>
                    <li><Link to="/ExportDataContent">Export Data (Excel/PDF)</Link></li>
                   
                    <li><Link to="/AboutusContent">About us</Link></li>
                    <li><Link to="/ContactusContent">Contact us</Link></li>
                    <li><Link to="/ArchiveofPastEventsandWinnersContent">Archive of Past Events and Winner`s</Link></li>
                    <div className="footerbottom-div">
                        <li className="footer-bottom"> &copy; Copyright 2025</li><li className="footer-bottom">-</li>
                        <li className="footer-bottom"><Link to="/TermsandConditionsContent">Terms & Conditions</Link></li>
                        <li className="footer-bottom">-</li>
                        <li className="footer-bottom"><Link to="/PrivacyPolicyContent">Privacy Policy</Link></li>
                   </div>
                   <hr></hr>
                </ul>
               


          </nav>    
         
          </footer>
        
        )
        break;
                
        
   
    }
}



export function FacultyDashboardContent(){
    return(
        <main className="facultydashboardcontent"> 
        FacultyDashboard Content  Page Section
        </main>
    )
    
    
}


export function CoordinatorDashboardContent(){
    return(
        <main className="coordinatordashboardcontent"> 
        Coordinator Dashboard Content  Page Section
        </main>
    )
    
    
}


export function EventCoordinatorsContent(){
    return(
        <main className="eventcoordinatorscontent"> 
        Event Coordinators Content  Page Section
        </main>
    )
    
    
}


export function VolunteersAssignmentContent(){
    return(
        <main className="volunteersassignmentcontent"> 
        Volunteers Assignment Content  Page Section
        </main>
    )
    
    
}


export function SupportQAContent(){
    return(
        <main className="Support QA Content"> 
        Support & QAContent  Page Section
        </main>
    )
    
    
}


export function CertificateDownloadContent(){
    return(
        <main className="certificatedownloadcontent"> 
        Certificate Download Content  Page Section
        </main>
    )
    
    
}



export function ClassicalEventsContent(){
    return(
        <main className="classicaleventscontent"> 
        Classical Events Content  Page Section
        </main>
    )
    
    
}


export function TechnicalEventsContent(){
    return(
        <main className="technicaleventscontent"> 
        Technical Events Content  Page Section
        </main>
    )
    
    
}


export function CulturalEventsContent(){
    return(
        <main className="culturaleventscontent"> 
        Cultural Events Content  Page Section
        </main>
    )
    
    
}

export function SponsorslogosandoffersContent(){
    return(
        <main className="sponsorslogosandofferscontent"> 
       Sponsors logos and offers Content  Page Section
        </main>
    )
    
    
}

export function StallsinfoandCouponsContent(){
    return(
        <main className="stallsinfoandcouponscontent"> 
        Stalls info and Coupons Content  Page Section
        </main>
    )
    
    
}

export function AboutfestContent(){
    return(
        <main className="aboutfestcontent"> 
        About fest Content  Page Section
        </main>
    )
    
    
}


export function FaqSectionContent(){
    return(
        <main className="faqsectioncontent"> 
        Faq Section Content Page Section
        </main>
    )
    
    
}

export function EmergencyContactContent(){
    return(
        <main className="emergencycontactcontent"> 
       Emergency Contact Content Page Section
        </main>
    )
    
    
}

export function LiveChatSupportContent(){
    return(
        <main className="livechatsupportcontent"> 
       Live Chat Support Content  Page Section
        </main>
    )
    
    
}


export function FeedbackformContent(){
    return(
        <main className="feedbackformcontent"> 
       Feed back form Content  Page Section
        </main>
    )
    
    
}

export function ResultsandWinnersDisplayContent(){
    return(
        <main className="resultsandwinnersdisplaycontent"> 
       Results and Winners Display ContentPage Section
        </main>
    )
    
    
}

export function ExportDataContent(){
    return(
        <main className="exportdatacontent"> 
       Export Data Content  Page Section
        </main>
    )
    
    
}

export function TermsandConditionsContent(){
    return(
        <main className="termsandconditionscontent"> 
     Terms and Conditions Content Page Section
        </main>
    )
    
    
}

export function PrivacyPolicyContent(){
    return(
        <main className="privacypolicycontent"> 
      Privacy Policy Content Page Section
        </main>
    )
    
    
}


export function AboutusContent(){
    
    return(
        <main className="aboutuscontent"> 
            <div className="authcontainer">
                <div className="authphoto">
                </div>
                <p className="hellothere">Hello there ,  I am J Vinay Kumar {"\u{1F44B}"} <p className="author">Author of this Application</p></p>
                <div className="info">  
                    <p className="user">Name :  </p>
                    <p className="user">Year : </p>
                    <p className="user">Branch : </p>
                    <p className="user">Section : </p>
                    <p className="user">Mobile no : </p>
                    <p className="user">Village : </p>
                    <p className="user">District : </p>
                    <p className="user">State : </p>
                </div>
                <div className="reachmeat">
                    <p className="reachmeatp">You can also reach me at ,</p>
                    <div className="smicons">
                        <img className="smimg"  src="https://img.icons8.com/?size=96&id=Mhl1TfJLdkh5&format=png" alt="" />
                        <img className="smimg"  src="https://img.icons8.com/?size=96&id=xuvGCOXi8Wyg&format=png" alt="" />
                        <img className="smimg"  src="https://img.icons8.com/?size=96&id=32323&format=png" alt="" />
                        <img className="smimg"  src="https://img.icons8.com/?size=96&id=118497&format=png" alt="" />
                    </div>
            </div>

        </div>
        </main>
    )
    
    
}

export function ContactusContent(){
    return(
        <main className="contactuscontent"> 
            <div className="contactuscontainer">
                <div>
                    <img className="contactusimg" src="https://cdn-icons-png.flaticon.com/128/2967/2967883.png" alt="" />
                </div>
                <div >
                    <p className="contactus">Contact us</p>
                </div>
                <div className="contacticons">
                    <div className="contacticonsdiv"><img className="contacticons" src="https://cdn-icons-png.flaticon.com/128/455/455705.png" alt="" /> <p className="contactusdetails1">6304787895</p></div>
                    <div className="contacticonsdiv"><img className="contacticons" src="https://cdn-icons-png.flaticon.com/128/181/181526.png" alt="" /> <p className="contactusdetails2">Portofolio</p></div>
                    <div className="contacticonsdiv"><img className="contacticons" src="https://cdn-icons-png.flaticon.com/128/831/831357.png" alt="" /> <p className="contactusdetails3">jvkumar2003@gmail.com</p></div>
                    <div className="contacticonsdiv"><img className="contacticons" src="https://cdn-icons-png.flaticon.com/128/1865/1865083.png" alt="" /> <p className="contactusdetails4">Miracel City , Bhogapuram</p></div>
                </div>
            </div> 
        
        </main>
    )
    
    
}
export function ArchiveofPastEventsandWinnersContent(){
    return(
        <main className="archiveofpasteventsandwinners"> 
      Archive of Past Events and Winners  Page Section
        </main>
    )
    
    
}
