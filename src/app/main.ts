// for some reason when using esri and dojo modules in TypeScript
// you have to use this `import x = require('esri/x');` syntax
// instead of `import x from 'esri/x';` - I have no idea why
import Map = require("esri/map");

var map = new Map("content", {basemap: "streets"});

