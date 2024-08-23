import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TabNavigator from "./TabNavigator"
import BookingStackRoute from "../BookingRoute"

const Stack = createNativeStackNavigator()


export const ProtectedStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="tabroute" component={TabNavigator} />
            <Stack.Screen name="bookingroute" component={BookingStackRoute} />
        </Stack.Navigator>
    )
}