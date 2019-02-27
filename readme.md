# esri-webpack-typescript

**UPDATE**: This technique demonstrated in this repository will work, but you should probably use either:
- the newer [@arcgis/webpack-plugin](https://github.com/Esri/arcgis-webpack-plugin) with the ArcGIS API v4.7+
- or [esri-loader](https://github.com/Esri/esri-loader/) with the ArcGIS API v3.x - v4.6

Read this [blog post](https://community.esri.com/people/TWayson-esristaff/blog/2018/05/10/arcgiswebpack-plugin-vs-esri-loader) for more information.

ESRI JSAPI with Webpack demo, using TypeScript

Generates separate app and vendor bundles via webpack, while pulling in the ESRI JSAPI and dojo via CDN.

Uses TypeScript compiler and test setup using karma.

```
npm install
npm start
npm test
```
