import Graphic = require("esri/Graphic");

export class MyClass {
    constructor(public someProperty: string) {
        const graphic = new Graphic();
    }
}