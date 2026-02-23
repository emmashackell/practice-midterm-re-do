import { Text, View } from "react-native";
import { yeeHa } from "../yeeha.js";

// input number
export function yeeHa({ number }) {
    let result = yeeHa(number);

    return (
        <View>
            <Text>
                yeeHa({number}) returned {result}
            </Text>
        </View>
    );
}
    