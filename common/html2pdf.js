import html2canvas from "html2canvas";
var jsPDF = require("jspdf");
export function html2pdf(config) {
    var filename = config.filename;
    html2canvas(document.querySelector(config.id), { scale: config.quality }).then(function (canvas) {
        var pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
        pdf.save(filename);
    });
}
//# sourceMappingURL=html2pdf.js.map