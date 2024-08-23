import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Hostel from '../../screens/Hostel';
import BookingScreen from '../../screens/BookingScreen';
import ProfileScreen from '../../screens/Pro';
import React from 'react'
import Hdetails from '../../screens/Hdetails';
import RoomScreen from '../../screens/Rooms';
import RoomTypesScreen from '../../screens/RoomCapacity';
import HostelInfo from '../../screens/HostelInfoScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Hostel"
        component={Hostel} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Book" 
        component={BookingScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile"
        component={ProfileScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  )
}

export default TabNavigator