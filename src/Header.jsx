import { Link } from "react-router-dom"

export function MainHeader() {
       
  
    return (
        <header className="header">

                <nav className="header-nav"> 

                    <ul className="header-ul">

                        <li className="logo"><h1><Link to="/">MIRACLE</Link></h1></li>
                        <li className="nav-li"><Link to="/">Home</Link></li>
                        <li className="nav-li"><Link to="/EventContent">Events</Link></li>
                        <li className="nav-li"><Link to="/RegisterContent">Register</Link></li>
                        <li className="nav-li"><Link to="/MyProfileContent"><svg className="profileicon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg></Link></li> 
                        </ul>
                </nav>
           
        </header>
    )
}



export function HomeContent(){
  
    return(
        <main className="homecontent">
        <img className="homepic" src="https://tse1.mm.bing.net/th?id=OIP.x88tYo-Dt4VRnFFEyLmjzQHaHH&pid=Api&P=0&h=180" alt="fest picture" title="fest picture"/>
        
        </main>
    )
    
    
}



export function EventContent() {
     

    return (
       <main className="eventcontent"> 
            <h1 className="eventheader"> List of Events in Miracle fest</h1>
            <h1 className="culturalheader"> Cultural Events</h1>
              <div className="eventcard">
               <h1 className="eventname"> Banner Launch</h1>
               <hr className="chr" />
               <p  className="eventstartdate">Event date :</p>
               <p  className="eventstartdate">Event start time :</p>
               <p  className="eventstartdate">Event Venue : </p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/BannerLaunchContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname">Traditional day</h1>
               <hr className="chr" />
               <p className="eventstartdate">Event date :</p>
               <p className="eventstartdate">Event start time :</p>
               <p className="eventstartdate">Event Venue : </p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/TraditionalDayContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname">Final Fest </h1>
               <hr className="chr" />
               <p className="eventstartdate">Event date :</p>
               <p className="eventstartdate">Event start time :</p>
               <p className="eventstartdate">Event Venue :</p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/FinalFestContent">more</Link></button>
            </div>
              <h1 className="culturalheader"> Technical Events</h1>
              <div className="eventcard">
               <h1 className="eventname"> Pro Coder</h1>
               <hr className="chr" />
               <p className="eventstartdate">Event date :</p>
               <p className="eventstartdate">Event start time :</p>
               <p className="eventstartdate">Event Venue : </p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/ProCoderContent">more</Link></button>
            </div>
              <div className="eventcard">
               <h1 className="eventname"> Guess the Output </h1>
               <hr className="chr" />
               <p className="eventstartdate">Event date :</p>
               <p className="eventstartdate">Event start time :</p>
               <p className="eventstartdate">Event Venue : </p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/GuessTheOutptContent">more</Link></button>
            </div>
              <div className="eventcard">
               <h1 className="eventname">Quiz</h1>
               <hr className="chr" />
               <p className="eventstartdate">Event date :</p>
               <p className="eventstartdate">Event start time :</p>
               <p className="eventstartdate">Event Venue : </p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/QuizContent">more</Link></button>
            </div>
              <div className="eventcard">
               <h1 className="eventname"> Essay Writing</h1>
               <hr className="chr" />
               <p className="eventstartdate">Event date :</p>
               <p className="eventstartdate">Event start time :</p>
               <p className="eventstartdate">Event Venue : </p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/EssayWritingContent">more</Link></button>
            </div>
            
             <h1 className="culturalheader">Sports Events</h1>
            <div className="eventcard">
               <h1 className="eventname">Men`s Cricket</h1>
               <hr className="chr" />
               <p className="eventstartdate">Event date :</p>
               <p className="eventstartdate">Event start time :</p>
               <p className="eventstartdate">Event Venue :</p>    
               <hr className="chr" />
               <button className="eventmore"><Link to="/MensCricketContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname"> Men`s Kabaddi</h1>
                 <hr className="chr" />
                 <p className="eventstartdate">Event date :</p>
                 <p className="eventstartdate">Event start time :</p>
                 <p className="eventstartdate">Event Venue :</p>    
                 <hr className="chr" />
                 <button className="eventmore"><Link to="/MensKabaddiContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname">Men`s Volley Ball</h1>
                <hr className="chr" />
                <p className="eventstartdate">Event date :</p>
                <p className="eventstartdate">Event start time :</p>
                <p className="eventstartdate">Event Venue :</p>    
                <hr className="chr" />
                <button className="eventmore"><Link to="/MensVolleyBallContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname">Men`s Kho Kho</h1>
                 <hr className="chr" />
                 <p className="eventstartdate">Event date :</p>
                 <p className="eventstartdate">Event start time :</p>
                 <p className="eventstartdate">Event Venue :</p>    
                <hr className="chr" />
                <button className="eventmore"><Link to="/MensKhoKhoContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname">Carrom Board</h1>
                 <hr className="chr" />
                 <p className="eventstartdate">Event date :</p>
                 <p className="eventstartdate">Event start time :</p>
                 <p className="eventstartdate">Event Venue :</p>    
                <hr className="chr" />
                <button className="eventmore"><Link to="/CarromBoardContent">more</Link></button>
            </div>
            
             <div className="eventcard">
               <h1 className="eventname">Free Fire</h1>
                 <hr className="chr" />
                 <p className="eventstartdate">Event date :</p>
                  <p className="eventstartdate">Event start time :</p>
                   <p className="eventstartdate">Event Venue :</p>    
                <hr className="chr" />
                <button className="eventmore"><Link to="/FreeFireContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname">Pubg</h1>
                 <hr className="chr" />
                 <p className="eventstartdate">Event date :</p>
                  <p className="eventstartdate">Event start time :</p>
                 <p className="eventstartdate">Event Venue :</p>    
                <hr className="chr" />
                <button className="eventmore"><Link to="/PubgContent">more</Link></button>
            </div>
             <div className="eventcard">
               <h1 className="eventname"> Women`s Throwball</h1>
                 <hr className="chr" />
                 <p className="eventstartdate">Event date :</p>
                 <p className="eventstartdate">Event start time :</p>
                 <p className="eventstartdate">Event Venue :</p>    
                <hr className="chr" />
                <button className="eventmore"><Link to="/WomensThrowBallContent">more</Link></button>
            </div>
       </main>
    )
  
  }

  
export  function RegisterContent() {
     
    return (
       <main className="registercontent"> 
            
        <section className="register-container">
            <input type="text" className="signupinput"  placeholder="  Username"/>
            <input type="password" className="signupinput"  placeholder="  Password"/>
            <input type="password" className="signupinput"  placeholder="  Confirm password"/>
            <input type="email" className="signupinput"  placeholder="  E-mail address"/>
            <div className="captcha"><input type="checkbox" className="checkbox" /> <p className="verify">Verify if you are a human</p></div>
            <button className="signupinputbutton">Sign up</button> 
            <div ><p className="haveanacc">Have an account ?  <Link to="/SignupContent">Sign in</Link></p></div>
            <div className="">
                <p className="signinwith">or you can sign in with , </p>
                <div className="signupcontainer">
                    <img className="signupicon" src="https://cdn-icons-png.flaticon.com/128/10110/10110386.png" alt="" />
                    <img className="signupicon" src="https://img.icons8.com/?size=100&id=12599&format=png" alt="" />
                    <img className="signupicon" src="https://cdn-icons-png.flaticon.com/128/15047/15047495.png" alt="" />
                </div>
            </div>
        </section>
       </main>
    )
  
  }


  
export  function SignupContent() {
     
    return (
       <main className="registercontent"> 
            
        <section className="register-container">
           <input type="email" className="signupinput"  placeholder="  E-mail address"/>
            <input type="password" className="signupinput"  placeholder="  Password"/>
           
            <div className="captcha"><input type="checkbox" className="checkbox" /> <p className="verify">Verify if you are a human</p></div>
            <button className="signupinputbutton">Sign up</button> 
            <div ></div>
            <div className="">
                <p className="signinwith">or you can sign in with , </p>
                <div className="signupcontainer">
                    <img className="signupicon" src="https://cdn-icons-png.flaticon.com/128/10110/10110386.png" alt="" />
                    <img className="signupicon" src="https://img.icons8.com/?size=100&id=12599&format=png" alt="" />
                    <img className="signupicon" src="https://cdn-icons-png.flaticon.com/128/15047/15047495.png" alt="" />
               
                </div>
            </div>
        </section>
       </main>
    )
  
  }



  
export  function MyProfileContent() {
     
    return (
       <main className="myprofilecontent"> 
        <div className="myprofilecontainer">
          <img className="profilepicture" src="https://cdn-icons-png.flaticon.com/128/552/552721.png" alt="" />
          <img className="changeprofile"src="https://cdn-icons-png.flaticon.com/128/5509/5509361.png" alt="" />
        
          <div className="info">
            <p className="user">Name : </p>
            <p className="user">Year : </p>
            <p className="user">Branch : </p>
            <p className="user">Section : </p>
            <p className="user">Mobile no : </p>
            <p className="user">Linked IN : </p>
            <p className="user">Insta I`D : </p>
            <p className="user">Father : </p>
            <p className="user">Mother  : </p>
            <p className="user">Village : </p>
            <p className="user">District : </p>
            <p className="user">State : </p>
          </div>
        </div>
        
    
       </main>
    )
  
  }


export function BannerLaunchContent() {
  return (
      <main className="bannerlaunchcontent">
        <div className="event-container">
          <h1 className="event-header">Banner Launch</h1>
          <div className="event-img">
                  <img className="event-img" src="https://tse4.mm.bing.net/th?id=OIP.1lW_70Y22TsqfK0ZR75qdgHaFj&pid=Api&P=0&h=180" alt="" />
          </div>
           <div className="event-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam molestias, commodi harum excepturi omnis pariatur similique dolorem eius minima incidunt nam qui nihil, fuga, necessitatibus rerum voluptate architecto numquam?
            Quasi rem consequatur a, voluptatem iusto consequuntur suscipit esse repellat aut unde minima excepturi corporis voluptas nesciunt quidem corrupti commodi. Magni est aliquid commodi corrupti, in sequi animi cumque reiciendis.
            Aspernatur expedita, inventore reprehenderit delectus natus recusandae aliquid possimus modi, a quia architecto velit illo accusamus. Architecto dolore totam placeat, earum doloremque, quasi nesciunt sapiente quaerat ut ipsum inventore provident.
            Voluptatem aliquid ut aspernatur, at beatae natus accusantium, quaerat ex soluta sequi nulla officia fugiat labore facere magni laborum nobis. Voluptatem accusamus vero ipsum inventore ex culpa cupiditate expedita illo?
            Voluptatem sit laborum perspiciatis deserunt eum, unde assumenda, placeat iure minima alias molestiae possimus consequuntur doloribus suscipit beatae animi ex quo quia provident autem. Dolore, debitis. Aliquam doloremque culpa non?
            Voluptatem id error velit nobis nesciunt laborum! Dignissimos eos maxime doloribus molestias, dolor eum similique ducimus praesentium deserunt, voluptatum distinctio labore numquam aliquam ratione suscipit explicabo culpa, dolorem harum placeat!

             </div>
         <div className="container2">
              <p className="event-details">Event Details </p>
              <div className="event-timings-info">
                <p>Event Date : </p>
                <p>Event Start Time : </p>
                <p>Event Venue  :</p>
                <p>Event End Time : </p>
              </div>
                <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
              </div>
        </div>
      </main>
  )

}


export function TraditionalDayContent() {
  return (
      <main className="traditionaldaycontent">
          <div className="event-container">
         <h1 className="event-header">Traditional Day</h1>
          <div className="event-img">
                  <img className="event-img" src="https://wallpaperaccess.com/full/504997.jpg" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
           
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function FinalFestContent() {
  return (
      <main className="finalfestcontent">
           <div className="event-container">
         <h1 className="event-header">Final Fest Day</h1>
          <div className="event-img">
                  <img className="event-img" src="https://tse2.mm.bing.net/th?id=OIP.XBkw-Yo_GqwujtxH0-UDFgHaE8&pid=Api&P=0&h=180" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
          
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function ProCoderContent() {
  return (
      <main className="procodercontent">
       <div className="event-container">
         <h1 className="event-header">Pro Coder</h1>
          <div className="event-img">
                  <img className="event-img" src="https://tse1.mm.bing.net/th?id=OIP.-4mlYMympHgX0Qg0nGFiwwHaEK&pid=Api&P=0&h=180" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
           
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function GuessTheOutptContent() {
  return (
      <main className="guesstheoutputcontent">
          <div className="event-container">
         <h1 className="event-header">Guess the Output</h1>
          <div className="event-img">
                  <img className="event-img" src="https://tse1.mm.bing.net/th?id=OIP.Lq5oR1qOfuv2QvuPIqpfWwHaEK&pid=Api&P=0&h=180" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
           
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function QuizContent() {
  return (
      <main className="quizcontent">
          <div className="event-container">
         <h1 className="event-header">Quiz</h1>
          <div className="event-img">
                  <img className="event-img" src="https://tse1.mm.bing.net/th?id=OIP.WgNDvSJohcANNX6r4z_r0QHaFW&pid=Api&P=0&h=180" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
           
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function EssayWritingContent() {
  return (
      <main className="essaywritingcontent">
          <div className="event-container">
         <h1 className="event-header">Essay Writing</h1>
          <div className="event-img">
                  <img className="event-img" src="https://i.pinimg.com/originals/76/a7/8e/76a78e7c51a8ca6d4c8004a7e02875e4.jpg" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
          
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function MensCricketContent() {
  return (
      <main className="menscricketcontent">
         <div className="event-container">
         <h1 className="event-header">Men`s Cricket</h1>
          <div className="event-img">
                  <img className="event-img" src="https://tse1.mm.bing.net/th?id=OIP.WgReTzz0qUYbdKHE78lCIAAAAA&pid=Api&P=0&h=180" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
          
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function MensKabaddiContent() {
  return (
      <main className="menskabaddicontent">
       <div className="event-container">
         <h1 className="event-header">Men`s Kabaddi</h1>
          <div className="event-img">
                  <img className="event-img" src="https://tse1.mm.bing.net/th?id=OIP.0dkMP6vbYIIyRAHrV92SbwHaH5&pid=Api&P=0&h=180" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
          
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function MensVolleyBallContent() {
  return (
      <main className="mensvolleyballcontent">
          <div className="event-container">
         <h1 className="event-header">Men`s Volley Ball</h1>
          <div className="event-img">
                  <img className="event-img" src="https://tse1.mm.bing.net/th?id=OIP.XICFwqLzCt8cziRG2Hn0QgHaHa&pid=Api&P=0&h=180" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
         
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function MensKhoKhoContent() {
  return (
      <main className="menskhokhocontent">
        <div className="event-container">
         <h1 className="event-header"> Mens Kho Kho</h1>
          <div className="event-img">
                  <img className="event-img" src="https://wallpapercave.com/wp/wp7149881.jpg" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
          
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function CarromBoardContent() {
  return (
      <main className="carromboardcontent">
         <div className="event-container">
         <h1 className="event-header">Carroms</h1>
          <div className="event-img">
                  <img className="event-img" src="https://tse2.mm.bing.net/th?id=OIP.d6fTjJ1_7Hk6FkmIyHNz7wHaEo&pid=Api&P=0&h=180" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
           
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function FreeFireContent() {
  return (
      <main className="freefirecontent">
      <div className="event-container">
         <h1 className="event-header">Free Fire </h1>
          <div className="event-img">
                  <img className="event-img" src="https://tse1.mm.bing.net/th?id=OIP.0KfXnQE0PT2B2ibHuXeJ6AHaEK&pid=Api&P=0&h=180" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
           
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function PubgContent() {
  return (
      <main className="pubgcontent">
        <div className="event-container">
         <h1 className="event-header">Battle Grounds Mobile</h1>
          <div className="event-img">
                  <img className="event-img" src="https://tse2.mm.bing.net/th?id=OIP.Wp2liTM_bFMo7rlt99jicwHaEo&pid=Api&P=0&h=180" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
          
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function WomensThrowBallContent() {
  return (
      <main className="womensthrowballcontent">
        <div className="event-container">
         <h1 className="event-header">Women`s Throw Ball</h1>
          <div className="event-img">
                  <img className="event-img" src="https://st2.depositphotos.com/1518767/11358/i/950/depositphotos_113581422-stock-photo-sportswoman-throwing-ball.jpg" alt="" />
          </div>
           <div className="event-info">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, ullam eaque saepe commodi quod odit eos enim fugiat illo ex quidem animi delectus qui quae nisi nihil, inventore molestiae?
             Praesentium dolorem enim, repellat deleniti perferendis nam, odio quam, quos ipsa sit similique consequatur! Ullam recusandae reiciendis quae non, quam, itaque repellat delectus cupiditate adipisci, autem ducimus quas rem asperiores.
              </div>
         <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
          
            <button className="register-button"><Link to="/EventRegistrationContent">Register</Link></button>
             
            </div>
        </div>
      </main>
  )

}


export function EventRegistrationContent() {
      return(
        <main className="eventregistrationcontent">
            <div className="container2">
           <p className="event-details">Event Details </p>
            <div className="event-timings-info">
              <p>Event Name :</p>
              <p>Event Date : </p>
              <p>Event Start Time : </p>
              <p>Event Venue  :</p>
              <p>Event End Time : </p>
            </div>
           <div className="event-register-info">
              <p>Want To Register For The Traditional Day , Here is
              the  Consultant Coordinator Contact , 
              </p>
              <p>Event Coordinator Name : </p>
              <p>Event Coordinator Mobile : 00000-00000</p>
            </div>
            </div>
        </main>
      )
}