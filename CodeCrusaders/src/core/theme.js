import { DefaultTheme } from 'react-native-paper';

// Define your custom colors (replace with hex codes from your image)
const COLORS = {
  darkBlue: '#11b9e8',  
  mediumBlue1: '#3572ef',
  mediumBlue2: '#39bef9',
  lightBlue1: '#3bbdf8',
  lightBlue2: '#94C8FF',
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.darkBlue,         // Main accent color
    accent: COLORS.lightBlue1,        // Secondary accent
    background: COLORS.lightBlue2,    // Backgrounds
    surface: 'white',             // Surfaces (cards, etc.)
               
    placeholder: COLORS.mediumBlue1, // Input placeholders
    disabled: COLORS.mediumBlue2,   // Disabled elements
    error: '#f13a59',              // Keep the existing error color
  },
};
