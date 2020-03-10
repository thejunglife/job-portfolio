import React, { useState } from 'react'
import resume from '../../assets/images/RESUME.pdf'
import './resume.css'
// import { Document, Page, pdfjs } from 'react-pdf/dist/entry.parcel';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {

  // const istyle = {
  //   height: "100%",
  //   width: "100%"
  // }
  const divStyle ={
    height: "800px",
    width: "100%"
  }
  
  const [resumeState, setResumeState] = useState({
    numPages: null,
    pageNumber: 1
  })

  resumeState.onDocumentLoadSuccess = (numPages)  => {
    setResumeState({ numPages })
  }
// temp fix 
  return(
    <div>
    <h1 className="resumeTitle">RESUME</h1>
    <iframe title="resumeFrame" src={resume} style={divStyle} />
    </div>
  )
}

export default Resume
      // <Document file={resume} onLoadSuccess={resumeState.onDocumentLoadSuccess}>
      // <Page pageNumber={resumeState.pageNumber} />
      // </Document>