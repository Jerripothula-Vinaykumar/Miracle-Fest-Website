
export function CertificateDownloadContent() {
  return (
    <main className="certificatedownloadcontent">
      <div className="certificatedownloadheader"> Here is your Certificate , user</div>
      <div className="certificatedownloadbox">

       <div className="samplecertificate">
        Preview of Certificate
        </div>
        <button type="download" className="downloadcertificatebutton">Download Certificate</button>
        </div>
    </main>
  );
}