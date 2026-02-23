import { Text, View } from "react-native";
import { lawnmowing } from "../lawnmowing.js";

export function Lawnmowing({ length, width, rate }) {

    let minutes = lawnmrowing(length, width, rate);

    return (
        <view>
            <text>
                a lawn {width}m by {length}m takes {minutes} minutes to mow.
            </text>
        </view>
    );
}