
import { View } from "react-native";
import { Alerts } from "./components/Alerts";


export default function App() {
  return (
    <View>
      <Alerts 
        color={"kkk"} 
        message={"Este mensaje esta quemado "}
        perfil={'con foto'}
      />
    </View>
  );
}