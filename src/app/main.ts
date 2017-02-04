import * as Map from "esri/Map";
import * as MapView from "esri/views/MapView";

const map = new Map({
    basemap: "streets"
});

const view = new MapView({
    container: "content",
    map: map,
    zoom: 4,
    center: [0, 45]
});
