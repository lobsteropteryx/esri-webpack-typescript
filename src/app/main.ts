import * as Map from "esri/Map";
import * as MapView from "esri/views/MapView";

var map = new Map({
    basemap: "streets"
});
var view = new MapView({
    container: "content",
    map: map,
    zoom: 4,
    center: [0, 45]
});
