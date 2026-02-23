import { Text, View } from "react-native";
import { airquality } from "../airquality.js";

export function airquality({ aqi }) {

    let result = airquality(aqi);

    return (
        <View>
            <Text>
                AQI {aqi}: {result}
            </Text>
        </View>
    );
}