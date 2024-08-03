import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';   


// Create a context for authentication
export const AuthContext = createContext({
  user: null,
  isLoading: true, 
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  updateUser: () => Promise.resolve(),
  error: null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error('Failed to load user data', err);
      } finally {
        setIsLoading(false); // Set isLoading to false after data is loaded
      }
    };

    loadUserData();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true); // Start loading
    try {
      const response = await fetch('YOUR_BACKEND_LOGIN_API', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();   

        setUser(userData);   

        await AsyncStorage.setItem('user', JSON.stringify(userData));
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const logout = () => {
    setIsLoading(true);
    AsyncStorage.removeItem('user');
    setUser(null);
    setIsLoading(false);
  };

  const signUp = async (email, password, fullName) => {
    try {
      if (email === 'taken@example.com') {
        throw new Error('Email already exists');
      }
      const userData = { email, fullName, school: 'University of Ghana', profileImage: null };
      setUser(userData);
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const resetPassword = async (email) => {
    try {
      if (email !== 'registered@example.com') {
        throw new Error('Email not found');
      }
      setError('Password reset link sent to your email');
    } catch (err) {
      setError(err.message);
    }
  };

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
      value={{ user, isLoading, login, logout, signUp, updateUser, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};