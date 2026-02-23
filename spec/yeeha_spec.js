import { yeeHa } from "../src/components/yeeha.jsx";

describe("yeeHa", function () {

    It("returns ye when divisible by 3", function () {
        expect(yeeHa(9)).toBe("Yee");
    });
    it("returns ha when divisible by 7", function () {
        expect(yeeHa(14)).toBe("Ha");
    });
    it("returns yee ha when divisible by both 3 and 7", function () {
        expect(yeeHa(21)).toBe("Yeeha");
    });
        it("returns nada when divisible by neither", function () {
            expect(yeeHa(10)).toBe("nada");
        });
    });