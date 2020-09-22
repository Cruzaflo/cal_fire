//geoJSON data URL
var queryUrl = "https://opendata.arcgis.com/datasets/4fb94e78686d4932ac71bbe561e7cb9b_0.geojson"

//Create map
var myMap = L.map("map", {
    center: [36.7783, -119.4179],
    zoom: 6
})

//add tile layer to map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Cal-Fire",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap)

d3.json(queryUrl, function(data){
    //create features for the map based on the data features
    console.log(data)
    L.geoJSON(data.features).addTo(myMap)
})


