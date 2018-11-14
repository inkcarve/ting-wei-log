import html2canvas from "html2canvas";
// import * as jsPDF from "jspdf";

    const jsPDF = require("jspdf");



export interface config{
    id:string,
    quality:number,
    filename:string,
}

export  function  html2pdf (config:config) {
  const filename  = config.filename;

  html2canvas(document.querySelector(config.id), 
              {scale: config.quality}
           ).then(canvas => {
    let pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
    pdf.save(filename);
  });
}