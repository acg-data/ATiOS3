# Ace Ticket iOS App - Rebranding Documentation

## Overview
This document outlines the rebranding of the Open Event iOS app to match Ace Ticket's brand identity and functionality requirements.

## Completed Core Updates

### 1. Color Scheme (Colors.swift)
Updated with Ace Ticket brand colors:
- **Primary Blue**: #1565C0 (mainBlueColor)
- **Light Blue**: #E3F2FD (lightBlueColor)
- **White**: #FFFFFF (whiteColor)
- **Dark Gray**: #212121 (darkGrayColor, textPrimaryColor)
- **Medium Gray**: #757575 (mediumGrayColor, textSecondaryColor)
- **Favorite Orange**: #FF6F00 (favoriteOrangeColor)
- **Highlighted BG**: #E3F2FD (highlightedBackgroundColor)
- **Status Bar Blue**: #0D47A1 (statusBarBlueColor)
- **Separator**: #E0E0E0 (separatorColor)

### 2. Event Categories (Event.swift)
Replaced FOSSAsia tech tracks with Ace Ticket categories:
- MLB, NHL, NBA, NFL (Sports)
- NCAA (College Sports)
- Concerts, Theater, Comedy, Festivals (Entertainment)
- WWE, MMA, UFC (Combat Sports)
- Soccer, Golf, Tennis, Racing (Other Sports)

Each category has a distinct color for visual differentiation.

### 3. Constants Updates (Constants.swift)
- Updated app name references to "Ace Ticket"
- Added Ace Ticket API endpoints (placeholder URLs):
  - Base API: https://api.aceticket.com/v1
  - Events: https://api.aceticket.com/v1/events
  - Tickets: https://api.aceticket.com/v1/tickets
  - Venues: https://api.aceticket.com/v1/venues
- Updated share message and subject for social sharing
- Updated location to Boston, MA (Ace Ticket headquarters)
- Updated messaging (e.g., "Logged In" → "Signed In")

### 4. Global Appearance (AppDelegate.swift)
- Tab bar tint color: Main blue (#1565C0)
- Navigation bar tint: Main blue (#1565C0)
- Navigation bar background: White (#FFFFFF)
- Navigation bar title text: Dark gray (#212121)
- Status bar style: Default (not light content)

### 5. App Info (Info.plist)
- Added CFBundleDisplayName: "Ace Ticket"
- Updated calendar usage description: "Ace Ticket needs access to add events to your calendar"

## Storyboard Updates Required

### Files to Update:
1. **Main.storyboard** - Main tab bar controller and navigation
2. **Favorites.storyboard** - Favorites tab UI
3. **ScheduleVC.storyboard** - Schedule view
4. **Sessions.storyboard** - Session/event list
5. **Profile.storyboard** - User profile
6. **More.storyboard** - More options menu
7. **IndividualEvent.storyboard** - Event detail view
8. **LaunchScreen.storyboard** - Launch screen
9. **Signup~.storyboard** - Sign up flow

### Changes Required in Each Storyboard:

#### Color Updates:
- Replace all red color references (#D90300) with main blue (#1565C0)
- Replace cream tints (#FEFAD5) with white (#FFFFFF)
- Update highlighted backgrounds to light blue (#E3F2FD)
- Update text colors to dark gray (#212121) for primary text
- Update secondary text to medium gray (#757575)

#### Tab Bar Items (Main.storyboard):
1. **Browse** (formerly "Browse Events")
   - Icon: Search/compass style
   - Badge color: Blue (#1565C0)
2. **Favorites**
   - Icon: Heart/favorite
   - Badge color: Orange (#FF6F00)
3. **Map** (formerly "Map")
   - Icon: Map pin
   - Badge color: Blue (#1565C0)
4. **More**
   - Icon: Dots/grid
   - Badge color: Blue (#1565C0)
5. **Profile** (formerly "Profile")
   - Icon: User/profile
   - Badge color: Blue (#1565C0)

#### Navigation Bars:
- Background: White
- Title color: Dark gray (#212121)
- Tint: Blue (#1565C0)
- Button tint: Blue (#1565C0)

#### Text & Labels:
- Update "Open Event" references to "Ace Ticket"
- Update "FOSSASIA" references to "Ace Ticket"
- Update "events" to "tickets" where appropriate
- Update "sessions" to "shows" or "games"

#### Placeholder Text:
- Replace placeholder event names with real ticket examples:
  - "Boston Red Sox vs New York Yankees"
  - "Taylor Swift - Eras Tour"
  - "Hamilton - Broadway"
  - "Super Bowl LIX"

#### Launch Screen:
- Add Ace Ticket logo
- Update background to white
- Add tagline: "Great Seats - Great Prices"

#### Login/Signup Screens:
- Update button styles to blue (#1565C0)
- Add Ace Ticket logo
- Update messaging: "Sign In" instead of "Log In"
- Add "Great Seats - Great Prices" tagline

## API Integration Requirements

### Endpoints Needed:

#### Authentication:
- **POST** `/v1/auth/signup` - User registration
  - Request: { email, password, firstName, lastName }
  - Response: { accessToken, user }

- **POST** `/v1/auth/login` - User login
  - Request: { email, password }
  - Response: { accessToken, user }

- **POST** `/v1/auth/logout` - User logout
  - Headers: { Authorization: Bearer {token} }
  - Response: Success message

#### Events/Tickets:
- **GET** `/v1/events` - List all events
  - Query params: ?category={category}&date={date}&limit={limit}
  - Response: [{ id, title, date, venue, price, category, imageUrl }]

- **GET** `/v1/events/{id}` - Get event details
  - Response: { id, title, description, date, time, venue, price, category, imageUrl, seats }

- **GET** `/v1/tickets` - Get user's tickets
  - Headers: { Authorization: Bearer {token} }
  - Response: [{ id, eventId, qrCode, status, purchaseDate }]

- **POST** `/v1/tickets/{id}/purchase` - Purchase ticket
  - Headers: { Authorization: Bearer {token} }
  - Request: { eventId, seatId, paymentMethod }
  - Response: { ticketId, qrCode, status }

#### Venues:
- **GET** `/v1/venues` - List all venues
  - Response: [{ id, name, address, city, state, imageUrl }]

- **GET** `/v1/venues/{id}` - Get venue details
  - Response: { id, name, address, city, state, capacity, imageUrl, facilities }

### Data Model Updates Needed:

#### Event Model:
```swift
struct Event {
    let id: String
    let title: String
    let shortDescription: String
    let longDescription: String?
    let date: Date
    let time: Date
    let venue: Venue?
    let price: Double
    let category: Track
    let imageUrl: String?
    let availableSeats: Int
    var favorite: Bool
}
```

#### Ticket Model:
```swift
struct Ticket {
    let id: String
    let eventId: String
    let event: Event
    let qrCode: String
    let seat: String
    let price: Double
    let purchaseDate: Date
    let status: String // "purchased", "used", "refunded"
}
```

#### Venue Model:
```swift
struct Venue {
    let id: String
    let name: String
    let address: String
    let city: String
    let state: String
    let zipCode: String
    let latitude: Double?
    let longitude: Double?
    let capacity: Int?
    let imageUrl: String?
    let facilities: [String]?
}
```

### Service Layer Updates:

#### Update ApiClient.swift:
- Add Ace Ticket base URL
- Implement authentication endpoints
- Add token management (store in Keychain)
- Update error handling for Ace Ticket API responses

#### Create New Services:
- **TicketService.swift** - Handle ticket purchases, retrieval, QR codes
- **VenueService.swift** - Fetch venue information
- **PaymentService.swift** - Handle payment processing (if needed)
- **QRCodeService.swift** - Generate/display QR codes for tickets

### Authentication Flow Updates:

#### LoginViewController.swift:
- Update API calls to use Ace Ticket endpoints
- Store access token in Keychain (not UserDefaults)
- Update success message to "Successfully signed in"
- Redirect to profile/home after login

#### SignupViewController.swift:
- Update API calls to use Ace Ticket endpoints
- Add fields: First Name, Last Name
- Store access token in Keychain
- Update success message to "Account created successfully"

### Offline Support Updates:

#### Update FetchDataService:
- Change from GitHub JSON to Ace Ticket API
- Implement caching for events/venues/tickets
- Add offline mode detection
- Sync favorites with server when online

#### Update SettingsManager:
- Add token storage/retrieval methods
- Cache venue data
- Cache user's purchased tickets
- Implement background sync

## Feature Additions Needed

### 1. Ticket Purchase Flow
- Seat selection interface
- Payment method selection (Apple Pay, Credit Card)
- Order confirmation screen
- QR code generation for tickets

### 2. My Tickets Section
- Display purchased tickets
- Show QR code for scanning
- Ticket status (upcoming, used, expired)
- Share ticket functionality

### 3. Venue Information
- Detailed venue pages
- Interactive maps (using MapViewController)
- Venue amenities
- Parking/transportation info

### 4. Search & Filters
- Advanced search by:
  - Category (Sports, Concerts, Theater, etc.)
  - Date range
  - Price range
  - Venue
  - Team/artist name

### 5. Notifications
- Push notifications for:
  - Event reminders
  - Ticket purchase confirmations
  - Special offers/promotions

### 6. Share Functionality
- Share events via social media
- Share tickets with friends
- Email ticket sharing

## Asset Replacements Needed

### Images:
- App icon: Ace Ticket logo (1024x1024)
- Launch screen logo: Ace Ticket logo (various sizes)
- Tab bar icons: 5 custom icons (30x30, 60x60)
- Navigation bar back button: Custom or system
- Placeholder event images
- Venue images

### Branding Assets:
- Logo variations (color, black, white)
- Wordmark for launch screen
- Social sharing icons
- Payment method icons (Visa, Mastercard, Apple Pay)

## Testing Requirements

### Manual Testing:
1. **Navigation Flow**: Test all tab transitions
2. **Authentication**: Test signup/login/logout
3. **Event Browsing**: Test filtering and search
4. **Favorites**: Test adding/removing favorites
5. **Offline Mode**: Test app without internet
6. **Performance**: Test with large datasets

### Automated Testing:
- Unit tests for ViewModels
- Unit tests for Services
- UI tests for critical user flows
- API integration tests

## Deployment Checklist

- [ ] Replace all placeholder images with Ace Ticket assets
- [ ] Update all storyboard colors and text
- [ ] Integrate with Ace Ticket API
- [ ] Test all authentication flows
- [ ] Test ticket purchase flow
- [ ] Implement QR code display
- [ ] Update app icon in Xcode project
- [ ] Update bundle identifier
- [ ] Test on multiple iOS versions
- [ ] Test on different device sizes (iPhone SE, iPhone 15 Pro, iPad)
- [ ] Verify Apple Pay integration (if needed)
- [ ] Check accessibility features
- [ ] Review privacy policy updates
- [ ] Update App Store screenshots
- [ ] Prepare release notes

## Contact Information

For API documentation, branding assets, or integration questions:
- API Documentation: [Contact Ace Ticket technical team]
- Branding Assets: [Contact Ace Ticket marketing team]
- Project Questions: [Client contact]

## Version History

- v1.0 - Initial rebranding foundation (colors, constants, event categories)
- v1.1 - API integration and data model updates
- v1.2 - UI/UX updates across storyboards
- v1.3 - Ticket purchase flow implementation
- v1.4 - QR code and offline features
- v2.0 - Full production release

## Notes

- All API endpoints listed are placeholders - update with actual Ace Ticket API documentation
- Color values are based on Ace Ticket website analysis - confirm with design team
- Location coordinates default to Boston, MA - update to actual venue locations when available
- Number of tracks updated to 16 to match new categories
- Some functionality (payment, seat selection) will require additional libraries/frameworks
