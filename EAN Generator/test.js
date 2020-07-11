var submitBtn = document.getElementById("submit");
var eanInput = document.getElementById("ean-input");
var barcodeOut = document.getElementById("barcode1");

var value = parseInt(eanInput.value);

submitBtn.onclick = function(){
    
    JsBarcode("#barcode1", "1234567890128");
    document.barcodeOut.reset();
}
