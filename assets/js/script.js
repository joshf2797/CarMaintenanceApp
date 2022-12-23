//Variables that are set based off of IDs
var submit = document.getElementById('submitvin');
var vin = document.getElementById('vin');

//Event Listener on a click that runs the runCarApi Function
submit.addEventListener('click', function(event) {
  event.preventDefault();
  runCarApi ();
});

//Function that runs the server API based on a url with a vin stores from a user inputted VIN.  Runs the vinInfo function to store certain Key and Value pairs in an object
function runCarApi() {
  var vinInput = document.getElementById("vininput").value;
  var carApiKey = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vinInput}*BA?format=json`
  fetch(carApiKey, {
  })
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    vinInfo(data)
  });
};

//Function that saves the API data in an object.  Funs the addVinInfo Function
function vinInfo(data) {
  var vinData = {
    year: data.Results[10].Value,
    make: data.Results[7].Value,
    model: data.Results[9].Value,
    body: data.Results[23].Value,
    engine: data.Results[70].Value,
    trans: data.Results[49].Value,
    gas: data.Results[77].Value
  }
  addVinInfo(vinData)
};

//Function that add's the VIN object to certain HTML fields for the user to see
function addVinInfo (vinData) {
  document.getElementById('year').innerHTML = 'Year: ' + vinData.year
  document.getElementById('make').innerHTML = 'Make: ' + vinData.make
  document.getElementById('model').innerHTML = 'Model: ' + vinData.model
  document.getElementById('body').innerHTML = 'Body Style: ' + vinData.body
  document.getElementById('engine').innerHTML = 'Engine Cylinders: ' + vinData.engine
  document.getElementById('trans').innerHTML = 'Transmission Type: ' + vinData.trans
  document.getElementById('gas').innerHTML = 'Gas Type: ' + vinData.gas
};

//Saves the inputted VIN in local storage
localStorage.setItem('VIN', vinInput);

//Applies a modal on a click function to show a popup if the entered VIN is not 17 characters
  submit.onclick = function () {
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];
    var vinInput = document.getElementById("vininput").value;

    if(vinInput.length !== 17) {
      modal.style.display = "block";
    }

    span.onclick = function() {
      modal.style.display = "none";
  }
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


