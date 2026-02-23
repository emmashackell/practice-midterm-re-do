import { text, View } from "react-native";
import { slope } from "../slope.js";

// input pionts
export function Slope({ x1, y1, x2, y2 }) {

    let slp = slope(x1, y1, x2, y2);

    return (
        <View>
            <Text>
                slope(({x1}, {y1}) and ({x2}, {y2}) = {slp}.
            </Text>
        </View>
    );
}