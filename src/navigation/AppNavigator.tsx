import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Screens
import EventsListScreen from '../screens/Browse/EventsListScreen';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
import MapScreen from '../screens/Map/MapScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import MoreScreen from '../screens/More/MoreScreen';
import MyTicketsScreen from '../screens/Tickets/MyTicketsScreen';
import TicketDetailScreen from '../screens/Tickets/TicketDetailScreen';

// Constants
import { COLORS } from '../utils/constants';

// Tab Navigator
const Tab = createBottomTabNavigator();

// Stack Navigator
const Stack = createStackNavigator();

// Browse Stack
const BrowseStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen
      name="EventsList"
      component={EventsListScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

// Favorites Stack
const FavoritesStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen
      name="FavoritesList"
      component={FavoritesScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

// Tickets Stack
const TicketsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen
      name="MyTickets"
      component={MyTicketsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TicketDetail"
      component={TicketDetailScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

// Map Stack
const MapStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen
      name="MapView"
      component={MapScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

// Profile Stack
const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen
      name="ProfileView"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

// More Stack
const MoreStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen
      name="MoreView"
      component={MoreScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

// Main Tab Navigator
const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;
            
            switch (route.name) {
              case 'Browse':
                iconName = focused ? 'search' : 'search-outline';
                break;
              case 'Favorites':
                iconName = focused ? 'heart' : 'heart-outline';
                break;
              case 'Map':
                iconName = focused ? 'map' : 'map-outline';
                break;
              case 'Profile':
                iconName = focused ? 'person' : 'person-outline';
                break;
              case 'My Tickets':
                iconName = focused ? 'ticket' : 'ticket-outline';
                break;
              case 'More':
                iconName = focused ? 'ellipsis-vertical' : 'ellipsis-horizontal';
                break;
              default:
                iconName = 'help-outline';
            }
            
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.textSecondary,
          tabBarStyle: {
            backgroundColor: COLORS.white,
            borderTopWidth: 1,
            borderTopColor: COLORS.divider,
            height: 60,
            paddingBottom: 8,
            paddingTop: 8
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '500' as const
          }
        })}
      >
        <Tab.Screen
          name="Browse"
          component={BrowseStack}
          options={{ tabBarLabel: 'Browse' }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{ tabBarLabel: 'Favorites' }}
        />
        <Tab.Screen
          name="My Tickets"
          component={TicketsStack}
          options={{ tabBarLabel: 'My Tickets' }}
        />
        <Tab.Screen
          name="Map"
          component={MapStack}
          options={{ tabBarLabel: 'Map' }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{ tabBarLabel: 'Profile' }}
        />
        <Tab.Screen
          name="More"
          component={MoreStack}
          options={{ tabBarLabel: 'More' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
