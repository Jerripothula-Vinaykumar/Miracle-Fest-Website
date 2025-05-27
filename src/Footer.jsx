import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  BannerLaunchContent,
  CarromBoardContent,
  EssayWritingContent,
  FinalFestContent,
  FreeFireContent,
  GuessTheOutptContent,
  MensCricketContent,
  MensKabaddiContent,
  MensKhoKhoContent,
  MensVolleyBallContent,
  ProCoderContent,
  PubgContent,
  QuizContent,
  TraditionalDayContent,
  WomensThrowBallContent,
} from "./Header";

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

export function FacultyDashboardContent() {
  return (
    <main className="facultydashboardcontent">
      FacultyDashboard Content Page Section
    </main>
  );
}

export function CoordinatorDashboardContent() {
  return (
    <main className="coordinatordashboardcontent">
      Coordinator Dashboard Content Page Section
    </main>
  );
}

export function EventCoordinatorsContent() {
  return (
    <main className="eventcoordinatorscontent">
      Event Coordinators Content Page Section
    </main>
  );
}

export function VolunteersAssignmentContent() {
  return (
    <main className="volunteersassignmentcontent">
      Volunteers Assignment Content Page Section
    </main>
  );
}

export function SupportQAContent() {
  return (
    <main className="Support QA Content">Support & QAContent Page Section</main>
  );
}

export function CertificateDownloadContent() {
  return (
    <main className="certificatedownloadcontent">
      Certificate Download Content Page Section
    </main>
  );
}

export function SportsEventsContent() {
  return (
    <main className="sportseventscontent">
      <MensCricketContent />
      <MensKabaddiContent />
      <MensVolleyBallContent />
      <MensKhoKhoContent />
      <CarromBoardContent />
      <FreeFireContent />
      <PubgContent />
      <WomensThrowBallContent />
    </main>
  );
}

export function TechnicalEventsContent() {
  return (
    <main className="technicaleventscontent">
      <ProCoderContent />
      <GuessTheOutptContent />
      <QuizContent />
      <EssayWritingContent />
    </main>
  );
}

export function CulturalEventsContent() {
  return (
    <main className="culturaleventscontent">
      <BannerLaunchContent />
      <TraditionalDayContent />
      <FinalFestContent />
    </main>
  );
}

export function SponsorslogosandoffersContent() {
  return (
    <main className="sponsorslogosandofferscontent">
      Sponsors logos and offers Content Page Section
    </main>
  );
}

export function StallsinfoandCouponsContent() {
  return (
    <main className="stallsinfoandcouponscontent">
      Stalls info and Coupons Content Page Section
    </main>
  );
}

export function AboutfestContent() {
  return (
    <main className="aboutfestcontent">
        <h1 className="aboutfestheading">About Miracle Fest </h1>
      <div className="aboutfestinfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt
        doloribus earum adipisci eaque nobis, molestias delectus minima,
        corporis perferendis possimus provident sed aliquid? Labore sequi soluta
        consectetur. Adipisci, quaerat. Iusto repudiandae sed libero ad, animi
        ducimus nobis blanditiis iste laboriosam similique sit facilis doloribus
        ullam quidem magnam necessitatibus. Consectetur iste quam harum officia
        aperiam labore voluptate nisi ullam eius? Assumenda illo nulla ipsum
        quibusdam quidem accusamus enim. Deserunt, commodi ipsum. Aperiam
        corrupti accusamus, illum tenetur amet eos rerum cum iusto, mollitia
        assumenda reiciendis iure eaque magnam eum ea rem! Nihil, molestias
        animi inventore repellat nisi consequuntur pariatur omnis quo quaerat
        cum! Dolorem voluptate quasi, modi quisquam veritatis quo dolores fugit,
        explicabo nihil tempore ea natus voluptas aspernatur, placeat autem!
        Mollitia, pariatur illo! Vel sit atque ab iure labore, iste magnam,
        nemo, quae enim reiciendis molestiae esse quaerat iusto molestias.
        Corporis dicta porro maxime exercitationem sint voluptates nam autem
        voluptatem. Non sit consectetur earum quam cum dolorem beatae laudantium
        ipsam. Corrupti omnis, recusandae iste repellat culpa odio magni,
        ducimus possimus totam similique expedita perspiciatis, nobis aliquid
        vero dolorum! Iusto, aliquam. Nam quis harum cumque sed iusto similique
        alias. In praesentium totam sunt officia ut exercitationem velit maiores
        aliquam molestias eius expedita numquam, quod natus eaque accusantium
        deserunt quis quas provident! Qui veritatis enim accusamus voluptate,
        porro nostrum commodi in, ipsa possimus, sint aperiam non quibusdam?
        Odio dicta, voluptatibus suscipit nemo odit esse error explicabo vero
        animi, magnam accusantium. Maxime, veritatis. Omnis necessitatibus
        blanditiis minus facilis ab ipsum architecto sunt accusantium molestias,
        rerum ea adipisci perspiciatis inventore reprehenderit hic, deserunt
        sint maxime consequuntur error minima quidem! Porro unde odio sit
        maiores? Blanditiis ab eveniet quisquam, reiciendis tempora minima
        molestias. Repellat sint consectetur nesciunt optio quisquam nihil sed
        nulla distinctio cupiditate corrupti. Modi consectetur eveniet dolorum
        dicta expedita similique doloremque illo corrupti! Eum praesentium porro
        tempore corporis voluptatibus nam maxime, earum expedita asperiores,
        magni rerum quisquam nesciunt laudantium hic autem, consequatur eveniet
        esse sed eligendi odio dolorum! Similique dicta voluptatum tenetur
        voluptatem. Nisi reprehenderit atque laboriosam magnam eum libero,
        itaque vero, excepturi tenetur, iure non debitis ad? Incidunt voluptatum
        accusantium nesciunt. Sapiente quis quibusdam culpa, cum laudantium
        totam rem libero dicta nam? Officia, repellendus quia voluptatem aperiam
        illum sapiente maiores eveniet voluptas rem voluptate error dignissimos
        excepturi obcaecati minus. Animi assumenda similique doloribus tempora
        nesciunt, cupiditate ullam ut id voluptatem, provident facilis?
        Assumenda illum magnam obcaecati quos excepturi aliquid natus tempora
        perspiciatis quidem laboriosam itaque consequuntur amet culpa iusto
        maxime illo tenetur accusantium similique quis facere, quia et. Sed
        repellendus veniam molestiae. Magnam vel quasi iusto laudantium nulla
        suscipit. Tempore sed quidem repudiandae quam aspernatur, velit vero
        similique facere repellat expedita quos dignissimos accusamus facilis
        necessitatibus! Omnis, repellendus exercitationem? Ad, repellendus
        itaque. Beatae hic earum blanditiis nemo vel ad facilis facere, corporis
        modi tempora voluptatem consequuntur ab velit doloribus totam laboriosam
        consequatur quasi cupiditate temporibus libero quam pariatur. Fugit qui
        praesentium similique? Id aliquam ipsum pariatur porro ipsa, soluta
        impedit autem illum a inventore ex cum consequatur. Officiis voluptatum
        doloribus labore eius unde deserunt sequi distinctio fuga perferendis!
        Rerum exercitationem iure accusamus? Quidem recusandae tenetur molestiae
        eum expedita quos cum cupiditate atque optio eveniet corporis obcaecati
        soluta totam repellendus inventore accusamus harum amet illo sapiente
        eius, suscipit quaerat neque? Ducimus, non laborum? Nemo, ipsam facere.
        Aperiam accusantium debitis ad eum, consequatur aliquam ipsam vitae
        quidem dolorum iure amet deserunt atque natus officiis impedit
        dignissimos sapiente voluptatem quaerat. Saepe eos nisi sed suscipit! Id
        saepe deserunt consequatur tenetur rerum alias cum sequi, debitis
        nostrum at amet assumenda ex laudantium praesentium expedita qui magnam
        adipisci impedit veritatis placeat repellat autem necessitatibus!
        Quibusdam, totam officia? Ullam, ea! Consequuntur sequi provident omnis
        quam saepe distinctio architecto nemo velit earum tenetur, dolor
        eligendi fugit non magni voluptates praesentium nostrum, consectetur
        ipsa sit, veritatis deleniti? Hic, consectetur impedit! Sed maiores
        libero porro voluptate? Ducimus voluptatibus officiis assumenda
        voluptate autem quas illo recusandae. Recusandae, iusto quod commodi id
        corrupti sint non autem illum est, ipsa dignissimos quis iure
        cupiditate. Voluptates accusamus quasi error voluptatum delectus veniam
        doloribus quod sunt! Delectus eius reprehenderit tempore hic quidem,
        consectetur architecto, asperiores ad libero odit placeat quo officia
        laboriosam vel! Quae, at animi. Debitis, a eum aut saepe autem natus eos
        quidem, temporibus totam aspernatur dicta adipisci magni. Tempore magni
        a natus dolorum quasi asperiores laudantium commodi, soluta molestiae
        nihil praesentium reiciendis amet. Neque repudiandae minima eligendi
        molestias corrupti nobis expedita repellat. Quisquam dicta sint qui
        assumenda delectus rem dolores quis eligendi dolorem, atque explicabo
        quibusdam numquam ad commodi, enim minima. At, eius! Sequi neque commodi
        dolor iste suscipit? Magni hic culpa sed facilis ex ea molestias saepe
        exercitationem dolores nobis laudantium sint fuga aliquid laborum,
        explicabo cupiditate perspiciatis! Consectetur minima ex dolorem? Sequi
        iste perspiciatis deserunt quas harum? Doloribus cum laborum quo
        recusandae deserunt, quae placeat sint non eveniet est eligendi dolor
        quas nostrum alias nisi quibusdam minima quod odit veniam quidem.
        Maiores sequi sapiente unde alias enim provident eaque, sunt ad cum
        tempora ratione. Porro ipsa voluptate deleniti similique at! Corporis
        porro fugiat quam culpa, sapiente fugit ducimus repudiandae enim? Est.
        Harum est consequuntur quo, possimus amet obcaecati id facilis, maxime
        in sed eos repellendus eligendi neque veniam voluptatum. Earum quam
        fugit ducimus illum obcaecati eligendi autem, incidunt laboriosam
        assumenda molestiae? Officiis, quae animi? Earum ipsa mollitia sit
        laudantium quam. Nisi deserunt sint asperiores mollitia reprehenderit
        ducimus sed! Est quibusdam veniam possimus perferendis earum deleniti
        natus tempora facilis laborum, ea cum. At doloremque hic ipsum ut
        repudiandae labore? Impedit tenetur explicabo molestias, non eius ea
        accusantium? Quos, vel repellat! Dolor enim accusantium fugit ea ut
        veritatis quibusdam dolorem maxime adipisci ex! Odit corporis eos vel
        odio voluptatibus dignissimos ea excepturi sequi porro quia veritatis ut
        natus dolores culpa ipsum provident tempore quasi, exercitationem eaque!
        Maiores adipisci nulla nemo sit temporibus architecto? Doloremque
        possimus debitis voluptatem incidunt officia? Nulla, corporis distinctio
        quos aperiam delectus ducimus mollitia dolores unde repellat facilis
        veniam obcaecati ea suscipit ipsa, eum consequuntur eaque dicta in
        eveniet soluta! Animi qui perspiciatis molestiae inventore, ducimus
        quaerat esse cumque eius magni? Maiores exercitationem voluptate
        recusandae eligendi illo dolor maxime aut! Quos rerum mollitia cum
        recusandae. In cupiditate dolorum officia exercitationem. A debitis quae
        repellendus distinctio nobis eaque cum ut est, accusamus aut dolorem
        facilis quibusdam laboriosam quisquam corporis fugiat ducimus eligendi
        magni ex, similique in ea vero officia rem! Optio? Quidem aliquid,
        tempore cupiditate atque vitae, voluptatem placeat a corrupti eos
        perspiciatis voluptatibus delectus modi ratione distinctio in expedita
        quia repellat culpa ad! Rem magnam voluptatem ullam illo non provident.
        Nulla dolores quaerat eius iste quae doloremque tempore possimus nam
        alias voluptatibus officia culpa omnis laboriosam atque, aliquid eos
        ipsum modi deserunt? Enim inventore vel recusandae atque rerum
        reiciendis voluptates. Libero accusamus quisquam ut officiis fugiat,
        neque unde aliquam sapiente officia itaque necessitatibus provident iure
        odio sit expedita quae, eaque quo dicta in hic voluptatum ipsam. Eveniet
        perspiciatis possimus nesciunt! Adipisci id placeat expedita aliquam
        blanditiis, dolorum sequi aspernatur earum, temporibus magni voluptatum
        ducimus quas? Consequatur officiis deleniti repellendus iste accusantium
        ullam adipisci sunt consequuntur rerum doloribus! Ut, minus laboriosam!
        Quam deleniti quaerat, velit impedit, veritatis magnam numquam sint
        cumque ipsa quis aut dolorem distinctio nihil animi fuga incidunt
        praesentium excepturi iure, corporis consequatur harum. Laboriosam nulla
        laborum ipsam earum? Ratione explicabo aspernatur optio dignissimos
        cumque mollitia beatae dolorum a rem voluptatum iste modi dicta, alias
        doloribus? Ut ipsa in delectus numquam quisquam eaque illum non modi
        amet, totam nam? Eligendi doloremque nihil neque porro quod ea,
        voluptatem laudantium blanditiis ratione quibusdam veniam voluptates quo
        cumque fuga ducimus expedita facilis cum alias! Consequatur voluptates
        laborum incidunt ab obcaecati itaque fuga. Accusamus quis qui eum! Cum
        expedita quae, excepturi quia adipisci blanditiis velit possimus sequi
        voluptate numquam, ducimus aperiam voluptatem debitis vel? Reiciendis
        voluptatum praesentium magni veritatis ea sapiente vero nemo! Quae optio
        maiores magni, eligendi repellendus doloribus, nisi delectus
        perspiciatis quisquam eaque aut reiciendis repellat illum dicta ullam
        obcaecati suscipit expedita repudiandae natus commodi aliquam molestiae
        voluptatem facilis ut! Cumque! Dolores, ut! Temporibus exercitationem
        dolorem eius sit eveniet ut velit labore quae consequatur ex illum,
        tempora fugit nemo eum commodi veritatis. Illum odit similique labore
        quo soluta itaque officia earum. Debitis magni voluptatum vel hic, ad
        distinctio non tempore sit ipsa iure quidem, atque obcaecati ipsam
        explicabo nam dolores cupiditate officiis, cumque asperiores eveniet!
        Consequatur facere assumenda natus iure saepe. Aliquid, cumque, quod
        ipsum quam natus deserunt perferendis numquam veritatis veniam velit
        nostrum eum magnam sit illum. Accusantium, assumenda reprehenderit
        minima magni architecto iure quia totam. Possimus obcaecati nam aut.
        Fugiat dignissimos at est amet accusamus, sed qui saepe necessitatibus,
        distinctio earum hic deserunt. Provident error illo quidem ducimus dicta
        inventore obcaecati ea ex doloribus, maiores culpa. Delectus, beatae.
        Delectus. Ea possimus voluptatibus tenetur doloribus autem accusamus
        doloremque vel voluptates deserunt! Quisquam et cum dolore mollitia! Ad,
        at. Tempora similique atque exercitationem totam, ipsa quidem eum
        nesciunt tenetur repellat iure? Fuga voluptates qui architecto eaque
        rem, doloribus unde a deleniti asperiores eligendi saepe eos possimus
        ducimus quibusdam minus accusamus delectus quis laborum recusandae
        cumque. Error cum ea deserunt labore delectus.
      </div>
    </main>
  );
}

export function FaqSectionContent() {
  return (
    <main className="faqsectioncontent">Faq Section Content Page Section</main>
  );
}

export function EmergencyContactContent() {
  return (
    <main className="emergencycontactcontent">
      Emergency Contact Content Page Section
    </main>
  );
}

export function LiveChatSupportContent() {
  return (
    <main className="livechatsupportcontent">
      Live Chat Support Content Page Section
    </main>
  );
}

export function FeedbackformContent() {
  return (
    <main className="feedbackformcontent">
      Feed back form Content Page Section
    </main>
  );
}

export function ResultsandWinnersDisplayContent() {
  return (
    <main className="resultsandwinnersdisplaycontent">
      Results and Winners Display ContentPage Section
    </main>
  );
}

export function ExportDataContent() {
  return (
    <main className="exportdatacontent">Export Data Content Page Section</main>
  );
}

export function TermsandConditionsContent() {
  return (
    <main className="termsandconditionscontent">
      <h1 className="termsandconditionsheading">Terms and Conditions</h1>
      <div className="termsandconditionsinfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt
        doloribus earum adipisci eaque nobis, molestias delectus minima,
        corporis perferendis possimus provident sed aliquid? Labore sequi soluta
        consectetur. Adipisci, quaerat. Iusto repudiandae sed libero ad, animi
        ducimus nobis blanditiis iste laboriosam similique sit facilis doloribus
        ullam quidem magnam necessitatibus. Consectetur iste quam harum officia
        aperiam labore voluptate nisi ullam eius? Assumenda illo nulla ipsum
        quibusdam quidem accusamus enim. Deserunt, commodi ipsum. Aperiam
        corrupti accusamus, illum tenetur amet eos rerum cum iusto, mollitia
        assumenda reiciendis iure eaque magnam eum ea rem! Nihil, molestias
        animi inventore repellat nisi consequuntur pariatur omnis quo quaerat
        cum! Dolorem voluptate quasi, modi quisquam veritatis quo dolores fugit,
        explicabo nihil tempore ea natus voluptas aspernatur, placeat autem!
        Mollitia, pariatur illo! Vel sit atque ab iure labore, iste magnam,
        nemo, quae enim reiciendis molestiae esse quaerat iusto molestias.
        Corporis dicta porro maxime exercitationem sint voluptates nam autem
        voluptatem. Non sit consectetur earum quam cum dolorem beatae laudantium
        ipsam. Corrupti omnis, recusandae iste repellat culpa odio magni,
        ducimus possimus totam similique expedita perspiciatis, nobis aliquid
        vero dolorum! Iusto, aliquam. Nam quis harum cumque sed iusto similique
        alias. In praesentium totam sunt officia ut exercitationem velit maiores
        aliquam molestias eius expedita numquam, quod natus eaque accusantium
        deserunt quis quas provident! Qui veritatis enim accusamus voluptate,
        porro nostrum commodi in, ipsa possimus, sint aperiam non quibusdam?
        Odio dicta, voluptatibus suscipit nemo odit esse error explicabo vero
        animi, magnam accusantium. Maxime, veritatis. Omnis necessitatibus
        blanditiis minus facilis ab ipsum architecto sunt accusantium molestias,
        rerum ea adipisci perspiciatis inventore reprehenderit hic, deserunt
        sint maxime consequuntur error minima quidem! Porro unde odio sit
        maiores? Blanditiis ab eveniet quisquam, reiciendis tempora minima
        molestias. Repellat sint consectetur nesciunt optio quisquam nihil sed
        nulla distinctio cupiditate corrupti. Modi consectetur eveniet dolorum
        dicta expedita similique doloremque illo corrupti! Eum praesentium porro
        tempore corporis voluptatibus nam maxime, earum expedita asperiores,
        magni rerum quisquam nesciunt laudantium hic autem, consequatur eveniet
        esse sed eligendi odio dolorum! Similique dicta voluptatum tenetur
        voluptatem. Nisi reprehenderit atque laboriosam magnam eum libero,
        itaque vero, excepturi tenetur, iure non debitis ad? Incidunt voluptatum
        accusantium nesciunt. Sapiente quis quibusdam culpa, cum laudantium
        totam rem libero dicta nam? Officia, repellendus quia voluptatem aperiam
        illum sapiente maiores eveniet voluptas rem voluptate error dignissimos
        excepturi obcaecati minus. Animi assumenda similique doloribus tempora
        nesciunt, cupiditate ullam ut id voluptatem, provident facilis?
        Assumenda illum magnam obcaecati quos excepturi aliquid natus tempora
        perspiciatis quidem laboriosam itaque consequuntur amet culpa iusto
        maxime illo tenetur accusantium similique quis facere, quia et. Sed
        repellendus veniam molestiae. Magnam vel quasi iusto laudantium nulla
        suscipit. Tempore sed quidem repudiandae quam aspernatur, velit vero
        similique facere repellat expedita quos dignissimos accusamus facilis
        necessitatibus! Omnis, repellendus exercitationem? Ad, repellendus
        itaque. Beatae hic earum blanditiis nemo vel ad facilis facere, corporis
        modi tempora voluptatem consequuntur ab velit doloribus totam laboriosam
        consequatur quasi cupiditate temporibus libero quam pariatur. Fugit qui
        praesentium similique? Id aliquam ipsum pariatur porro ipsa, soluta
        impedit autem illum a inventore ex cum consequatur. Officiis voluptatum
        doloribus labore eius unde deserunt sequi distinctio fuga perferendis!
        Rerum exercitationem iure accusamus? Quidem recusandae tenetur molestiae
        eum expedita quos cum cupiditate atque optio eveniet corporis obcaecati
        soluta totam repellendus inventore accusamus harum amet illo sapiente
        eius, suscipit quaerat neque? Ducimus, non laborum? Nemo, ipsam facere.
        Aperiam accusantium debitis ad eum, consequatur aliquam ipsam vitae
        quidem dolorum iure amet deserunt atque natus officiis impedit
        dignissimos sapiente voluptatem quaerat. Saepe eos nisi sed suscipit! Id
        saepe deserunt consequatur tenetur rerum alias cum sequi, debitis
        nostrum at amet assumenda ex laudantium praesentium expedita qui magnam
        adipisci impedit veritatis placeat repellat autem necessitatibus!
        Quibusdam, totam officia? Ullam, ea! Consequuntur sequi provident omnis
        quam saepe distinctio architecto nemo velit earum tenetur, dolor
        eligendi fugit non magni voluptates praesentium nostrum, consectetur
        ipsa sit, veritatis deleniti? Hic, consectetur impedit! Sed maiores
        libero porro voluptate? Ducimus voluptatibus officiis assumenda
        voluptate autem quas illo recusandae. Recusandae, iusto quod commodi id
        corrupti sint non autem illum est, ipsa dignissimos quis iure
        cupiditate. Voluptates accusamus quasi error voluptatum delectus veniam
        doloribus quod sunt! Delectus eius reprehenderit tempore hic quidem,
        consectetur architecto, asperiores ad libero odit placeat quo officia
        laboriosam vel! Quae, at animi. Debitis, a eum aut saepe autem natus eos
        quidem, temporibus totam aspernatur dicta adipisci magni. Tempore magni
        a natus dolorum quasi asperiores laudantium commodi, soluta molestiae
        nihil praesentium reiciendis amet. Neque repudiandae minima eligendi
        molestias corrupti nobis expedita repellat. Quisquam dicta sint qui
        assumenda delectus rem dolores quis eligendi dolorem, atque explicabo
        quibusdam numquam ad commodi, enim minima. At, eius! Sequi neque commodi
        dolor iste suscipit? Magni hic culpa sed facilis ex ea molestias saepe
        exercitationem dolores nobis laudantium sint fuga aliquid laborum,
        explicabo cupiditate perspiciatis! Consectetur minima ex dolorem? Sequi
        iste perspiciatis deserunt quas harum? Doloribus cum laborum quo
        recusandae deserunt, quae placeat sint non eveniet est eligendi dolor
        quas nostrum alias nisi quibusdam minima quod odit veniam quidem.
        Maiores sequi sapiente unde alias enim provident eaque, sunt ad cum
        tempora ratione. Porro ipsa voluptate deleniti similique at! Corporis
        porro fugiat quam culpa, sapiente fugit ducimus repudiandae enim? Est.
        Harum est consequuntur quo, possimus amet obcaecati id facilis, maxime
        in sed eos repellendus eligendi neque veniam voluptatum. Earum quam
        fugit ducimus illum obcaecati eligendi autem, incidunt laboriosam
        assumenda molestiae? Officiis, quae animi? Earum ipsa mollitia sit
        laudantium quam. Nisi deserunt sint asperiores mollitia reprehenderit
        ducimus sed! Est quibusdam veniam possimus perferendis earum deleniti
        natus tempora facilis laborum, ea cum. At doloremque hic ipsum ut
        repudiandae labore? Impedit tenetur explicabo molestias, non eius ea
        accusantium? Quos, vel repellat! Dolor enim accusantium fugit ea ut
        veritatis quibusdam dolorem maxime adipisci ex! Odit corporis eos vel
        odio voluptatibus dignissimos ea excepturi sequi porro quia veritatis ut
        natus dolores culpa ipsum provident tempore quasi, exercitationem eaque!
        Maiores adipisci nulla nemo sit temporibus architecto? Doloremque
        possimus debitis voluptatem incidunt officia? Nulla, corporis distinctio
        quos aperiam delectus ducimus mollitia dolores unde repellat facilis
        veniam obcaecati ea suscipit ipsa, eum consequuntur eaque dicta in
        eveniet soluta! Animi qui perspiciatis molestiae inventore, ducimus
        quaerat esse cumque eius magni? Maiores exercitationem voluptate
        recusandae eligendi illo dolor maxime aut! Quos rerum mollitia cum
        recusandae. In cupiditate dolorum officia exercitationem. A debitis quae
        repellendus distinctio nobis eaque cum ut est, accusamus aut dolorem
        facilis quibusdam laboriosam quisquam corporis fugiat ducimus eligendi
        magni ex, similique in ea vero officia rem! Optio? Quidem aliquid,
        tempore cupiditate atque vitae, voluptatem placeat a corrupti eos
        perspiciatis voluptatibus delectus modi ratione distinctio in expedita
        quia repellat culpa ad! Rem magnam voluptatem ullam illo non provident.
        Nulla dolores quaerat eius iste quae doloremque tempore possimus nam
        alias voluptatibus officia culpa omnis laboriosam atque, aliquid eos
        ipsum modi deserunt? Enim inventore vel recusandae atque rerum
        reiciendis voluptates. Libero accusamus quisquam ut officiis fugiat,
        neque unde aliquam sapiente officia itaque necessitatibus provident iure
        odio sit expedita quae, eaque quo dicta in hic voluptatum ipsam. Eveniet
        perspiciatis possimus nesciunt! Adipisci id placeat expedita aliquam
        blanditiis, dolorum sequi aspernatur earum, temporibus magni voluptatum
        ducimus quas? Consequatur officiis deleniti repellendus iste accusantium
        ullam adipisci sunt consequuntur rerum doloribus! Ut, minus laboriosam!
        Quam deleniti quaerat, velit impedit, veritatis magnam numquam sint
        cumque ipsa quis aut dolorem distinctio nihil animi fuga incidunt
        praesentium excepturi iure, corporis consequatur harum. Laboriosam nulla
        laborum ipsam earum? Ratione explicabo aspernatur optio dignissimos
        cumque mollitia beatae dolorum a rem voluptatum iste modi dicta, alias
        doloribus? Ut ipsa in delectus numquam quisquam eaque illum non modi
        amet, totam nam? Eligendi doloremque nihil neque porro quod ea,
        voluptatem laudantium blanditiis ratione quibusdam veniam voluptates quo
        cumque fuga ducimus expedita facilis cum alias! Consequatur voluptates
        laborum incidunt ab obcaecati itaque fuga. Accusamus quis qui eum! Cum
        expedita quae, excepturi quia adipisci blanditiis velit possimus sequi
        voluptate numquam, ducimus aperiam voluptatem debitis vel? Reiciendis
        voluptatum praesentium magni veritatis ea sapiente vero nemo! Quae optio
        maiores magni, eligendi repellendus doloribus, nisi delectus
        perspiciatis quisquam eaque aut reiciendis repellat illum dicta ullam
        obcaecati suscipit expedita repudiandae natus commodi aliquam molestiae
        voluptatem facilis ut! Cumque! Dolores, ut! Temporibus exercitationem
        dolorem eius sit eveniet ut velit labore quae consequatur ex illum,
        tempora fugit nemo eum commodi veritatis. Illum odit similique labore
        quo soluta itaque officia earum. Debitis magni voluptatum vel hic, ad
        distinctio non tempore sit ipsa iure quidem, atque obcaecati ipsam
        explicabo nam dolores cupiditate officiis, cumque asperiores eveniet!
        Consequatur facere assumenda natus iure saepe. Aliquid, cumque, quod
        ipsum quam natus deserunt perferendis numquam veritatis veniam velit
        nostrum eum magnam sit illum. Accusantium, assumenda reprehenderit
        minima magni architecto iure quia totam. Possimus obcaecati nam aut.
        Fugiat dignissimos at est amet accusamus, sed qui saepe necessitatibus,
        distinctio earum hic deserunt. Provident error illo quidem ducimus dicta
        inventore obcaecati ea ex doloribus, maiores culpa. Delectus, beatae.
        Delectus. Ea possimus voluptatibus tenetur doloribus autem accusamus
        doloremque vel voluptates deserunt! Quisquam et cum dolore mollitia! Ad,
        at. Tempora similique atque exercitationem totam, ipsa quidem eum
        nesciunt tenetur repellat iure? Fuga voluptates qui architecto eaque
        rem, doloribus unde a deleniti asperiores eligendi saepe eos possimus
        ducimus quibusdam minus accusamus delectus quis laborum recusandae
        cumque. Error cum ea deserunt labore delectus.
      </div>
    </main>
  );
}

export function PrivacyPolicyContent() {
  return (
    <main className="privacypolicycontent">
      <h1 className="privacypolicyheading">Privacy Policy</h1>
      <div className="privacypolicyinfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt
        doloribus earum adipisci eaque nobis, molestias delectus minima,
        corporis perferendis possimus provident sed aliquid? Labore sequi soluta
        consectetur. Adipisci, quaerat. Iusto repudiandae sed libero ad, animi
        ducimus nobis blanditiis iste laboriosam similique sit facilis doloribus
        ullam quidem magnam necessitatibus. Consectetur iste quam harum officia
        aperiam labore voluptate nisi ullam eius? Assumenda illo nulla ipsum
        quibusdam quidem accusamus enim. Deserunt, commodi ipsum. Aperiam
        corrupti accusamus, illum tenetur amet eos rerum cum iusto, mollitia
        assumenda reiciendis iure eaque magnam eum ea rem! Nihil, molestias
        animi inventore repellat nisi consequuntur pariatur omnis quo quaerat
        cum! Dolorem voluptate quasi, modi quisquam veritatis quo dolores fugit,
        explicabo nihil tempore ea natus voluptas aspernatur, placeat autem!
        Mollitia, pariatur illo! Vel sit atque ab iure labore, iste magnam,
        nemo, quae enim reiciendis molestiae esse quaerat iusto molestias.
        Corporis dicta porro maxime exercitationem sint voluptates nam autem
        voluptatem. Non sit consectetur earum quam cum dolorem beatae laudantium
        ipsam. Corrupti omnis, recusandae iste repellat culpa odio magni,
        ducimus possimus totam similique expedita perspiciatis, nobis aliquid
        vero dolorum! Iusto, aliquam. Nam quis harum cumque sed iusto similique
        alias. In praesentium totam sunt officia ut exercitationem velit maiores
        aliquam molestias eius expedita numquam, quod natus eaque accusantium
        deserunt quis quas provident! Qui veritatis enim accusamus voluptate,
        porro nostrum commodi in, ipsa possimus, sint aperiam non quibusdam?
        Odio dicta, voluptatibus suscipit nemo odit esse error explicabo vero
        animi, magnam accusantium. Maxime, veritatis. Omnis necessitatibus
        blanditiis minus facilis ab ipsum architecto sunt accusantium molestias,
        rerum ea adipisci perspiciatis inventore reprehenderit hic, deserunt
        sint maxime consequuntur error minima quidem! Porro unde odio sit
        maiores? Blanditiis ab eveniet quisquam, reiciendis tempora minima
        molestias. Repellat sint consectetur nesciunt optio quisquam nihil sed
        nulla distinctio cupiditate corrupti. Modi consectetur eveniet dolorum
        dicta expedita similique doloremque illo corrupti! Eum praesentium porro
        tempore corporis voluptatibus nam maxime, earum expedita asperiores,
        magni rerum quisquam nesciunt laudantium hic autem, consequatur eveniet
        esse sed eligendi odio dolorum! Similique dicta voluptatum tenetur
        voluptatem. Nisi reprehenderit atque laboriosam magnam eum libero,
        itaque vero, excepturi tenetur, iure non debitis ad? Incidunt voluptatum
        accusantium nesciunt. Sapiente quis quibusdam culpa, cum laudantium
        totam rem libero dicta nam? Officia, repellendus quia voluptatem aperiam
        illum sapiente maiores eveniet voluptas rem voluptate error dignissimos
        excepturi obcaecati minus. Animi assumenda similique doloribus tempora
        nesciunt, cupiditate ullam ut id voluptatem, provident facilis?
        Assumenda illum magnam obcaecati quos excepturi aliquid natus tempora
        perspiciatis quidem laboriosam itaque consequuntur amet culpa iusto
        maxime illo tenetur accusantium similique quis facere, quia et. Sed
        repellendus veniam molestiae. Magnam vel quasi iusto laudantium nulla
        suscipit. Tempore sed quidem repudiandae quam aspernatur, velit vero
        similique facere repellat expedita quos dignissimos accusamus facilis
        necessitatibus! Omnis, repellendus exercitationem? Ad, repellendus
        itaque. Beatae hic earum blanditiis nemo vel ad facilis facere, corporis
        modi tempora voluptatem consequuntur ab velit doloribus totam laboriosam
        consequatur quasi cupiditate temporibus libero quam pariatur. Fugit qui
        praesentium similique? Id aliquam ipsum pariatur porro ipsa, soluta
        impedit autem illum a inventore ex cum consequatur. Officiis voluptatum
        doloribus labore eius unde deserunt sequi distinctio fuga perferendis!
        Rerum exercitationem iure accusamus? Quidem recusandae tenetur molestiae
        eum expedita quos cum cupiditate atque optio eveniet corporis obcaecati
        soluta totam repellendus inventore accusamus harum amet illo sapiente
        eius, suscipit quaerat neque? Ducimus, non laborum? Nemo, ipsam facere.
        Aperiam accusantium debitis ad eum, consequatur aliquam ipsam vitae
        quidem dolorum iure amet deserunt atque natus officiis impedit
        dignissimos sapiente voluptatem quaerat. Saepe eos nisi sed suscipit! Id
        saepe deserunt consequatur tenetur rerum alias cum sequi, debitis
        nostrum at amet assumenda ex laudantium praesentium expedita qui magnam
        adipisci impedit veritatis placeat repellat autem necessitatibus!
        Quibusdam, totam officia? Ullam, ea! Consequuntur sequi provident omnis
        quam saepe distinctio architecto nemo velit earum tenetur, dolor
        eligendi fugit non magni voluptates praesentium nostrum, consectetur
        ipsa sit, veritatis deleniti? Hic, consectetur impedit! Sed maiores
        libero porro voluptate? Ducimus voluptatibus officiis assumenda
        voluptate autem quas illo recusandae. Recusandae, iusto quod commodi id
        corrupti sint non autem illum est, ipsa dignissimos quis iure
        cupiditate. Voluptates accusamus quasi error voluptatum delectus veniam
        doloribus quod sunt! Delectus eius reprehenderit tempore hic quidem,
        consectetur architecto, asperiores ad libero odit placeat quo officia
        laboriosam vel! Quae, at animi. Debitis, a eum aut saepe autem natus eos
        quidem, temporibus totam aspernatur dicta adipisci magni. Tempore magni
        a natus dolorum quasi asperiores laudantium commodi, soluta molestiae
        nihil praesentium reiciendis amet. Neque repudiandae minima eligendi
        molestias corrupti nobis expedita repellat. Quisquam dicta sint qui
        assumenda delectus rem dolores quis eligendi dolorem, atque explicabo
        quibusdam numquam ad commodi, enim minima. At, eius! Sequi neque commodi
        dolor iste suscipit? Magni hic culpa sed facilis ex ea molestias saepe
        exercitationem dolores nobis laudantium sint fuga aliquid laborum,
        explicabo cupiditate perspiciatis! Consectetur minima ex dolorem? Sequi
        iste perspiciatis deserunt quas harum? Doloribus cum laborum quo
        recusandae deserunt, quae placeat sint non eveniet est eligendi dolor
        quas nostrum alias nisi quibusdam minima quod odit veniam quidem.
        Maiores sequi sapiente unde alias enim provident eaque, sunt ad cum
        tempora ratione. Porro ipsa voluptate deleniti similique at! Corporis
        porro fugiat quam culpa, sapiente fugit ducimus repudiandae enim? Est.
        Harum est consequuntur quo, possimus amet obcaecati id facilis, maxime
        in sed eos repellendus eligendi neque veniam voluptatum. Earum quam
        fugit ducimus illum obcaecati eligendi autem, incidunt laboriosam
        assumenda molestiae? Officiis, quae animi? Earum ipsa mollitia sit
        laudantium quam. Nisi deserunt sint asperiores mollitia reprehenderit
        ducimus sed! Est quibusdam veniam possimus perferendis earum deleniti
        natus tempora facilis laborum, ea cum. At doloremque hic ipsum ut
        repudiandae labore? Impedit tenetur explicabo molestias, non eius ea
        accusantium? Quos, vel repellat! Dolor enim accusantium fugit ea ut
        veritatis quibusdam dolorem maxime adipisci ex! Odit corporis eos vel
        odio voluptatibus dignissimos ea excepturi sequi porro quia veritatis ut
        natus dolores culpa ipsum provident tempore quasi, exercitationem eaque!
        Maiores adipisci nulla nemo sit temporibus architecto? Doloremque
        possimus debitis voluptatem incidunt officia? Nulla, corporis distinctio
        quos aperiam delectus ducimus mollitia dolores unde repellat facilis
        veniam obcaecati ea suscipit ipsa, eum consequuntur eaque dicta in
        eveniet soluta! Animi qui perspiciatis molestiae inventore, ducimus
        quaerat esse cumque eius magni? Maiores exercitationem voluptate
        recusandae eligendi illo dolor maxime aut! Quos rerum mollitia cum
        recusandae. In cupiditate dolorum officia exercitationem. A debitis quae
        repellendus distinctio nobis eaque cum ut est, accusamus aut dolorem
        facilis quibusdam laboriosam quisquam corporis fugiat ducimus eligendi
        magni ex, similique in ea vero officia rem! Optio? Quidem aliquid,
        tempore cupiditate atque vitae, voluptatem placeat a corrupti eos
        perspiciatis voluptatibus delectus modi ratione distinctio in expedita
        quia repellat culpa ad! Rem magnam voluptatem ullam illo non provident.
        Nulla dolores quaerat eius iste quae doloremque tempore possimus nam
        alias voluptatibus officia culpa omnis laboriosam atque, aliquid eos
        ipsum modi deserunt? Enim inventore vel recusandae atque rerum
        reiciendis voluptates. Libero accusamus quisquam ut officiis fugiat,
        neque unde aliquam sapiente officia itaque necessitatibus provident iure
        odio sit expedita quae, eaque quo dicta in hic voluptatum ipsam. Eveniet
        perspiciatis possimus nesciunt! Adipisci id placeat expedita aliquam
        blanditiis, dolorum sequi aspernatur earum, temporibus magni voluptatum
        ducimus quas? Consequatur officiis deleniti repellendus iste accusantium
        ullam adipisci sunt consequuntur rerum doloribus! Ut, minus laboriosam!
        Quam deleniti quaerat, velit impedit, veritatis magnam numquam sint
        cumque ipsa quis aut dolorem distinctio nihil animi fuga incidunt
        praesentium excepturi iure, corporis consequatur harum. Laboriosam nulla
        laborum ipsam earum? Ratione explicabo aspernatur optio dignissimos
        cumque mollitia beatae dolorum a rem voluptatum iste modi dicta, alias
        doloribus? Ut ipsa in delectus numquam quisquam eaque illum non modi
        amet, totam nam? Eligendi doloremque nihil neque porro quod ea,
        voluptatem laudantium blanditiis ratione quibusdam veniam voluptates quo
        cumque fuga ducimus expedita facilis cum alias! Consequatur voluptates
        laborum incidunt ab obcaecati itaque fuga. Accusamus quis qui eum! Cum
        expedita quae, excepturi quia adipisci blanditiis velit possimus sequi
        voluptate numquam, ducimus aperiam voluptatem debitis vel? Reiciendis
        voluptatum praesentium magni veritatis ea sapiente vero nemo! Quae optio
        maiores magni, eligendi repellendus doloribus, nisi delectus
        perspiciatis quisquam eaque aut reiciendis repellat illum dicta ullam
        obcaecati suscipit expedita repudiandae natus commodi aliquam molestiae
        voluptatem facilis ut! Cumque! Dolores, ut! Temporibus exercitationem
        dolorem eius sit eveniet ut velit labore quae consequatur ex illum,
        tempora fugit nemo eum commodi veritatis. Illum odit similique labore
        quo soluta itaque officia earum. Debitis magni voluptatum vel hic, ad
        distinctio non tempore sit ipsa iure quidem, atque obcaecati ipsam
        explicabo nam dolores cupiditate officiis, cumque asperiores eveniet!
        Consequatur facere assumenda natus iure saepe. Aliquid, cumque, quod
        ipsum quam natus deserunt perferendis numquam veritatis veniam velit
        nostrum eum magnam sit illum. Accusantium, assumenda reprehenderit
        minima magni architecto iure quia totam. Possimus obcaecati nam aut.
        Fugiat dignissimos at est amet accusamus, sed qui saepe necessitatibus,
        distinctio earum hic deserunt. Provident error illo quidem ducimus dicta
        inventore obcaecati ea ex doloribus, maiores culpa. Delectus, beatae.
        Delectus. Ea possimus voluptatibus tenetur doloribus autem accusamus
        doloremque vel voluptates deserunt! Quisquam et cum dolore mollitia! Ad,
        at. Tempora similique atque exercitationem totam, ipsa quidem eum
        nesciunt tenetur repellat iure? Fuga voluptates qui architecto eaque
        rem, doloribus unde a deleniti asperiores eligendi saepe eos possimus
        ducimus quibusdam minus accusamus delectus quis laborum recusandae
        cumque. Error cum ea deserunt labore delectus.
      </div>{" "}
    </main>
  );
}

export function AboutusContent() {
  return (
    <main className="aboutuscontent">
      <div className="authcontainer">
        <div className="authphoto"></div>
        <p className="hellothere">
          Hello there , I am J Vinay Kumar {"\u{1F44B}"}{" "}
          <p className="author">Author of this Application</p>
        </p>
        <div className="info">
          <p className="user">Name : </p>
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
            <img
              className="smimg"
              src="https://img.icons8.com/?size=96&id=Mhl1TfJLdkh5&format=png"
              alt=""
            />
            <img
              className="smimg"
              src="https://img.icons8.com/?size=96&id=xuvGCOXi8Wyg&format=png"
              alt=""
            />
            <img
              className="smimg"
              src="https://img.icons8.com/?size=96&id=32323&format=png"
              alt=""
            />
            <img
              className="smimg"
              src="https://img.icons8.com/?size=96&id=118497&format=png"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export function ContactusContent() {
  return (
    <main className="contactuscontent">
      <div className="contactuscontainer">
        <div>
          <img
            className="contactusimg"
            src="https://cdn-icons-png.flaticon.com/128/2967/2967883.png"
            alt=""
          />
        </div>
        <div>
          <p className="contactus">Contact us</p>
        </div>
        <div className="contacticons">
          <div className="contacticonsdiv">
            <img
              className="contacticons"
              src="https://cdn-icons-png.flaticon.com/128/455/455705.png"
              alt=""
            />{" "}
            <p className="contactusdetails1">6304787895</p>
          </div>
          <div className="contacticonsdiv">
            <img
              className="contacticons"
              src="https://cdn-icons-png.flaticon.com/128/181/181526.png"
              alt=""
            />{" "}
            <p className="contactusdetails2">Portofolio</p>
          </div>
          <div className="contacticonsdiv">
            <img
              className="contacticons"
              src="https://cdn-icons-png.flaticon.com/128/831/831357.png"
              alt=""
            />{" "}
            <p className="contactusdetails3">jvkumar2003@gmail.com</p>
          </div>
          <div className="contacticonsdiv">
            <img
              className="contacticons"
              src="https://cdn-icons-png.flaticon.com/128/1865/1865083.png"
              alt=""
            />{" "}
            <p className="contactusdetails4">Miracel City , Bhogapuram</p>
          </div>
        </div>
      </div>
    </main>
  );
}
export function ArchiveofPastEventsandWinnersContent() {
  return (
    <main className="archiveofpasteventsandwinners">
      Archive of Past Events and Winners Page Section
    </main>
  );
}
