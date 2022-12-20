var apiKey = "04a66eeb-1c3a-4bd4-8703-0567b5f60751"
// var carChargingUrl = `https://api.openchargemap.io/v3/poi/?key=${apiKey}`
var carChargingUrl = `https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&key=${apiKey}`

// function getApi(carChargingUrl) {
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
      });
//   }
//   getApi(carChargingUrl);

// for (var i = 0; i < data.length; i++) {
//     var zipCode = data[i].AddressInfo.Postcode
//     var dataObj = {
//       Address: data[i].AddressInfo.AddressLine1,
//       Name: data[i].AddressInfo.Title
//     }

//     if zipCode === ******userinput******;
//       return dataObj;
// }
      



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


