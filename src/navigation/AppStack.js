import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Trips from "../screens/Trips";
import TripDetail from "../screens/TripDetail";
import Wardrobe from "../screens/Wardrobe";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      {/* Main Tabs */}
      <Stack.Screen name="MainTabs" component={BottomTabs} />

      {/* Trip Flow */}
      <Stack.Screen name="Trips" component={Trips} />
      <Stack.Screen name="TripDetail" component={TripDetail} />
      <Stack.Screen name="Wardrobe" component={Wardrobe} />

    </Stack.Navigator>
  );
}