const billAmount = document.getElementById("billAmount");
const range      = document.getElementById("tipRange");
const percentOut = document.getElementById("percentOut");
const resultArea = document.getElementById("billresultEnter"); 
const calcButton = document.getElementById("calcButton");

range.oninput = function(){
    percentOut.innerHTML = range.value + "%";
}

calcButton.onclick = function(){
    let theBill = parseFloat(billAmount.value);
    let theTip = (theBill *(range.value/100)).toFixed(2);
    let theTotal = (theBill + parseFloat(theTip)).toFixed(2);
    let out = `<strong> Tip Amount: </strong> $${theTip}<br/>
<strong>Total Bill:</strong> $${theTotal}`;
resultArea.innerHTML = out;

}