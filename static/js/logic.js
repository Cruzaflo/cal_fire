// Store our API endpoint as queryUrl
//var queryUrl = "https://opendata.arcgis.com/datasets/4fb94e78686d4932ac71bbe561e7cb9b_0.geojson";

// var myMap = L.map("map", {
//   center: [37.6688, -122.0810],
//   zoom: 5
// })

// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg?access_token={accessToken}", {
//   attribution: "cruzaflo",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(myMap)

var myMap = L.map("map", {
  center: [37.6688, -122.0810],
  zoom: 13
})

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data $copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap)



//d3.json(queryUrl, function (data){
//   console.log(data)
//   var myMap = L.map("map", {
//     center: [37.09, -95.71],
//     zoom: 5
//   })

//   L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg?access_token={accessToken}", {
//     attribution: "cruzaflo",
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken: API_KEY
//   }).addTo(myMap)

//   L.geoJSON(data.features).addTo(myMap)
// })

//query geojson data 
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

