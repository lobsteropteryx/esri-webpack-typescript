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
That may or may not be due to the fact that [it appears to have skimped on the implementation of the i18n plugin](https://github.com/Nordth/dojo-webpack-loader/issues/6).

Even once someone fixes the above issues there would be a few reasons why it might not want to do use that approach, 
at least not until the issues below have been worked out.

Dojo's AMD architecture encourages writing large libraries out of many small modules. To strike a balance between the number and size of script requests,
Dojo encourages using their build tool to bundle the modules into "layers" 
that include only the primary modules needed by your application. Other modules not included in the build layers 
will be loaded asynchronously as needed. Someone would have to figure out how to 
do the equivalent with Webpack.

For another thing, look at the webpack output from the [dojo-webpack-loader examples]. 
The word "webpack" appears 659 times in [dgrid_02_stores.bundle.js](https://rawgit.com/Nordth/dojo-webpack-loader-examples/master/bundle/dgrid_02_stores.bundle.js). 
Sure, that output has not been optimized, but even once it is, it's hard to imagine it being any smaller than the output of a Dojo build 
(which is plenty large enough as it is).

Finally, Dojo builds of the [ArcGIS API for JavaScript] typically take around 90 seconds to complete due to the large number of files.
Someone will have to figure out how to configure Webpack to avoid doing that everytime you save one of your application files.

In short, there's more work to do before loading and bundling the [ArcGIS API for JavaScript] modules via Webpack
is a viable alternative to the approach demonstrated by this repository.

FYI - This pattern also [works with Rollup](https://github.com/tomwayson/esri-rollup-example) as well as Webpack.

[ArcGIS API for JavaScript]:https://developers.arcgis.com/javascript/
[dojo-webpack-loader]:https://github.com/Nordth/dojo-webpack-loader/
[Dojo loader]:https://dojotoolkit.org/reference-guide/1.10/loader/
[dojo-webpack-loader examples]:https://github.com/Nordth/dojo-webpack-loader-examples