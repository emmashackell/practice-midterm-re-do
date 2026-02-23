import { lawnmowing } from "../src/lawnmowing.js";

describe("lawn mowing", function () {
    it("calculates time for small lawn", function () {
        expect(lawnmowing(10, 10, 5)).toBe(20);
    });

    it("calculates time for medium lawn", function () {
        expect(lawnmowing(10, 15, 10)).toBe(30);
    });
    it("calculates time for large lawn", function () {
        expect(lawnmowing(30, 20, 10)).toBe(60);
    });
});