import { isObject, add } from "../../../src/utils/func";

describe("unit tests", () => {
    it("adds two numbers", () => {
        expect(add(2, 3)).to.equal(5);
    });

    it("checks for object", () => {
        expect(isObject({}), "{}").to.be.true;
        expect(isObject([]), "[]").to.be.true;
    });
});
