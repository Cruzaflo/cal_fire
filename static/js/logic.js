
//roadblock #1 solution. This will bypass the CORS access restriction for our API url
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const APIurl = "https://www.fire.ca.gov/umbraco/api/IncidentApi/GeoJsonList?inactive=false";
//per the soltuon, we must combine the proxy URL and our API url
var queryJSON = proxyurl + APIurl

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
    var overlayMaps = {}
    var years = [2016, 2017, 2018, 2019, 2020]
    //create features for the map
    years.forEach(function (syear){
        function filterByYear (feature){
            var str = feature.properties.Started
            var strArray = str.split("-")
            var year = Number(strArray[0])
            if (year === syear) {
                return true
            }
        }

        var layerGroup = L.geoJSON(data.features, {
            filter: filterByYear,
            onEachFeature: onEachFeature
        })
        
        overlayMaps[`${syear}`] = layerGroup
    })

    //streets tile layer variable
    var streetMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Cal-Fire",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  })

//Create map adding the street map and the 2020 features as default layers
    var myMap = L.map("map", {
        center: [36.7783, -119.4179],
        zoom: 6,
        layers: [streetMap, overlayMaps["2020"]]
    })

    L.control.layers(overlayMaps).addTo(myMap)
})

