import { text, view } from "react-native";
import { squarefeettoacres } from "../squarefeettoacres.js";

// input square feet
export function sqaurefeettoacres ({ squarefeet }) {

    let acres = squarefeettoacres(squarefeet);

    return (
        <view>
            <text>
                {squarefeet} square feet equals {acres} acres
            </text>
        </view>
    );
}