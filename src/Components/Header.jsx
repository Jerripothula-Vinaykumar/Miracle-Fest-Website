import { Link, useLocation } from "react-router-dom"

export function MainHeader() {
       
  const loc = useLocation();

  switch ( loc.pathname ) {

    case "/RegisterContent"  :

     return (
        <header className="header">

                <nav className="header-nav"> 

                    <ul className="header-ul">

                        <li className="clglogoinregisterpageli"><h1 className="clglogoinregisterpage"><Link to="/">MIRACLE</Link></h1></li>
                 </ul>
                </nav>
           
        </header>
    )

    break;
        case "/TermsandConditionsContent"  :

     return (
        <header className="header">

                <nav className="header-nav"> 

                    <ul className="header-ul">

                        <li className="logo"><h1><Link to="/">MIRACLE</Link></h1></li>
                 </ul>
                </nav>
           
        </header>
    )

    break;

        case "/PrivacyPolicyContent"  :

     return (
        <header className="header">

                <nav className="header-nav"> 

                    <ul className="header-ul">

                        <li className="logo"><h1><Link to="/">MIRACLE</Link></h1></li>
                 </ul>
                </nav>
           
        </header>
    )

    break;

    
    case "/"  :

    return (
        <header className="header">

                <nav className="header-nav"> 

                    <ul className="header-ul">

                        <li className="logo"><h1><Link to="/">MIRACLE</Link></h1></li>
                           <li className="landingaboutfest"><Link to="/AboutFestContent">About Fest</Link></li>
                        <button className="landingregister"><Link to="/RegisterContent">Login</Link></button>

                 </ul>
                </nav>
           
        </header>
    )

    break;
        
        case "/AboutFestContent"  :

    return (
        <header className="header">

                <nav className="header-nav"> 

                    <ul className="header-ul">

                        <li className="logo"><h1 ><Link to="/">MIRACLE</Link></h1></li>

                 </ul>
                </nav>
           
        </header>
    )

    break;
        
    
    case "/SignupContent"  :

     return (
        <header className="header">

                <nav className="header-nav"> 

                    <ul className="header-ul">

                        <li className="clglogoinregisterpageli"><h1 className="clglogoinregisterpage"><Link to="/">MIRACLE</Link></h1></li>
                          
                 </ul>
                </nav>
           
        </header>
    )

    break;

    default :
    
    return (
        <header className="header">

                <nav className="header-nav"> 

                    <ul className="header-ul">

                        <li className="logo"><h1 className="defaultheaderlogo"><Link to="/HomeContent">MIRACLE</Link></h1></li>
                        <li className="nav-li"><Link to="/HomeContent">Home</Link></li>
                        <li className="nav-li"><Link to="/EventContent">Events</Link></li>
                        <li className="nav-li"><Link to="/AboutusContent">About us</Link></li>
                        <li className="nav-li"><Link to="/MyProfileContent"><svg className="myprofileicon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg></Link></li> 
                
                        
                        </ul>
                </nav>
           
        </header>
    )
    break;
}
}





  

  


