// Store our API endpoint as queryUrl
var queryUrl = "https://www.fire.ca.gov/umbraco/api/IncidentApi/GeoJsonList?inactive=false.geojson";
https://opendata.arcgis.com/datasets/4fb94e78686d4932ac71bbe561e7cb9b_0.geojson
d3.json(queryUrl, function (data){
  console.log(data)
})

// //query geojson data 
// d3.json(queryUrl, function(data){
//   function onEachFeature (feature, layer){
//     layer.bindPopup(`<h3>${feature.properties.Name}</h3><hr><p>${new Date(feature.properties.AcresBurned)}</p>`)
//   }

//   var geoFeatures = data.features
//   var earthquakes = L.geoJSON(geoFeatures,{
//     onEachFeature: onEachFeature
//   })

//   createMap(earthquakes)
// })

// function createMap(earthquakes) {
//   var overlayMaps = {
//     Earthquakes: earthquakes
//   }

//   var streetMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg?access_token={accessToken}", {
//     attribution: "cruzaflo",
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken: API_KEY
//   })

//   var baseMaps = {
//     TheMAin: streetMap
//   }

//   var myMap = L.map("map", {
//     center: [37.09, -95.71],
//     zoom: 5,
//     layers: [streetMap, earthquakes]
//   })

//   L.control.layers(baseMaps, overlayMaps).addTo(myMap)

// }

