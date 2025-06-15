
export function FeedbackformContent() {
  return (
    <main className="feedbackformcontent">
      <div className="feedbackcontainer">
        <h1 className="feebackformheader">Feed Back Form </h1>
        <div className="feedbackforminputscontainer">
          <input type="text" className="feedbackforminputfields" placeholder="Enter Name"/>
          <input type="email" className="feedbackforminputfields" placeholder="Enter Email"/>
          <input type="text" className="feedbackforminputfields" placeholder="Enter Subject"/>
          <textarea  className="feedbackformtextarea" placeholder="Type your Feedback .."></textarea>
          <button className="feedbackformbutton">Submit</button>
        </div>
      </div>
    </main>
  );
}
