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
  .then(function (data) {
    console.log(data);
    console.log(data.results.value)
  });


    localStorage.setItem('VIN', vinInput)
  
  })

  vin.value = localStorage.getItem('VIN')



