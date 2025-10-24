import { Home, Calendar, Trophy, User, LayoutDashboard, Scissors } from 'lucide-react';

interface BottomNavProps {
  userType: 'customer' | 'business';
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function BottomNav({ userType, activeScreen, onNavigate }: BottomNavProps) {
  const customerItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'bookings', icon: Calendar, label: 'Bookings' },
    { id: 'rewards', icon: Trophy, label: 'Rewards' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  const businessItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'services', icon: Scissors, label: 'Services' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  const items = userType === 'customer' ? customerItems : businessItems;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#EAEAEA] z-50 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-around px-2 py-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 transition-all rounded-xl ${
                isActive 
                  ? 'text-[#00F5D4] bg-[#00F5D4]/10' 
                  : 'text-gray-500 hover:text-[#141829]'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform`} />
              <span className={`text-xs ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
