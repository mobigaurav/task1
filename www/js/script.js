
document.getElementById("bt").addEventListener("click", calculateValue);

function calculateValue() {
let lbl = document.getElementById('lblCalculated');
let enteredValue = document.getElementById('numentered').value;
if(!enteredValue){
alert('Please enter a value');
return;
}
cordova.plugins.Multiplier.getValue(enteredValue, function(response){
   lbl.innerText = response;
})
}
