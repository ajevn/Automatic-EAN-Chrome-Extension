var submitBtn = document.getElementById("submit");
var eanInput = document.getElementById("ean-input");
var barcodeOut = document.getElementById("barcode1");

eanInput.onkeyup  = function createEan(){
        
    JsBarcode("#barcode1", parseInt(eanInput.value), {
        format:"EAN13",
			  displayValue:true,
			  fontSize:24,
			  lineColor: "black"
    });
    document.getElementById("ean-input").submit();

}





0190199221147
