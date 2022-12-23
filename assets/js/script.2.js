var btn = document.querySelector("#submitbtn");
var msgDiv = document.querySelector("#msg");
var milesUserInput = document.querySelector("#userMiles");
var dateUserInput = document.querySelector("#userDate");
var numberUserInput = document.querySelector("#userNumber")
  

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

// function usersInput() {
//   var miles = localStorage.getItem("milesinput");

//   milesUserInput.innerHTML = miles;
// }

function setInput() {
  var miles = document.querySelector("#milesinput").value;
  var date = document.querySelector("#dateinput").value;
  var drive = document.querySelector("#driveninput").value;

  localStorage.setItem("milesInput", miles);
  localStorage.setItem("dateInput", date);
  localStorage.setItem("driveInput", drive);
  
}

function getInput() {
  var miles = localStorage.getItem("milesInput");
  var date = localStorage.getItem("dateInput");
  var drive = localStorage.getItem("driveInput");
  console.log("miles", miles);

  milesUserInput.textContent = miles;
  dateUserInput.textContent = date;
  numberUserInput.textContent = drive;

}

btn.addEventListener("click", function(event) {
  event.preventDefault();
  setInput();
  getInput();

  // var miles = document.querySelector("#milesinput").value;
  // var date = document.querySelector("#dateinput").value;
  // var drive = document.querySelector("#driveninput").value;

  // if (miles === "") {
  //   displayMessage("error" , "Must Input Number of Miles");
  // } else if (date === "") {
  //   displayMessage("error" , "Must Input Date");
  // } else if (drive === "") {
  //   displayMessage("error" , "Must Input Number of Daily Miles");
  // } else {
  //   displayMessage("success", "Good Work");

    // localStorage.setItem("milesInput", miles);
    // localStorage.setItem("dateInput", date);
    // localStorage.setItem("driveInput", drive);
    
  
   })
// });

getInput() 