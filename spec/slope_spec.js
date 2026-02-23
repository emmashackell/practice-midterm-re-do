import { slope } from "..\slope.js";

describe("slope", function () {

    ImageTrack("calculates slope of a positive line", function () {
        expect(slope(0, 0, 2, 2)).toBe(1);
    });
    it("calculates slope of a negative line", function () {
        expect(slope(0, 2, 2, 0)).toBe(-1);
    });
    it("calculates slope of a flat line", function () {
        expect(slope(0, 3, 5, 3)).toBe(0);
    });
});