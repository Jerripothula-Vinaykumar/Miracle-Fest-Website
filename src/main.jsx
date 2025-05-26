import { createRoot } from 'react-dom/client'

import './App.css'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import { MainHeader , HomeContent , EventContent , RegisterContent , SignupContent, MyProfileContent ,
         BannerLaunchContent , TraditionalDayContent , FinalFestContent , ProCoderContent , GuessTheOutptContent , 
         QuizContent , EssayWritingContent , MensCricketContent , MensKabaddiContent , MensVolleyBallContent , MensKhoKhoContent , 
         CarromBoardContent , FreeFireContent , PubgContent , WomensThrowBallContent , EventRegistrationContent } from './Header.jsx'
 
import {Footer , FacultyDashboardContent , CoordinatorDashboardContent , 
      EventCoordinatorsContent , VolunteersAssignmentContent, SupportQAContent ,
      CertificateDownloadContent , SportsEventsContent , TechnicalEventsContent , CulturalEventsContent , 
      SponsorslogosandoffersContent , StallsinfoandCouponsContent , AboutfestContent , 
      FaqSectionContent , EmergencyContactContent , LiveChatSupportContent , 
      FeedbackformContent , ResultsandWinnersDisplayContent , ExportDataContent , TermsandConditionsContent , PrivacyPolicyContent , 
      AboutusContent , ContactusContent , ArchiveofPastEventsandWinnersContent  } from './Footer.jsx'

createRoot(document.getElementById('root')).render(

   
    
    <BrowserRouter>
    
      <MainHeader></MainHeader>
    <Routes>

      {/* Header Page Contents */}

      <Route path="/" element={<HomeContent />}>  </Route>
      <Route path="/EventContent" element={<EventContent />}>  </Route>
      <Route path="/RegisterContent" element={<RegisterContent />}>  </Route>
      <Route path="/SignupContent" element={<SignupContent />}>  </Route>
      <Route path="/MyprofileContent" element={<MyProfileContent />}>  </Route>
      
      {/* Events Page Contents */}

       <Route path="/BannerLaunchContent" element={<BannerLaunchContent />}>  </Route>
       <Route path="/TraditionalDayContent" element={<TraditionalDayContent />}>  </Route>
       <Route path="/FinalFestContent" element={<FinalFestContent />}>  </Route>
       <Route path="/ProCoderContent" element={<ProCoderContent />}>  </Route>
       <Route path="/GuessTheOutptContent" element={<GuessTheOutptContent />}>  </Route>
       <Route path="/QuizContent" element={<QuizContent />}>  </Route>
       <Route path="/EssayWritingContent" element={<EssayWritingContent />}>  </Route>
       <Route path="/MensCricketContent" element={<MensCricketContent />}>  </Route>
       <Route path="/MensKabaddiContent" element={<MensKabaddiContent />}>  </Route>
       <Route path="/MensVolleyBallContent" element={<MensVolleyBallContent />}>  </Route>
       <Route path="/MensKhoKhoContent" element={<MensKhoKhoContent />}>  </Route>
       <Route path="/CarromBoardContent" element={<CarromBoardContent />}>  </Route>
       <Route path="/FreeFireContent" element={<FreeFireContent />}>  </Route>
       <Route path="/PubgContent" element={<PubgContent />}>  </Route>
       <Route path="/WomensThrowBallContent" element={<WomensThrowBallContent />}>  </Route>
       <Route path="/EventRegistrationContent" element={<EventRegistrationContent />}>  </Route>
       
      {/* Footer Page Contents */}

      {/* Admin Panel Contents */}

      <Route path="/FacultyDashboardContent" element={<FacultyDashboardContent />}>  </Route>
      <Route path="/CoordinatorDashboardContent" element={<CoordinatorDashboardContent />}>  </Route>   
      <Route path="/EventCoordinatorsContent" element={<EventCoordinatorsContent />}>  </Route>   
      <Route path="/VolunteersAssignmentContent" element={<VolunteersAssignmentContent />}>  </Route>
      <Route path="/SupportQAContent" element={<SupportQAContent />}>  </Route>
      <Route path="/CertificateDownloadContent" element={<CertificateDownloadContent />}>  </Route>
    
     {/* Gamification & Funfeatres Contents */}

     <Route path="/SportsEventsContent" element={<SportsEventsContent />}>  </Route>
     <Route path="/TechnicalEventsContent" element={<TechnicalEventsContent />}>  </Route>
     <Route path="/CulturalEventsContent" element={<CulturalEventsContent />}>  </Route>
      
       {/* Sponsers & Gallery Contents */}

      <Route path="/SponsorslogosandoffersContent" element={<SponsorslogosandoffersContent />}>  </Route>
      <Route path="/StallsinfoandCouponsContent" element={<StallsinfoandCouponsContent />}>  </Route>
      <Route path="/AboutfestContent" element={<AboutfestContent />}>  </Route>
      
    {/* Support & Accessibility */}

    <Route path="/FaqSectionContent" element={<FaqSectionContent />}>  </Route>
    <Route path="/EmergencyContactContent" element={<EmergencyContactContent />}>  </Route>
    <Route path="/LiveChatSupportContent" element={<LiveChatSupportContent />}>  </Route>
      
    {/* Post Fest*/}

    <Route path="/FeedbackformContent" element={<FeedbackformContent />}>  </Route>
    <Route path="/ResultsandWinnersDisplayContent" element={<ResultsandWinnersDisplayContent />}>  </Route>
    <Route path="/ExportDataContent" element={<ExportDataContent />}>  </Route>
    <Route path="/TermsandConditionsContent" element={<TermsandConditionsContent />}>  </Route>
    <Route path="/PrivacyPolicyContent" element={<PrivacyPolicyContent />}>  </Route>
    <Route path="/AboutusContent" element={<AboutusContent />}>  </Route>
    <Route path="/ContactusContent" element={<ContactusContent />}>  </Route>
    <Route path="/ArchiveofPastEventsandWinnersContent" element={<ArchiveofPastEventsandWinnersContent  />}>  </Route>
    

    </Routes> 
    <Footer></Footer>
    </BrowserRouter>

  
)
 