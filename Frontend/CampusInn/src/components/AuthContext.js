import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  signUp: () => {},
  resetPassword: () => {},
  updateUser: () => {},
  error: null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
      }
    };

    loadUserData();
  }, []);

  const login = async (email, password) => {
    try {
      if (email === 'test@example.com' && password === 'password123') {
        const userData = { email, fullName: 'John Doe', school: 'University of Ghana', profileImage: null };
        setUser(userData);
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        setError(null);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
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
      setUser(updatedUser);
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      setError(null);
    } catch (err) {
      setError('Failed to update user');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp, resetPassword, updateUser, error }}>
      {children}
    </AuthContext.Provider>
  );
};
