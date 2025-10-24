import { Button } from '../ui/button';
import { Scissors, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onSelectRole: (role: 'customer' | 'business') => void;
}

export function WelcomeScreen({ onSelectRole }: WelcomeScreenProps) {
  return (
    <div className="h-screen bg-gradient-to-br from-[#141829] via-[#1a1f36] to-[#141829] flex flex-col items-center justify-between p-8 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#00F5D4] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-[#FF9900] rounded-full blur-3xl opacity-20 animate-pulse delay-700"></div>

      <div className="flex-1 flex flex-col items-center justify-center gap-8 z-10">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <Scissors className="w-20 h-20 text-[#00F5D4] relative z-10" strokeWidth={1.5} />
            <Sparkles className="w-8 h-8 text-[#FF9900] absolute -top-2 -right-2 animate-pulse" />
          </div>
          <h1 className="text-5xl text-[#00F5D4] text-center font-extrabold leading-tight">
            Unlock Your<br />Best Look
          </h1>
        </div>
        <p className="text-center text-gray-300 max-w-sm text-lg">
          Your personalized style companion for discovering barbers and maintaining your perfect look.
        </p>
      </div>

      <div className="w-full max-w-sm space-y-4 z-10">
        <Button
          onClick={() => onSelectRole('customer')}
          className="w-full bg-gradient-to-r from-[#00F5D4] to-[#00d4ba] hover:from-[#00d4ba] hover:to-[#00F5D4] text-[#141829] h-14 rounded-xl shadow-lg shadow-[#00F5D4]/30 transition-all hover:shadow-xl hover:shadow-[#00F5D4]/50 hover:scale-[1.02] active:scale-95"
        >
          <span className="font-bold">Find a Barber or Salon</span>
        </Button>
        <Button
          onClick={() => onSelectRole('business')}
          variant="outline"
          className="w-full border-2 border-[#00F5D4] text-[#00F5D4] hover:bg-[#00F5D4]/10 h-14 rounded-xl transition-all hover:scale-[1.02] active:scale-95"
        >
          <span className="font-semibold">I am a Business Owner</span>
        </Button>
      </div>
    </div>
  );
}
