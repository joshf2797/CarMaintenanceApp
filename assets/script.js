
var carApiKey = "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/KNDEU2AA8P7376119*BA?format=json&modelyear=2023"
fetch(carApiKey, {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Make sure to look at the response in the console and read how 404 response is structured.
    console.log(data);
  });

  
if(screen.width < 485) {
    document.getElementById("vinrelocation").style.display = "block";
}


