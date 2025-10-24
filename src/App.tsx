import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';

// Onboarding
import { SplashScreen } from './components/onboarding/SplashScreen';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { OnboardingCarousel } from './components/onboarding/OnboardingCarousel';
import { LoginScreen } from './components/onboarding/LoginScreen';

// Customer Screens
import { HomeScreen } from './components/customer/HomeScreen';
import { SearchScreen } from './components/customer/SearchScreen';
import { BarberProfileScreen } from './components/customer/BarberProfileScreen';
import { BookingFlow } from './components/customer/BookingFlow';
import { BookingConfirmation } from './components/customer/BookingConfirmation';
import { ProductMarketplace } from './components/customer/ProductMarketplace';
import { ProductDetailScreen } from './components/customer/ProductDetailScreen';
import { CartScreen } from './components/customer/CartScreen';
import { CheckoutScreen } from './components/customer/CheckoutScreen';
import { CustomerProfile } from './components/customer/CustomerProfile';
import { RewardsScreen } from './components/customer/RewardsScreen';

// Business Screens
import { BusinessDashboard } from './components/business/BusinessDashboard';
import { BusinessCalendar } from './components/business/BusinessCalendar';
import { ServicesManagement } from './components/business/ServicesManagement';
import { ProductsManagement } from './components/business/ProductsManagement';

// Navigation
import { BottomNav } from './components/BottomNav';

type UserRole = 'customer' | 'business' | null;

interface CartItem {
  product: any;
  quantity: number;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [screenData, setScreenData] = useState<any>(null);
  const [navigationHistory, setNavigationHistory] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Show splash screen for 2 seconds
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('welcome');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleNavigate = (screen: string, data?: any) => {
    setNavigationHistory([...navigationHistory, currentScreen]);
    setCurrentScreen(screen);
    setScreenData(data);
  };

  const handleBack = () => {
    if (navigationHistory.length > 0) {
      const previousScreen = navigationHistory[navigationHistory.length - 1];
      setNavigationHistory(navigationHistory.slice(0, -1));
      setCurrentScreen(previousScreen);
      setScreenData(null);
    }
  };

  const handleSelectRole = (role: 'customer' | 'business') => {
    setUserRole(role);
    setCurrentScreen('onboarding');
  };

  const handleCompleteOnboarding = () => {
    setCurrentScreen('login');
  };

  const handleLogin = () => {
    if (userRole === 'customer') {
      setCurrentScreen('home');
    } else {
      setCurrentScreen('dashboard');
    }
  };

  const handleAddToCart = (product: any, quantity: number) => {
    const existingItem = cartItems.find((item) => item.product.id === product.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.product.id !== productId));
  };

  const handleCompleteCheckout = () => {
    setCartItems([]);
    setCurrentScreen('profile');
  };

  // Determine if bottom nav should be shown
  const showBottomNav =
    userRole &&
    currentScreen !== 'splash' &&
    currentScreen !== 'welcome' &&
    currentScreen !== 'onboarding' &&
    currentScreen !== 'login' &&
    currentScreen !== 'booking' &&
    currentScreen !== 'booking-confirmation' &&
    !currentScreen.includes('search') &&
    !currentScreen.includes('barber-profile') &&
    !currentScreen.includes('product-detail') &&
    !currentScreen.includes('checkout');

  return (
    <div className="size-full bg-white">
      {/* Screens */}
      {currentScreen === 'splash' && <SplashScreen />}
      
      {currentScreen === 'welcome' && (
        <WelcomeScreen onSelectRole={handleSelectRole} />
      )}
      
      {currentScreen === 'onboarding' && userRole && (
        <OnboardingCarousel
          userType={userRole}
          onComplete={handleCompleteOnboarding}
        />
      )}
      
      {currentScreen === 'login' && <LoginScreen onLogin={handleLogin} />}

      {/* Customer Screens */}
      {currentScreen === 'home' && (
        <HomeScreen onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'search' && (
        <SearchScreen onNavigate={handleNavigate} onBack={handleBack} />
      )}
      
      {currentScreen === 'barber-profile' && (
        <BarberProfileScreen
          data={screenData}
          onNavigate={handleNavigate}
          onBack={handleBack}
        />
      )}
      
      {currentScreen === 'booking' && (
        <BookingFlow
          data={screenData}
          onNavigate={handleNavigate}
          onBack={handleBack}
        />
      )}
      
      {currentScreen === 'booking-confirmation' && (
        <BookingConfirmation onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'shop' && (
        <ProductMarketplace onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'product-detail' && (
        <ProductDetailScreen
          data={screenData}
          onNavigate={handleNavigate}
          onBack={handleBack}
          onAddToCart={handleAddToCart}
        />
      )}
      
      {currentScreen === 'cart' && (
        <CartScreen
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onNavigate={handleNavigate}
        />
      )}
      
      {currentScreen === 'checkout' && (
        <CheckoutScreen
          cartItems={cartItems}
          onBack={handleBack}
          onComplete={handleCompleteCheckout}
        />
      )}
      
      {currentScreen === 'bookings' && (
        <CustomerProfile onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'profile' && (
        <CustomerProfile onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'rewards' && (
        <RewardsScreen onNavigate={handleNavigate} />
      )}

      {/* Business Screens */}
      {currentScreen === 'dashboard' && (
        <BusinessDashboard onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'calendar' && (
        <BusinessCalendar onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'services' && (
        <ServicesManagement onNavigate={handleNavigate} />
      )}

      {/* Bottom Navigation */}
      {showBottomNav && userRole && (
        <BottomNav
          userType={userRole}
          activeScreen={currentScreen}
          onNavigate={handleNavigate}
        />
      )}

      <Toaster />
    </div>
  );
}
