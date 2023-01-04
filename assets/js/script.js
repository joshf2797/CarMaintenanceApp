//Variables that are set based off of IDs
var submit = document.getElementById('submitvin');
var submit2 = document.getElementById('submit2')
var vin = document.getElementById('vin');
var vin2 = document.getElementById('vininput2')

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
  localStorage.setItem('VIN', vinInput);
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


  submit2.addEventListener('click', function(event) {
    event.preventDefault();
    runCarApi2 ();
  });
  //Function that runs the server API based on a url with a vin stores from a user inputted VIN.  Runs the vinInfo function to store certain Key and Value pairs in an object
  function runCarApi2() {
    var vinInput2 = document.getElementById("vininput2").value;
    var carApiKey = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vinInput2}*BA?format=json`
    fetch(carApiKey, {
    })
    .then(function (response) {
      return response.json();
    })
    .then(data => {
      vinInfo(data)
    });
    localStorage.setItem('VIN', vinInput2);
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



   submit2.onclick = function () {
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];
    var vinInput2 = document.getElementById("vininput2").value;

    if(vinInput2.length !== 17) {
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


