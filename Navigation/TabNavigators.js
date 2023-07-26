import { View } from "react-native";
import Restroom from "../pages/Restroom";
import AlertScreen from "../pages/AlertScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tabs = createMaterialTopTabNavigator();

export default function TabNavigators() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Restroom" component={Restroom} />
      <Tabs.Screen name="AlertScreen" component={AlertScreen} />
    </Tabs.Navigator>
  );
}
