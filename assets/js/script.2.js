var btn = document.querySelector("#submitbtn");
var msgDiv = document.querySelector("#msg");


function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

btn.addEventListener("click", function(event) {
  event.preventDefault();

  var miles = document.querySelector("#milesinput").value;
  var date = document.querySelector("#dateinput").value;
  var drive = document.querySelector("#driveninput").value;

  if (miles === "") {
    displayMessage("error" , "Must Input Number of Miles");
  } else if (date === "") {
    displayMessage("error" , "Must Input Date");
  } else if (drive === "") {
    displayMessage("error" , "Must Input Number of Daily Miles");
  } else {
    displayMessage("success", "Good Work");

    localStorage.setItem("milesInput", miles);
    localStorage.setItem("dateInput", date);
    localStorage.setItem("driveInput", drive);

   }
}
);
