// var miles = document.querySelector("#milesinput");
// var date = document.querySelector("#dateinput");
// var drive = document.querySelector("#driveninput");
var btn = document.querySelector("#submitbtn");
var msgDiv = document.querySelector("#msg");




// renderLastRegistered();

// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute("class", type);
// }

// function renderLastRegistered() {
//   var email = localStorage.getItem("email");
//   var password = localStorage.getItem("password");

//   if (!email || !password) {
//     return;
//   }

//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }

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
    displayMessage("error" , "Cannot be blank");
  } else if (date === "") {
    displayMessage("error" , "Cannot be blank");
  } else if (drive === "") {
    displayMessage("error" , "Cannot be blank");
  } else {
    displayMessage("success", "Good Work");

    localStorage.setItem("milesInput", miles);
    localStorage.setItem("dateInput", date);
    localStorage.setItem("driveInputd", drive );

   }
}
);
