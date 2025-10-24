# Barber & Co. Design Tokens Reference

## Color Palette

### Primary Colors
```css
--deep-space-blue: #141829      /* Main backgrounds, primary text */
--electric-teal: #00F5D4         /* Primary actions, CTAs, accents */
--streak-orange: #FF9900         /* Gamification, streaks, trending */
--gold: #D4AF37                  /* Loyalty, premium, achievements */
```

### Neutral Colors
```css
--off-white: #F9F9F9            /* Light backgrounds */
--soft-gray: #EAEAEA             /* Secondary backgrounds, inputs */
```

### Semantic Colors
```css
--success: #28A745               /* Completed, success states */
--destructive: #DC3545           /* Errors, delete actions */
```

## Tailwind CSS Class Usage

### Backgrounds
- `bg-deep-space-blue` - Dark sections, headers, cards on dark mode
- `bg-electric-teal` - Primary buttons, active states
- `bg-streak-orange` - Gamification elements, hot badges
- `bg-gold` - Premium features, loyalty indicators
- `bg-off-white` - Page backgrounds
- `bg-soft-gray` - Input fields, secondary cards
- `bg-white` - Main content cards

### Text Colors
- `text-deep-space-blue` - Primary text
- `text-electric-teal` - Accent text, links, prices
- `text-streak-orange` - Gamification text
- `text-gold` - Premium text, loyalty
- `text-white` - Text on dark backgrounds
- `text-gray-500` / `text-gray-600` - Secondary text

### Borders
- `border-electric-teal` - Active selections, focused states
- `border-border` - Default borders (uses CSS variable)
- `border-white/20` - Borders on dark backgrounds
- `border-0` - Remove borders

### Gradient Examples
```tsx
// Dark gradient background
className="bg-gradient-to-br from-deep-space-blue via-[#1a1f36] to-deep-space-blue"

// Teal gradient button
className="bg-gradient-to-r from-electric-teal to-[#00d4ba]"

// Orange gradient streak
className="bg-gradient-to-r from-streak-orange to-[#ff7700]"

// Gold gradient premium
className="bg-gradient-to-r from-gold to-[#b8941f]"
```

## Typography

### Font Families
```tsx
// Headings (h1, h2, h3)
font-family: 'Poppins', sans-serif

// Body text (p, labels, buttons)
font-family: 'Inter', sans-serif
```

### Font Sizes (via CSS variables)
- `text-2xl` - Large headings (32px equivalent)
- `text-xl` - Section headings (24px equivalent)
- `text-lg` - Subsection headings (18px equivalent)
- `text-base` - Body text (16px)
- `text-sm` - Small text (14px)
- `text-xs` - Extra small text (12px)

### Font Weights
- Default: Don't specify (uses globals.css defaults)
- `font-medium` - Medium weight (500)
- `font-semibold` - Semi-bold (600)
- `font-bold` - Bold (700)
- `font-extrabold` - Extra bold (800)

**Important:** Avoid using font size classes unless specifically requested, as the app has default typography set in globals.css.

## Spacing & Layout

### Border Radius
- `rounded-xl` - Large radius (12px) - inputs, buttons
- `rounded-2xl` - Extra large (16px) - cards
- `rounded-full` - Circular - avatars, badges

### Padding
- `p-3` / `px-3` / `py-3` - Small (12px)
- `p-4` / `px-4` / `py-4` - Medium (16px)
- `p-5` / `px-5` / `py-5` - Large (20px)
- `p-6` / `px-6` / `py-6` - Extra large (24px)

### Gaps
- `gap-2` - Small gap (8px)
- `gap-3` - Medium gap (12px)
- `gap-4` - Large gap (16px)

## Component Patterns

### Primary Button
```tsx
<Button className="bg-electric-teal hover:bg-electric-teal/90 text-deep-space-blue h-14 rounded-xl font-bold">
  Action Text
</Button>
```

### Secondary Button
```tsx
<Button 
  variant="outline" 
  className="border-2 border-electric-teal text-electric-teal hover:bg-electric-teal/10"
>
  Action Text
</Button>
```

### Card
```tsx
<Card className="p-4 rounded-2xl border-border">
  Content
</Card>
```

### Card with Teal Accent (Selected/Active)
```tsx
<Card className="p-4 rounded-2xl border-2 border-electric-teal bg-electric-teal/5">
  Content
</Card>
```

### Gradient Header
```tsx
<div className="bg-gradient-to-br from-deep-space-blue via-[#1a1f36] to-deep-space-blue px-4 py-8 relative overflow-hidden">
  <div className="absolute top-0 right-0 w-32 h-32 bg-electric-teal/10 rounded-full blur-3xl"></div>
  <div className="relative z-10">
    {/* Content */}
  </div>
</div>
```

### Badge - Primary
```tsx
<Badge className="bg-electric-teal text-deep-space-blue border-0">
  Text
</Badge>
```

### Badge - Gamification
```tsx
<Badge className="bg-streak-orange text-white border-0">
  <Flame className="w-3 h-3 mr-1" />
  Text
</Badge>
```

### Badge - Loyalty/Premium
```tsx
<Badge className="bg-gold/20 text-gold border-gold/30">
  Text
</Badge>
```

### Progress Bar
```tsx
<Progress value={75} className="h-2" />
```

### Avatar with Teal Border
```tsx
<Avatar className="w-20 h-20 border-4 border-electric-teal ring-4 ring-electric-teal/20">
  <AvatarImage src={imageUrl} />
  <AvatarFallback className="bg-gradient-to-br from-electric-teal to-[#00d4ba] text-deep-space-blue">
    AB
  </AvatarFallback>
</Avatar>
```

### Stat Card
```tsx
<Card className="p-4 rounded-2xl">
  <div className="w-10 h-10 rounded-full bg-electric-teal/10 flex items-center justify-center mb-2">
    <Icon className="w-5 h-5 text-electric-teal" />
  </div>
  <p className="text-2xl font-bold mb-1">Value</p>
  <p className="text-sm text-gray-500">Label</p>
</Card>
```

### Glassmorphism Card (on dark background)
```tsx
<Card className="bg-white/10 backdrop-blur border-white/20 p-5 rounded-xl">
  Content
</Card>
```

## Icon Guidelines

### Icon Library
Use `lucide-react` for all icons.

### Common Icons
- `Flame` - Streaks, hot items
- `Trophy` / `Award` - Achievements, rewards
- `Zap` - Style points, energy
- `Star` - Ratings, favorites
- `Crown` - Premium, VIP
- `TrendingUp` - Growth, progress
- `Sparkles` - Points, special
- `Target` - Goals, challenges

### Icon Sizes
- `w-4 h-4` - Small (16px) - in text
- `w-5 h-5` - Medium (20px) - buttons, badges
- `w-6 h-6` - Large (24px) - headers
- `w-8 h-8` - Extra large (32px) - feature icons

## Animation Classes

### Custom Animations (from globals.css)
- `animate-bounce-in` - Entry animation
- `animate-glow` - Pulsing glow effect
- `animate-pulse` - Built-in pulse
- `animate-spin` - Spinner rotation

### Transition Classes
- `transition-all` - Smooth all properties
- `transition-colors` - Color transitions
- `transition-transform` - Transform transitions
- `duration-300` / `duration-500` / `duration-700` - Timing

### Transform Classes
- `hover:scale-[1.02]` - Subtle hover lift
- `hover:scale-110` - Icon grow on hover
- `translate-y-0` / `translate-y-4` - Slide animations

## State Indicators

### Booking Status
```tsx
// Confirmed
<Badge className="bg-success/10 text-success border-success/20">
  Confirmed
</Badge>

// Pending
<Badge className="bg-streak-orange/10 text-streak-orange border-streak-orange/20">
  Pending
</Badge>

// Completed
<Badge className="bg-success/10 text-success border-success/20">
  Completed
</Badge>
```

### Loyalty Tiers
```tsx
// Platinum
<div className="bg-gray-400/10">
  <Award className="text-gray-400" />
</div>

// Gold
<div className="bg-gold/10">
  <Award className="text-gold" />
</div>

// Silver
<div className="bg-gray-500/10">
  <Award className="text-gray-500" />
</div>

// Bronze
<div className="bg-amber-600/10">
  <Award className="text-amber-600" />
</div>
```

## Responsive Design

### Mobile-First Approach
All designs are mobile-first (375px-428px viewport).

### Horizontal Scrolling
```tsx
<div className="flex gap-4 overflow-x-auto px-4 scrollbar-hide">
  {/* Cards */}
</div>
```

### Fixed Elements
```tsx
// Bottom Navigation
<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">

// Sticky Header
<div className="sticky top-0 z-10 bg-white">
```

## Accessibility

### Color Contrast
- Ensure sufficient contrast for text on backgrounds
- Use white text on dark backgrounds
- Use dark text on light backgrounds

### Interactive Elements
- Minimum touch target: 44x44px
- Use `cursor-pointer` for clickable elements
- Add hover states for desktop

### Focus States
- Default outline is styled in globals.css
- Use `outline-ring/50` for custom outlines

## Best Practices

1. **Consistency**: Always use design tokens, never hardcode colors
2. **Spacing**: Use consistent padding (p-4, p-5, p-6)
3. **Borders**: Use `rounded-xl` or `rounded-2xl` consistently
4. **Shadows**: Use ShadCN component defaults
5. **Gradients**: Keep direction consistent (to-br for backgrounds, to-r for buttons)
6. **Typography**: Let globals.css handle default sizes/weights
7. **Icons**: Size appropriately for context
8. **Animations**: Keep subtle and purposeful
9. **States**: Always show hover, active, disabled states
10. **Loading**: Use LoadingSpinner component for loading states

## Quick Reference for Common Scenarios

### When to use Electric Teal
- Primary action buttons
- Active navigation items
- Selected states
- Links and interactive text
- Progress indicators
- Prices and important numbers

### When to use Streak Orange
- Gamification elements
- Streaks and hot items
- Trending badges
- Urgency indicators
- Flash deals
- Time-sensitive content

### When to use Gold
- Loyalty tiers
- Premium features
- Achievements
- VIP status
- Rewards
- Special offers

### When to use Deep Space Blue
- Headers
- Dark mode sections
- Primary text
- Backgrounds for emphasis
- Contrast to light content

## File Locations

- **Global Styles**: `/styles/globals.css`
- **Design Tokens**: Defined in `:root` of globals.css
- **Components**: `/components/`
- **UI Components**: `/components/ui/`
- **Customer Screens**: `/components/customer/`
- **Business Screens**: `/components/business/`
- **Onboarding**: `/components/onboarding/`

---

Last Updated: October 19, 2025
Version: 1.0
