var btn = document.querySelector("#submitBtn");
var msgDiv = document.querySelector("#msg");
var milesUserInput = document.querySelector("#userMiles");
var oilUserInput = document.querySelector("#nextOil");
var sumCalc = document.querySelector("#sumOil");


//This is the function to get the user input to save to local storage
function setInput(sum) {
  var setMiles = document.querySelector("#milesInput").value;
  var setOil = document.querySelector("#oilInput").value;
  
  localStorage.setItem("milesInput", setMiles);
  localStorage.setItem("oilInput", setOil);
  localStorage.setItem("sumOil", sum)
}

//This is the function to get the user input to stay on webpage
function getInput() {
  var getMiles = localStorage.getItem("milesInput");
  var getOil = localStorage.getItem("oilInput");
  var getSum = localStorage.getItem("sumOil"); 
  
  milesUserInput.textContent = getMiles;
  oilUserInput.textContent = getOil;
  sumCalc.textContent = getSum;
}
//The equation 
function getSum() {
  var num1 = parseInt(document.querySelector("#milesInput").value);
  var num2 = parseInt(document.querySelector("#oilInput").value);
  var sumOil = document.querySelector("#sumOil");

  var sum = num1+num2;
  console.log(sum);

  sumOil.textContent = sum;
  setInput(sum);
  getInput();
}

//Once the submit button is clicked the getSum function and getInput  
btn.addEventListener("click", function(event) {
  event.preventDefault();
  getSum();
  });

getInput() 