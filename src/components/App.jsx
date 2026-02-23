import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { squarefeettoacres } from "./squarefeettoacres.jsx";
import { lawnmowing } from "./lawnmowing.jsx";
import { airquality } from "./airquality.jsx";
import { yeeHa } from "./yeeha.jsx";
import { View } from 'react-native';
import { Slope } from './Slope.jsx';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <squarefeettoacres squarefeet={43560} />
      <squarefeettoacres squarefeet={87120} />
      <squarefeettoacres squarefeet={21780} />
      <lawnmowing width={10} length={10} rate={5} />
      <lawnmowing width={20} length={15} rate={10} />
      <lawnmowing width={30} length={20} rate={10} />
      <airquality aqi={30} />
      <airquality aqi={70} />
      <airquality aqi={120} />
      <airquality aqi={175} />
      <airquality aqi={250} />
      <airquality aqi={350} />
      <yeeHa number={9} />
      <yeeHa number={14} />
      <yeeHa number={21} />
      <yeeHa number={10} />
      <Slope x1={0} y1={0} x2={2} y2={2} />
      <Slope x1={0} y1={2} x2={2} y2={0} />
      <Slope x1={1} y1={3} x2={5} y2={3} />
    </View>
  );
}

