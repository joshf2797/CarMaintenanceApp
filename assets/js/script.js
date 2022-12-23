var submit = document.getElementById('submitvin');
var vin = document.getElementById('vin');


submit.addEventListener('click', function(event) {
  var vinInput = document.getElementById("vininput").value;
  var carApiKey = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vinInput}*BA?format=json`

  event.preventDefault()
  fetch(carApiKey, {
  })
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    console.log('year:', data.Results[10].Value)
    console.log('make:', data.Results[7].Value)
    console.log('model:', data.Results[9].Value)
    console.log('body:', data.Results[23].Value)
    console.log('engine:', data.Results[70].Value)
    console.log('trans:', data.Results[49].Value)
    console.log('gas:', data.Results[77].Value)
    vinInfo(data)
  });
  
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
  }
 
function addVinInfo (vinData) {
  document.getElementById('year').innerHTML = 'Year: ' + vinData.year
  document.getElementById('make').innerHTML = 'Make: ' + vinData.make
  document.getElementById('model').innerHTML = 'Model: ' + vinData.model
  document.getElementById('body').innerHTML = 'Body Style: ' + vinData.body
  document.getElementById('engine').innerHTML = 'Engine Cylinders: ' + vinData.engine
  document.getElementById('trans').innerHTML = 'Transmission Type: ' + vinData.trans
  document.getElementById('gas').innerHTML = 'Gas Type: ' + vinData.gas

}
  

  localStorage.setItem('VIN', vinInput)
  })

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


