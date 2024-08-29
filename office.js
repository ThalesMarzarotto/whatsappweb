var XLSX = require("xlsx");
var workbook = XLSX.readFile("telefones.ods");
var ws = workbook.Sheets["Sheet1"]









for (let i = 1; i < 250; i++) {
    console.log(ws["B"+i].v);
    

}

