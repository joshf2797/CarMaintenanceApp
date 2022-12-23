var apiKey = "04a66eeb-1c3a-4bd4-8703-0567b5f60751"
// var carChargingUrl = `https://api.openchargemap.io/v3/poi/?key=${apiKey}`
var carChargingUrl = `https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=1000&key=${apiKey}`

function compareZip() {
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
        // Make sure to look at the response in the console and read how 404 response is structured.
        console.log(data);
        console.log(data[4].AddressInfo.Postcode);
        zipCompareCycle (data)
      })
    };

function zipCompareCycle(data) {
  var userZip = document.getElementById("zipInput").value;
  for (var i = 0; i < data.length; i++) {
      var zipCode = data[i].AddressInfo.Postcode
      var dataObj = {
      address: data[i].AddressInfo.AddressLine1,
      name: data[i].AddressInfo.Title,
      zip: data[i].AddressInfo.Postcode
      }
      if (zipCode == userZip) {
          console.log(dataObj)
          addText (dataObj);
          return
      }
      else {
        displayZip.innerHTML = "No Results Found"
        displayAddress.innerHTML = ""
        displayTitle.innerHTML = ""
      }
  }
}
var cycleZip = document.querySelector(".submitZip");
cycleZip.addEventListener("click", function() {
  compareZip ()
});
var displayZip = document.querySelector("#enteredZip");
var displayAddress = document.querySelector("#enteredAddress");
var displayTitle = document.querySelector("#enteredTitle");
function addText (dataObj) {
  displayZip.innerHTML = dataObj.zip
  displayAddress.innerHTML = dataObj.address
  displayTitle.innerHTML = dataObj.name
}

