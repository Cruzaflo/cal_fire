//Create map
var myMap = L.map("map", {
    center: [36.7783, -119.4179],
    zoom: 6
})

//add basic streets tile layer to map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Cal-Fire",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap)


//roadblock #1 solution. This code will bypass the CORS access restriction for our API url
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.fire.ca.gov/umbraco/api/IncidentApi/GeoJsonList?inactive=false"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
//per the soltuon, we must combine the proxy URL and our API url
var queryJSON = proxyurl + url



function filterByYear (features){
    var str = features.properties.Started
    var strArray = str.split("-")
    var year = Number(strArray[0])
    if (year >= 2016) {
        return true
    }
}

//define function for adding popups to each feature/marker. 
function onEachFeature (feature, layer){

    //define variables for each popup
    var fireName = feature.properties.Name
    var county = feature.properties.County
    var startDate = feature.properties.Started.split("T")[0]
    var extinguishDate = feature.properties.ExtinguishedDateOnly
    var acresBurned = feature.properties.AcresBurned
    var fireInfoUrl = feature.properties.Url

    //Use Leaflet's geoJSON bindPopup function to add HTML to popups
    layer.bindPopup(
        `<h3>Fire Name: ${fireName}</h3><hr>
        <p>County: ${county}</p>
        <p>Start Date: ${startDate}</p>
        <p>Extinguished Date: ${extinguishDate}</p>
        <p>Acres: ${acresBurned}</p>
        <a href="${fireInfoUrl}" target="_blank">More Information</a>`
    )
}


//load the queryJSON url(proxy url + our API URL)
d3.json(queryJSON, function(data){
    console.log(data)
    //create features for the map
    L.geoJSON(data.features, {
        filter: filterByYear,
        onEachFeature: onEachFeature
    }).addTo(myMap)
})


