# AceTicket - React Native (Expo) Web Application

## Overview
AceTicket is an iOS-focused ticket browsing and purchasing application built with React Native and Expo. It allows users to browse sports and entertainment events, manage favorites, view their tickets with QR codes, and explore venues on a map.

## Project Configuration

### Running the Application
- **Port**: 5000 (exposed for Replit web preview)
- **Command**: `npm run dev` (runs Expo with web mode on port 5000)
- **Bundler**: Metro bundler with react-native-web

### Key Configuration Files
- `app.json` - Expo configuration for iOS, Android, and web platforms
- `metro.config.js` - Metro bundler configuration with web platform module resolution
- `babel.config.js` - Babel configuration with expo preset and reanimated plugin
- `package.json` - Dependencies and scripts

## Project Structure
```
/
├── App.tsx                 # Main app entry point with navigation setup
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Button, Card, CategoryBadge, EmptyState, etc.
│   │   ├── events/         # EventCard, FavoriteButton
│   │   └── tickets/        # TicketCard, QRCodeDisplay
│   ├── navigation/         # Navigation configuration
│   │   └── AppNavigator.tsx
│   ├── screens/            # App screens
│   │   ├── Browse/         # Event browsing screens
│   │   ├── Favorites/      # Saved favorites screen
│   │   ├── Map/            # Venue map screen
│   │   ├── More/           # Additional options screen
│   │   ├── Profile/        # User profile screen
│   │   └── Tickets/        # User tickets screens
│   ├── store/              # Zustand state management
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions and constants
└── assets/                 # App icons, splash screen, images
```

## Dependencies

### Core
- `expo` ~50.0.0 - Expo SDK for React Native
- `react` 18.2.0 - React framework
- `react-native` 0.73.6 - React Native
- `react-native-web` ~0.19.6 - Web platform support

### Navigation
- `@react-navigation/native` - Navigation framework
- `@react-navigation/bottom-tabs` - Bottom tab navigation
- `@react-navigation/stack` - Stack navigation

### State Management
- `zustand` - Lightweight state management

### UI Components
- `react-native-svg` - SVG support
- `react-native-qrcode-svg` - QR code generation
- `react-native-reanimated` - Animations
- `react-native-gesture-handler` - Gesture handling

### Native Features (iOS/Android only)
- `react-native-maps` - Map display (excluded from web build)
- `expo-location` - Location services
- `expo-calendar` - Calendar integration
- `expo-image-picker` - Image picker

## Web Platform Notes

### Module Resolution
The `metro.config.js` includes custom module resolution for web platform:
- Redirects `react-native` imports to `react-native-web`
- Excludes `react-native-maps` from web build (returns empty module)

### Known Limitations on Web
- Map functionality is not available on web (native-only feature)
- Some native modules may have limited web support

## Recent Changes
- **Jan 2026**: Fixed import paths across all screens and components
- **Jan 2026**: Added metro.config.js for proper web bundling
- **Jan 2026**: Created placeholder asset images
- **Jan 2026**: Fixed TypeScript errors (duplicate exports, missing constants)
- **Jan 2026**: Configured Expo to run on port 5000 with web preview support

## Development Commands
```bash
npm run dev      # Start Expo web on port 5000
npm run start    # Start Expo in default mode
npm run ios      # Start on iOS simulator
npm run android  # Start on Android emulator
npm run lint     # Run ESLint
npm run typecheck # Run TypeScript type checking
npm run format   # Format code with Prettier
npm run test     # Run Jest tests
```
