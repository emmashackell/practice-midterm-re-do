import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { squarefeettoacres } from "./squarefeettoacres.jsx";
import {
  View,
} from 'react-native';

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
    </View>
  );
}

