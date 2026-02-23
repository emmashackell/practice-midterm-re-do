import { airquality } from '../airquality.js';

describe("air quality", function () {

    it("returns good", function () {
        expect(airquality(30)).toBe("good");
    });
    it("returns moderate", function () {
        expect(airquality(75)).toBe("moderate");
    });
    it("returns unhealthy for sensitive groups", function () {
        expect(airquality(120)).toBe("unhealthy for sensitive groups");
    });
    it("returns unhealthy", function () {
        expect(airquality(175)).toBe("unhealthy");
    });
    it("returns very unhealthy", function () {
        expect(airquality(250)).toBe("very unhealthy");
    });
    it("returns hazardous", function () {
        expect(airquality(350)).toBe("hazardous");
    });
});