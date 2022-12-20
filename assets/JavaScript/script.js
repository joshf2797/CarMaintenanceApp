var vinInput = document.getElementById("vininput")

var carApiKey = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vinInput}*BA?format=json`
fetch(carApiKey, {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Make sure to look at the response in the console and read how 404 response is structured.
    console.log(data);
  });

  var submit = document.getElementById('submitvin')

  submit.addEventListener('click', function(event) {
    event.preventDefault()
    vinInput.value(localStorage.getItem)
  })

