# Ace Ticket App

A React Native application for browsing and managing sports, concert, and entertainment events in Boston.

## Features

- 🎫 Browse 35+ Boston events across 16 categories
- ❤️ Save favorite events with swipe-to-favorite gestures
- 📅 Add events to your calendar
- 🗺️ View venue locations on an interactive map
- 🎟️ Manage your purchased tickets with QR codes
- 👤 User authentication and profile management
- 🔍 Advanced search and filtering

## Tech Stack

- **React Native** 0.73.2
- **Expo SDK** 50
- **TypeScript** for type safety
- **Zustand** for state management
- **React Navigation** 6 (bottom tabs + stack navigation)
- **React Native Maps** for map functionality
- **React Native QR Code SVG** for ticket QR codes

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/ace-ticket-app.git
cd ace-ticket-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the app:
```bash
npx expo start
```

## Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator (requires macOS)
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm test` - Run Jest tests

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── common/       # Button, Card, PriceTag, etc.
│   ├── events/       # EventCard, FavoriteButton
│   └── tickets/      # TicketCard, QRCodeDisplay
├── screens/          # Screen components
│   ├── Browse/       # EventsListScreen
│   ├── Tickets/      # MyTicketsScreen, TicketDetailScreen
│   ├── Favorites/    # FavoritesScreen
│   ├── Map/          # MapScreen
│   ├── Profile/      # ProfileScreen
│   └── More/         # MoreScreen
├── navigation/       # AppNavigator with bottom tabs
├── stores/          # Zustand state management
├── services/        # API and data services
├── types/           # TypeScript type definitions
└── utils/           # Constants, helpers, utilities
```

## Brand Colors

- **Ace Red**: `#DD0000` - Primary brand color, login button
- **Ace Blue**: `#3862FA` - Secondary brand color, top banner
- **White**: `#FFFFFF` - Backgrounds
- **Black**: `#000000` - Primary text

## Event Categories

- MLB, NHL, NBA, NFL, NCAA (Sports)
- Concerts, Theater, Comedy, Festivals (Entertainment)
- Wrestling, MMA, UFC (Combat Sports)
- Soccer, Golf, Tennis, Racing (Other Sports)

## Development

This project follows these conventions:

- **Components**: Reusable, functional components with TypeScript
- **State**: Zustand stores with TypeScript interfaces
- **Navigation**: React Navigation 6 with type-safe navigation
- **Styling**: StyleSheet with consistent spacing and typography
- **Testing**: Jest with React Native Testing Library
- **Code Quality**: ESLint + Prettier + TypeScript

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and type checking
5. Submit a pull request

## License

[Add your license here]