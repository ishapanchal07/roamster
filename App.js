import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./src/navigation/BottomTabs";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "props.pointerEvents is deprecated",
  "Cannot record touch end without a touch start",
]);


export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
