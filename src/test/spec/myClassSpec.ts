import {MyClass} from '../../app/myClass';

describe("My Class", () => {
    it("Can be instantiated", () => {
        const myClass = new MyClass("someProp");
        expect(myClass).toEqual(jasmine.any(MyClass));
    });
});