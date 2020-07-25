setTimeout(function main(){
  
var submitBtn = document.getElementById("submit");
var barcodeOut = document.getElementById("barcode1");
var grabDom = document.getElementById("misc-info");
var newDiv = document.createElement("div");

//var grabEan = document.querySelector("any-3-4 S-1-2")[0];
var grabEan = document.querySelectorAll("any-3-4 S-1-2")[0];

newDiv.innerHTML = `

  <img id="barcode1">
  <h1>EAN goes here </h1>

`;


grabDom.appendChild(newDiv);

alert(grabEan.nodeName);

var eanFill = 303005014999;

JsBarcode("#barcode1", eanFill, {
    format:"EAN13",
			  displayValue:true,
			  fontSize:24,
			  lineColor: "black"
});

}, 3000);








