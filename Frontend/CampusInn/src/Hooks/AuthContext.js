import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';   
import { BASEURL } from '../api';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


// Create a context for autheuntication
export const AuthContext = createContext({
  user: null,
  isLoading: true, 
  login: (email, password, setLoading) => Promise.resolve(),
  loginManager: (email, password, setLoading) => Promise.resolve(), // Add loginManager function
  logout: () => Promise.resolve(),
  signUp: (firstName, lastName, email, phoneNumber, password, setLoading) => Promise.resolve(),
  updateUser: () => Promise.resolve(),
  error: null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
          console.log(storedUser);
        }
      } catch (err) {
        console.error('Failed to load user data', err);
      } finally {
        setIsLoading(false); // Set isLoading to false after data is loaded
      }
    };

    

    loadUserData();
  }, []);

  const login = async (email, password, setLoading) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(BASEURL + "user/login-student", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const userData = await response.json();
        Alert.alert("Success", "Login successful");
        setUser(userData);
        await AsyncStorage.setItem('user', JSON.stringify(userData));
      } else {
        const errorData = await response.json();
        Alert.alert("Error", errorData.message || "Login failed");
      }
    } catch (err) {
      Alert.alert("Error", "Login failed: " + err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };


  const loginManager = async (email, password, setLoading) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(BASEURL + "manager/login", { // Use manager-specific endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const userData = await response.json();
        Alert.alert("Success", "Login successful");
        setUser(userData);
        await AsyncStorage.setItem('user', JSON.stringify(userData));
      } else {
        const errorData = await response.json();
        Alert.alert("Error", errorData.message || "Login failed");
      }
    } catch (err) {
      Alert.alert("Error", "Login failed: " + err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const logout = () => {
    AsyncStorage.removeItem('user');
    setUser(null);
  };

  const signUp = async (firstName, lastName, email, phoneNumber, password, setLoading) => {
    setLoading(true); // Start loading
    console.log({ firstName, lastName, email, phoneNumber, password })
    try {
      const response = await fetch(BASEURL + '/api/signup', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, phoneNumber, password }),
      });
    
      if (response.ok) { 
        const userData = await response.json();
        console.log('User created successfully');
        await AsyncStorage.setItem("user", JSON.stringify(userData));
        Alert.alert("Success", "Account created successfully");
      } else {
        const errorData = await response.json();
        console.error('Error creating user:', errorData.error);
        Alert.alert("Failed", errorData.error);
      }
    } catch (error) {
      console.error('Error creating user:', error);
      Alert.alert("Error", "Network request failed. Please check your connection and try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // const resetPassword = async (email) => {
  //   try {
  //     if (email !== 'registered@example.com') {
  //       throw new Error('Email not found');
  //     }
  //     setError('Password reset link sent to your email');
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  const updateUser = async (updatedUser) => {
    try {
      // Replace with your actual API call
      const response = await fetch(`YOUR_BACKEND_UPDATE_URL/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      const data = await response.json();
      setUser(data.user);
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, signUp, updateUser, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};