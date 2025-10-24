# Barber & Co. - Developer Guide

## Quick Start

### Project Structure
```
barber-co/
├── App.tsx                          # Main app entry point with routing
├── styles/
│   └── globals.css                  # Design tokens and global styles
├── components/
│   ├── onboarding/                  # Onboarding flow screens
│   │   ├── SplashScreen.tsx
│   │   ├── WelcomeScreen.tsx
│   │   ├── OnboardingCarousel.tsx
│   │   └── LoginScreen.tsx
│   ├── customer/                    # Customer-facing screens
│   │   ├── HomeScreen.tsx           # Netflix-style discovery
│   │   ├── SearchScreen.tsx
│   │   ├── BarberProfileScreen.tsx  # With video & loyalty tabs
│   │   ├── BookingFlow.tsx          # 3-step booking process
│   │   ├── BookingConfirmation.tsx  # Celebratory confirmation
│   │   ├── CustomerProfile.tsx      # Gamification hub
│   │   ├── RewardsScreen.tsx        # Points & achievements
│   │   ├── ProductMarketplace.tsx
│   │   ├── ProductDetailScreen.tsx
│   │   ├── CartScreen.tsx
│   │   └── CheckoutScreen.tsx
│   ├── business/                    # Business dashboard screens
│   │   ├── BusinessDashboard.tsx    # With loyalty & flash deals
│   │   ├── BusinessCalendar.tsx
│   │   ├── ServicesManagement.tsx
│   │   └── ProductsManagement.tsx
│   ├── ui/                          # ShadCN UI components
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Protected component
│   ├── BottomNav.tsx                # Navigation bar
│   └── LoadingSpinner.tsx           # Loading states
└── guidelines/
    └── Guidelines.md
```

## Key Features & Screens

### 1. Onboarding Flow
**Path:** `splash → welcome → onboarding → login → home/dashboard`

**Screens:**
- `SplashScreen` - 2-second animated logo
- `WelcomeScreen` - Role selection (Customer/Business)
- `OnboardingCarousel` - Feature highlights with style quiz
- `LoginScreen` - Authentication

### 2. Customer Journey

#### Home Screen
**Route:** `'home'`
**Component:** `HomeScreen`

**Features:**
- Booking streak indicator
- Search bar
- Netflix-style carousels:
  - Book Again
  - For You: Top Picks
  - Trending Now
  - Style Challenge
  - Highly Rated Near You

#### Barber Profile
**Route:** `'barber-profile'`
**Component:** `BarberProfileScreen`
**Data:** Pass barber object via `screenData`

**Tabs:**
1. **Services** - Bookable services with prices
2. **Loyalty** - Tier system, progress, perks
3. **Products** - Available products
4. **Reviews** - Customer reviews
5. **About** - Business info, hours, contact

**Special Feature:** Video header with play button overlay

#### Booking Flow
**Route:** `'booking'`
**Component:** `BookingFlow`
**Data:** Pass service object via `screenData`

**Steps:**
1. Select Professional (or "No Preference")
2. Choose Date & Time (calendar + time slots)
3. Review & Confirm (with notes field)

**Navigation:** Confirms → `'booking-confirmation'`

#### Booking Confirmation
**Route:** `'booking-confirmation'`
**Component:** `BookingConfirmation`

**Features:**
- Confetti animation
- Points earned (+100)
- Streak counter
- Next milestone
- Appointment details
- Navigation to rewards/appointments/home

#### Customer Profile
**Route:** `'profile'` or `'bookings'`
**Component:** `CustomerProfile`

**Tabs:**
1. **Achievements** - Badge system with progress
2. **Appointments** - Upcoming/Past bookings
3. **Account** - Settings, payment, etc.

**Gamification:**
- Booking streak display
- Style points total
- Loyalty tier badge
- Level indicator
- Progress to next tier

#### Rewards Screen
**Route:** `'rewards'`
**Component:** `RewardsScreen`

**Features:**
- Style points balance
- Loyalty tier progress
- Booking streak tracker
- Available rewards to claim
- Achievement grid
- How to earn more points

### 3. Business Journey

#### Business Dashboard
**Route:** `'dashboard'`
**Component:** `BusinessDashboard`

**Tabs:**
1. **Appointments** - Today's schedule with loyalty indicators
2. **Loyalty** - Top customers, program impact
3. **Flash Deals** - Create and manage time-limited offers

**Stats Cards:**
- Today's earnings
- Appointments count
- New bookings
- Loyal members

**Quick Actions:**
- Add Walk-in
- Block Time

## Navigation System

### App.tsx State Management

```tsx
const [currentScreen, setCurrentScreen] = useState('splash');
const [userRole, setUserRole] = useState<UserRole>(null);
const [screenData, setScreenData] = useState<any>(null);
const [navigationHistory, setNavigationHistory] = useState<string[]>([]);
```

### Navigation Functions

```tsx
// Navigate to new screen with optional data
handleNavigate(screen: string, data?: any)

// Go back to previous screen
handleBack()

// Select user role (customer/business)
handleSelectRole(role: 'customer' | 'business')
```

### Passing Data Between Screens

```tsx
// From source screen
onNavigate('barber-profile', barberObject)

// In destination screen
function BarberProfileScreen({ data, onNavigate, onBack }) {
  // Access data.name, data.rating, etc.
}
```

### Bottom Navigation

**Shown on:** Main app screens (home, bookings, rewards, profile, dashboard, calendar, services)
**Hidden on:** Onboarding, booking flow, confirmation, search, detail views

```tsx
const showBottomNav =
  userRole &&
  currentScreen !== 'splash' &&
  currentScreen !== 'welcome' &&
  // ... other exclusions
```

## Styling Guidelines

### Design System
See `DESIGN_TOKENS.md` for complete reference.

**Primary Colors:**
- `bg-deep-space-blue` (#141829) - Dark backgrounds
- `bg-electric-teal` (#00F5D4) - Primary actions
- `bg-streak-orange` (#FF9900) - Gamification
- `bg-gold` (#D4AF37) - Loyalty/Premium

### Component Patterns

#### Button - Primary Action
```tsx
<Button className="bg-electric-teal hover:bg-electric-teal/90 text-deep-space-blue h-14 rounded-xl font-bold">
  Book Now
</Button>
```

#### Card - Standard
```tsx
<Card className="p-4 rounded-2xl border-border">
  {/* Content */}
</Card>
```

#### Card - Selected/Active
```tsx
<Card className="p-4 rounded-2xl border-2 border-electric-teal bg-electric-teal/5">
  {/* Content */}
</Card>
```

#### Gradient Header
```tsx
<div className="bg-gradient-to-br from-deep-space-blue via-[#1a1f36] to-deep-space-blue px-4 py-8">
  {/* Content */}
</div>
```

### Typography Rules

**Important:** Don't specify font sizes or weights unless explicitly needed. The app has default typography in `globals.css`.

```tsx
// ✅ Good - uses defaults
<h1>Heading</h1>
<p>Body text</p>

// ❌ Avoid - unless specifically required
<h1 className="text-2xl font-bold">Heading</h1>
```

## Gamification System

### Points System
- **Booking completed:** +100 points
- **Review submitted:** +25 points
- **Streak maintained:** +50 bonus per week

### Loyalty Tiers
| Tier | Visits Required | Discount |
|------|----------------|----------|
| Bronze | 1-9 | 5% |
| Silver | 10-24 | 10% |
| Gold | 25-49 | 15% |
| Platinum | 50+ | 20% |

### Achievements
1. First Visit - Complete first booking
2. Week Warrior - Book 3 appointments in a week
3. Style Explorer - Try 5 different services
4. Loyal Customer - Complete 10 bookings
5. Streak Master - Maintain 5-week booking streak
6. VIP Status - Spend $500 total

### Streak Logic
- Increments with each booking
- Resets if no booking for 7+ days
- Displayed prominently in UI
- Used to drive engagement

## Adding New Screens

### 1. Create Component

```tsx
// /components/customer/NewScreen.tsx
interface NewScreenProps {
  data?: any;
  onNavigate: (screen: string, data?: any) => void;
  onBack?: () => void;
}

export function NewScreen({ data, onNavigate, onBack }: NewScreenProps) {
  return (
    <div className="h-screen overflow-y-auto pb-20 bg-off-white">
      {/* Content */}
    </div>
  );
}
```

### 2. Import in App.tsx

```tsx
import { NewScreen } from './components/customer/NewScreen';
```

### 3. Add Route

```tsx
{currentScreen === 'new-screen' && (
  <NewScreen 
    data={screenData}
    onNavigate={handleNavigate}
    onBack={handleBack}
  />
)}
```

### 4. Update Navigation

```tsx
// From any screen
onNavigate('new-screen', { key: 'value' })
```

### 5. Update Bottom Nav Logic (if needed)

```tsx
const showBottomNav =
  userRole &&
  currentScreen !== 'splash' &&
  // ... add new screen if needed
  currentScreen !== 'new-screen' &&
  // ...
```

## Common Tasks

### Adding a New Service

1. Update services array in `BarberProfileScreen.tsx`
2. Add service data structure:
```tsx
{ 
  id: number, 
  name: string, 
  duration: string, 
  price: number 
}
```

### Adding a New Achievement

1. Update achievements array in `CustomerProfile.tsx`
2. Add achievement structure:
```tsx
{
  id: number,
  name: string,
  description: string,
  icon: LucideIcon,
  unlocked: boolean,
  progress?: number,
  total?: number,
  date?: string
}
```

### Creating a New Loyalty Tier

1. Update `loyaltyBenefits` in `BarberProfileScreen.tsx`
2. Update tier colors in `getTierColor` and `getTierBgColor` functions
3. Add tier logic in business dashboard

### Adding a New Flash Deal

1. Update `flashDeals` array in `BusinessDashboard.tsx`
2. Structure:
```tsx
{
  id: number,
  service: string,
  originalPrice: number,
  dealPrice: number,
  discount: number,
  active: boolean,
  bookings: number,
  expiresIn: string
}
```

## State Management

Currently using React useState for simplicity.

**For production, consider:**
- Context API for global state (user, points, streaks)
- React Query for server state
- Zustand/Redux for complex state management

## API Integration Points

### Customer Side
- `POST /api/bookings` - Create booking
- `GET /api/barbers` - Fetch barbers
- `GET /api/barber/:id` - Barber details
- `GET /api/user/points` - User points
- `GET /api/user/achievements` - Achievements
- `POST /api/rewards/claim` - Claim reward
- `GET /api/products` - Product list

### Business Side
- `GET /api/dashboard/stats` - Dashboard metrics
- `GET /api/appointments` - Appointments list
- `POST /api/appointments` - Add walk-in
- `GET /api/loyalty/customers` - Loyalty customers
- `POST /api/deals` - Create flash deal
- `PATCH /api/deals/:id` - Toggle deal

## Testing Checklist

- [ ] Onboarding flow completes
- [ ] Customer can book appointment
- [ ] Confirmation screen displays
- [ ] Points are awarded
- [ ] Achievements unlock
- [ ] Loyalty tier progresses
- [ ] Business sees bookings
- [ ] Flash deals toggle
- [ ] Navigation works
- [ ] Bottom nav highlights correctly
- [ ] Images load with fallback
- [ ] Animations play smoothly
- [ ] Responsive on mobile viewport

## Performance Optimization

### Images
- Use `ImageWithFallback` for all images
- Implement lazy loading for carousels
- Consider image optimization service (Cloudinary, imgix)

### Animations
- Use CSS transitions over JavaScript
- Limit simultaneous animations
- Use `will-change` sparingly

### Lists
- Implement virtual scrolling for long lists
- Use React.memo for expensive components
- Debounce search inputs

## Deployment Considerations

### Environment Variables
```
VITE_API_URL=
VITE_STRIPE_KEY=
VITE_GOOGLE_MAPS_KEY=
```

### Build Optimization
```bash
npm run build
```

### Mobile App Wrapper
Consider:
- Capacitor for iOS/Android
- Push notification setup
- Deep linking configuration
- App store assets

## Troubleshooting

### Bottom Nav Not Showing
Check `showBottomNav` logic in `App.tsx` - ensure screen is not in exclusion list.

### Images Not Loading
Verify `ImageWithFallback` is being used and fallback image paths are correct.

### Styles Not Applying
1. Check Tailwind class names are correct
2. Verify globals.css is imported
3. Ensure no conflicting inline styles

### Navigation Stuck
Check navigation history state and ensure `handleBack` properly pops history stack.

### Animations Not Playing
1. Verify animation classes in globals.css
2. Check element has proper positioning (relative/absolute)
3. Ensure no conflicting transitions

## Code Standards

### Naming Conventions
- Components: PascalCase (`CustomerProfile.tsx`)
- Functions: camelCase (`handleNavigate`)
- Constants: UPPER_SNAKE_CASE (`MAX_POINTS`)
- CSS classes: kebab-case (via Tailwind)

### File Organization
- One component per file
- Co-locate related types/interfaces
- Group imports (React → Libraries → Local)
- Export at bottom of file

### Component Structure
```tsx
// 1. Imports
import { useState } from 'react';
import { Icon } from 'lucide-react';

// 2. Types/Interfaces
interface Props {
  // ...
}

// 3. Constants
const ITEMS = [];

// 4. Component
export function Component({ }: Props) {
  // Hooks
  const [state, setState] = useState();
  
  // Event handlers
  const handleClick = () => {};
  
  // Render
  return <div></div>;
}
```

## Resources

- **Design Tokens:** `/DESIGN_TOKENS.md`
- **Completion Summary:** `/COMPLETION_SUMMARY.md`
- **ShadCN Docs:** https://ui.shadcn.com
- **Tailwind Docs:** https://tailwindcss.com
- **Lucide Icons:** https://lucide.dev

## Support

For questions or issues:
1. Check this guide
2. Review `DESIGN_TOKENS.md`
3. Inspect similar existing components
4. Check console for errors
5. Review globals.css for styles

---

**Version:** 1.0  
**Last Updated:** October 19, 2025  
**Maintainer:** Development Team
