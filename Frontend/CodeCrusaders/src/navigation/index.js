import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';


const Stack = createNativeStackNavigator();

function RootNavigation() {
    return (
    <NavigationContainer>
    <Stack.Navigator initialRoutName= "Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

export default RootNavigation;