import { NavigationContainer } from '@react-navigation/native';
import { ProtectedStack } from './ProtectRoute';
import { AuthStack } from './AuthRoute';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../Hooks/AuthContext';
import { useContext } from 'react';

const Stack = createNativeStackNavigator()

function RootNavigation() {
  const {user} = useContext(AuthContext)
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
       {!user?._id ? <Stack.Screen name="auth" component={AuthStack} /> : <Stack.Screen name='protected' component={ProtectedStack}/>}
       
      </Stack.Navigator>
      

);
}

export default RootNavigation;