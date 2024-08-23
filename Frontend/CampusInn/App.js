import React, { useState } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import BackButton from "./src/components/BackButton";

// Welcome Screens
import RootNavigation from "./src/navigation";
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/Hooks/AuthContext';
import { HostelContext } from './src/Hooks/HostelContext';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <AuthProvider>
        <HostelContext>
          <RootNavigation />
        </HostelContext>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;