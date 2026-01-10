import './src/global.css';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { useUserStore } from './src/stores';

export default function App() {
  const { loadUser } = useUserStore();

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <SafeAreaProvider>
        <AppNavigator />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
