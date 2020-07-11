var submitBtn = document.getElementById("submit");
var barcodeOut = document.getElementById("barcode1");
var grabDom = document.getElementById("misc-info");
var newDiv = document.createElement("div");
var grabEan = document.getElementsByClassName("any-3-4 S-1-2")

newDiv.innerHTML = `

  <img id="barcode1">
  <h1>EAN goes here </h1>

`;

grabDom.appendChild(newDiv);

JsBarcode("#barcode1", "3030050149845", {
    format:"EAN13",
			  displayValue:true,
			  fontSize:24,
			  lineColor: "black"
});





