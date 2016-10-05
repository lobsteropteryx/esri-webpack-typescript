# esri-webpack-typescript

ESRI JSAPI with Webpack demo, using TypeScript

Generates separate app and vendor bundles via webpack, while pulling in the ESRI JSAPI and dojo via CDN.

Uses TypeScript compiler and test setup using karma.

## Running the demo

```
npm install
typings install
npm run build
npm run test
```

NOTE: you will need to have first installed `typings` globally with `npm i -g typings`.

## How it works

The approach demonstrated here uses Webpack to bundle your application code 
while [excluding the modules](webapck.config.js#L43-57) from the [ArcGIS API for JavaScript], which is [loaded from a CDN via a script tag](src/app/index.html#L20). 
The [Dojo loader] that is included in the [ArcGIS API for JavaScript] is then used to [load Webpack's bundled output via a `require()` statement](src/app/index.html#L26).

## Why do it this way?

The reason for taking this unconventional and roundabout approach is that the [ArcGIS API for JavaScript] is built with Dojo.
Because Dojo implements the [AMD specification](https://en.wikipedia.org/wiki/Asynchronous_module_definition) diffently than other module loaders, 
the only reliable way to load Dojo AMD modules is to use the Dojo loader.

### What about [dojo-webpack-loader]?
There is a Webpack loader for Dojo modules, [dojo-webpack-loader], but [it currently doesn't work with the ArcGIS API for JavaScript](https://github.com/Nordth/dojo-webpack-loader/issues/7), 

[ArcGIS API for JavaScript]:https://developers.arcgis.com/javascript/
[dojo-webpack-loader]:https://github.com/Nordth/dojo-webpack-loader/
[Dojo loader]:https://dojotoolkit.org/reference-guide/1.10/loader/
[dojo-webpack-loader examples]:https://github.com/Nordth/dojo-webpack-loader-examples