import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LIGHT_COLORS, DARK_COLORS } from '../utils/constants';

export type ThemeType = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeType;
  colors: typeof LIGHT_COLORS;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeType;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'dark'
}) => {
  const [theme, setThemeState] = useState<ThemeType>(defaultTheme);

  // Load theme from AsyncStorage on mount
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('app_theme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
          setThemeState(savedTheme);
        }
      } catch (error) {
        console.error('Failed to load theme:', error);
      }
    };

    loadTheme();
  }, []);

  // Apply theme class to document when theme changes
  useEffect(() => {
    const applyTheme = async () => {
      try {
        // Save to AsyncStorage
        await AsyncStorage.setItem('app_theme', theme);

        // Apply CSS class for theme switching
        if (theme === 'dark') {
          // For React Native, we handle this differently
          // The theme context will provide the colors directly
        }
      } catch (error) {
        console.error('Failed to save theme:', error);
      }
    };

    applyTheme();
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(current => current === 'light' ? 'dark' : 'light');
  };

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  const colors = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;
  const isDark = theme === 'dark';

  const value: ThemeContextType = {
    theme,
    colors,
    isDark,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};