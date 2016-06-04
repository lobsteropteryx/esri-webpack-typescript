import Graphic = require("esri/graphic");

export class MyClass {
    constructor(public someProperty: string) {
        const graphic = new Graphic();
    }
}