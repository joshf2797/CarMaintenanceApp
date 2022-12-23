// api key for our account
var apiKey = "04a66eeb-1c3a-4bd4-8703-0567b5f60751";
// link to the api we are fetching data from with the api key within it
var carChargingUrl = `https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=1000&key=${apiKey}`;
// variable called cycleZip that is set to the submitZip class
var cycleZip = document.querySelector(".submitZip");
// variable called displayZip that is set to the enteredZip ID
var displayZip = document.querySelector("#enteredZip");
// variable called displayAddress that is set to the enteredAddress ID
var displayAddress = document.querySelector("#enteredAddress");
// variable called displayTitle that is set to the enteredTitle ID
var displayTitle = document.querySelector("#enteredTitle");

// funtion that pulls the data from the api and returns the response in json.  Then runs the zipCompare function
function runApi() {
    fetch(carChargingUrl, {
        mode: "cors", 
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        zipCompare (data)
      });
};

//function that compares the user entered zip with the data from the API
function zipCompare(data) {
  var userZip = document.getElementById("zipInput").value;
  //for loop that runs the each object in the data and stores them in objects with three key-value pairs
  for (var i = 0; i < data.length; i++) {
      var zipCode = data[i].AddressInfo.Postcode
      var dataObj = {
      address: data[i].AddressInfo.AddressLine1,
      name: data[i].AddressInfo.Title,
      zip: data[i].AddressInfo.Postcode
      };
      //If statement to compare the entered Zipcode from the user with the zip codes from the API.  Runs the addText function if there is a match and exits the loop
      if (zipCode == userZip) {
          addText (dataObj);
          return
      }

      else {
        displayZip.innerHTML = "No Results Found"
        displayAddress.innerHTML = ""
        displayTitle.innerHTML = ""
      }
  };
};

//Event listener on a click to run the runApi Function
cycleZip.addEventListener("click", function() {
  runApi ()
});

//Function to add text to the HTML to display the zip code, address, and name of the charging location if it matches the user inputted zipcode
function addText (dataObj) {
  displayZip.innerHTML = dataObj.zip
  displayAddress.innerHTML = dataObj.address
  displayTitle.innerHTML = dataObj.name
};

