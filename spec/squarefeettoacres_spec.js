import { experimental_LayoutConformance } from "react-native";
import { squarefeettoacres } from "../squarefeettoacres.js";

describe("squarefeettoacres", function () {

    it("converts 43560 square feet to 1 acre", function () {
        expect(squarefeettoacres(43560)).tobe(1);
    });
     it("converts 87120 square feet to 2 acre", function () {
        expect(squarefeettoacres(87120)).tobe(2);
    });
     it("converts 21780 square feet to 0.5 acre", function () {
        expect(squarefeettoacres(21780)).tobe(0.5);
    });
});