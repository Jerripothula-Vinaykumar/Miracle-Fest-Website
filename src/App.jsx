import React from "react";

import { BrowserRouter , Routes , Route  } from 'react-router-dom'

import LandingPageContent from "./Pages/HeaderPages/LandingPageContent";

import { ScrollToTop } from "./Pages/HeaderPages/ScrollToTop";
import { HomeContent } from "./Pages/HeaderPages/HomeContent";
import { EventContent } from "./Pages/HeaderPages/EventContent";
import { RegisterContent } from "./Pages/HeaderPages/RegisterContent";
import { SignupContent } from "./Pages/HeaderPages/SignupContent";
import { MyProfileContent } from "./Pages/HeaderPages/MyProfile";
import { BannerLaunchContent } from "./Pages/HeaderPages/BannerLaunchContent";
import { TraditionalDayContent } from "./Pages/HeaderPages/TraditionalDayContent";
import { FinalFestContent } from "./Pages/HeaderPages/FinalFestContent";
import { ProCoderContent } from "./Pages/HeaderPages/ProCoderContent";
import { GuessTheOutptContent } from "./Pages/HeaderPages/GuesstheOutput";
import { QuizContent } from "./Pages/HeaderPages/QuizContent";
import { EssayWritingContent } from "./Pages/HeaderPages/EssayWritingContent";
import { MensCricketContent } from "./Pages/HeaderPages/MensCricketContent";
import { MensKabaddiContent } from "./Pages/HeaderPages/MensKabaddiCotent";
import { MensKhoKhoContent } from "./Pages/HeaderPages/MensKhoKhoContent";
import { MensVolleyBallContent } from "./Pages/HeaderPages/MensVolleyballContent";
import { CarromBoardContent } from "./Pages/HeaderPages/CarromBoardContent";
import { FreeFireContent } from "./Pages/HeaderPages/FreeFireContent";
import { PubgContent } from "./Pages/HeaderPages/PubgContent";
import { WomensThrowBallContent } from "./Pages/HeaderPages/WomensThrowBall";

import { MensCricketRegistrationContent } from "./Pages/HeaderPages/EventRegistration";
import { MensKabaddiRegistrationContent } from "./Pages/HeaderPages/EventRegistration";
import { MensVolleyBallRegistrationContent } from "./Pages/HeaderPages/EventRegistration";
import { MensKhoKhoRegistrationContent } from "./Pages/HeaderPages/EventRegistration";
import { CarromsRegistrationContent } from "./Pages/HeaderPages/EventRegistration";
import { FreeFireRegistrationContent } from "./Pages/HeaderPages/EventRegistration";
import { PubgRegistrationContent } from "./Pages/HeaderPages/EventRegistration";
import { WomesThrowBallRegistrationContent } from "./Pages/HeaderPages/EventRegistration";
import { ProcoderRegistrationContent } from "./Pages/HeaderPages/EventRegistration";
import { GuessTheOutputRegistrationContent } from "./Pages/HeaderPages/EventRegistration";
import { QuizRegistrationContent } from "./Pages/HeaderPages/EventRegistration";
import { EssayWritingRegistrationContent } from "./Pages/HeaderPages/EventRegistration";

import { PrivacyPolicyContent } from "./Pages/FooterPages/Privacy";
import { AboutusContent } from "./Pages/FooterPages/Aboutus";
import { TermsandConditionsContent } from "./Pages/FooterPages/Terms";
import { AboutfestContent } from "./Pages/FooterPages/AboutFest";
import { SponsorslogosandoffersContent } from "./Pages/FooterPages/SponsorslogoOffers";
import { CertificateDownloadContent } from "./Pages/FooterPages/CertificateDownload";
import { StallsinfoandCouponsContent } from "./Pages/FooterPages/Stallsinfo";
import { FaqSectionContent } from "./Pages/FooterPages/FAQsectionContent";
import { EmergencyContactContent } from "./Pages/FooterPages/EmergencyContent";
import { LiveChatSupportContent } from "./Pages/FooterPages/LiveChatSupport";
import { ResultsandWinnersDisplayContent } from "./Pages/FooterPages/ResultsWinnersContent";
import { FeedbackformContent } from "./Pages/FooterPages/Feedbackform";
import { ContactusContent } from "./Pages/FooterPages/Contactus";
import { ArchiveofPastEventsandWinnersContent } from "./Pages/FooterPages/ArchiveContent";
import { SupportQAContent } from "./Pages/FooterPages/SupportQA";
import { CoordinatorDashboardContent } from "./Pages/FooterPages/CoordinatorDashboard";
import { VolunteersAssignmentContent } from "./Pages/FooterPages/VolunteersAssignment";
import { EventCoordinatorsContent } from "./Pages/FooterPages/EventCoordinators";
import { FacultyDashboardContent } from "./Pages/FooterPages/FacultyDashBoard";
import { TechnicalEventsContent } from "./Pages/FooterPages/TechnicalEvents";
import { CulturalEventsContent } from "./Pages/FooterPages/CulturalEvents";
import { SportsEventsContent } from "./Pages/FooterPages/SportsEvents";

import './App.css'

import { MainHeader } from "./Components/Header";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>

    <MainHeader />
    <ScrollToTop />

      <Routes>

       
        
        {/* Landing Page Content */}

         <Route path="/" element={<LandingPageContent />}>
         
        </Route>
          
        {/* Header Page Contents */}

        <Route path="/HomeContent" element={<HomeContent />}>
         
        </Route>
        <Route path="/EventContent" element={<EventContent />}>
         
        </Route>
        <Route path="/RegisterContent" element={<RegisterContent />}>
         
        </Route>
        <Route path="/SignupContent" element={<SignupContent />}>
         
        </Route>
        <Route path="/MyprofileContent" element={<MyProfileContent />}>
         
        </Route>

        {/* Events Page Contents */}

        <Route path="/BannerLaunchContent" element={<BannerLaunchContent />}>
         
        </Route>
        <Route
          path="/TraditionalDayContent"
          element={<TraditionalDayContent />}
        >
         
        </Route>
        <Route path="/FinalFestContent" element={<FinalFestContent />}>
         
        </Route>
        <Route path="/ProCoderContent" element={<ProCoderContent />}>
         
        </Route>
        <Route path="/GuessTheOutptContent" element={<GuessTheOutptContent />}>
         
        </Route>
        <Route path="/QuizContent" element={<QuizContent />}>
         
        </Route>
        <Route path="/EssayWritingContent" element={<EssayWritingContent />}>
         
        </Route>
        <Route path="/MensCricketContent" element={<MensCricketContent />}>
         
        </Route>
        <Route path="/MensKabaddiContent" element={<MensKabaddiContent />}>
         
        </Route>
        <Route
          path="/MensVolleyBallContent"
          element={<MensVolleyBallContent />}
        >
         
        </Route>
        <Route path="/MensKhoKhoContent" element={<MensKhoKhoContent />}>
         
        </Route>
        <Route path="/CarromBoardContent" element={<CarromBoardContent />}>
         
        </Route>
        <Route path="/FreeFireContent" element={<FreeFireContent />}>
         
        </Route>
        <Route path="/PubgContent" element={<PubgContent />}>
         
        </Route>
        <Route
          path="/WomensThrowBallContent"
          element={<WomensThrowBallContent />}
        >
         
        </Route>
      
           <Route
          path="/MensCricketRegistrationContent"
          element={<MensCricketRegistrationContent />}
        ></Route>
          <Route
          path="/MensKabaddiRegistrationContent"
          element={<MensKabaddiRegistrationContent />}
        ></Route>

         <Route
          path="/MensVolleyBallRegistrationContent"
          element={<MensVolleyBallRegistrationContent />}
        ></Route>
         <Route
          path="/MensKhoKhoRegistrationContent"
          element={<MensKhoKhoRegistrationContent />}
        ></Route>
        <Route
          path="/CarromsRegistrationContent"
          element={<CarromsRegistrationContent />}
        ></Route>
           <Route
          path="/FreeFireRegistrationContent"
          element={<FreeFireRegistrationContent />}
        ></Route>
          <Route
          path="/PubgRegistrationContent"
          element={<PubgRegistrationContent />}
        ></Route>
         <Route
          path="/WomesThrowBallRegistrationContent"
          element={<WomesThrowBallRegistrationContent />}
        ></Route>
        <Route
          path="/ProcoderRegistrationContent"
          element={<ProcoderRegistrationContent />}
        ></Route>
         <Route
          path="/GuessTheOutputRegistrationContent"
          element={<GuessTheOutputRegistrationContent />}
        ></Route>
         <Route
          path="/QuizRegistrationContent"
          element={<QuizRegistrationContent />}
        ></Route>
        <Route
          path="/EssayWritingRegistrationContent"
          element={<EssayWritingRegistrationContent />}
        ></Route>

         
       

        {/* Footer Page Contents */}

        {/* Admin Panel Contents */}

        <Route
          path="/FacultyDashboardContent"
          element={<FacultyDashboardContent />}
        >
         
        </Route>
        <Route
          path="/CoordinatorDashboardContent"
          element={<CoordinatorDashboardContent />}
        >
         
        </Route>
        <Route
          path="/EventCoordinatorsContent"
          element={<EventCoordinatorsContent />}
        >
         
        </Route>
        <Route
          path="/VolunteersAssignmentContent"
          element={<VolunteersAssignmentContent />}
        >
         
        </Route>
        <Route path="/SupportQAContent" element={<SupportQAContent />}>
         
        </Route>
        <Route
          path="/CertificateDownloadContent"
          element={<CertificateDownloadContent />}
        >
         
        </Route>

        {/* Gamification & Funfeatres Contents */}

        <Route path="/SportsEventsContent" element={<SportsEventsContent />}>
         
        </Route>
        <Route
          path="/TechnicalEventsContent"
          element={<TechnicalEventsContent />}
        >
         
        </Route>
        <Route
          path="/CulturalEventsContent"
          element={<CulturalEventsContent />}
        >
         
        </Route>

        {/* Sponsers & Gallery Contents */}

        <Route
          path="/SponsorslogosandoffersContent"
          element={<SponsorslogosandoffersContent />}
        >
         
        </Route>
        <Route
          path="/StallsinfoandCouponsContent"
          element={<StallsinfoandCouponsContent />}
        >
         
        </Route>
        <Route path="/AboutfestContent" element={<AboutfestContent />}>
         
        </Route>

        {/* Support & Accessibility */}

        <Route path="/FaqSectionContent" element={<FaqSectionContent />}>
         
        </Route>
        <Route
          path="/EmergencyContactContent"
          element={<EmergencyContactContent />}
        >
         
        </Route>
        <Route
          path="/LiveChatSupportContent"
          element={<LiveChatSupportContent />}
        >
         
        </Route>

        {/* Post Fest*/}

        <Route path="/FeedbackformContent" element={<FeedbackformContent />}>
         
        </Route>
        <Route
          path="/ResultsandWinnersDisplayContent"
          element={<ResultsandWinnersDisplayContent />}
        >
         
        </Route>
       
        <Route
          path="/TermsandConditionsContent"
          element={<TermsandConditionsContent />}
        >
         
        </Route>
        <Route path="/PrivacyPolicyContent" element={<PrivacyPolicyContent />}>
         
        </Route>
        <Route path="/AboutusContent" element={<AboutusContent />}>
         
        </Route>
        <Route path="/ContactusContent" element={<ContactusContent />}>
         
        </Route>
        <Route
          path="/ArchiveofPastEventsandWinnersContent"
          element={<ArchiveofPastEventsandWinnersContent />}
        >
         
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
