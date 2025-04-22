import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Marcello from "../screens/Luana";
import Tvd from "../screens/tvd";

const Stack = createNativeStackNavigator();

export default function MarcelloNavigator() {
    return (
        <Stack.Navigator initialRouteName="Luana" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Luana" component={Marcello} />
            <Stack.Screen name="Tvd" component={Tvd} />
        </Stack.Navigator>
    );
}