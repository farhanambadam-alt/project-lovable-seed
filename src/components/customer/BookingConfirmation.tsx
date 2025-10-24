import { useEffect, useState } from 'react';
import { CheckCircle, Flame, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface BookingConfirmationProps {
  onNavigate: (screen: string) => void;
}

export function BookingConfirmation({ onNavigate }: BookingConfirmationProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [animate, setAnimate] = useState(false);

  const pointsEarned = 100;
  const bookingStreak = 3;
  const totalPoints = 850 + pointsEarned;

  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => setAnimate(true), 100);
    setTimeout(() => setShowConfetti(false), 3000);
  }, []);

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-gradient-to-br from-[#141829] via-[#1a1f36] to-[#141829] relative">
      {/* Confetti Background Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-[#00F5D4] rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={`orange-${i}`}
              className="absolute w-2 h-2 bg-[#FF9900] rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 px-6 py-12">
        {/* Success Icon */}
        <div className={`flex justify-center mb-8 transition-all duration-500 ${animate ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-[#00F5D4] blur-3xl opacity-60 animate-pulse"></div>
            <div className="relative w-32 h-32 bg-gradient-to-br from-[#00F5D4] to-[#00d4ba] rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle className="w-20 h-20 text-[#141829]" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className={`text-center mb-12 transition-all duration-700 delay-200 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h1 className="text-4xl font-extrabold text-white mb-3">You're All Set!</h1>
          <p className="text-gray-300 text-lg">Your appointment has been confirmed</p>
        </div>

        {/* Rewards Earned */}
        <div className={`space-y-4 mb-8 transition-all duration-700 delay-300 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          {/* Points Earned */}
          <Card className="bg-gradient-to-br from-[#00F5D4] to-[#00d4ba] border-0 p-6 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#141829]" />
                </div>
                <div>
                  <p className="text-sm text-[#141829]/70 font-medium">Style Points Earned!</p>
                  <p className="text-3xl font-extrabold text-[#141829]">+{pointsEarned}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#141829]/70">New Total</p>
                <p className="text-2xl font-extrabold text-[#141829]">{totalPoints}</p>
              </div>
            </div>
          </Card>

          {/* Streak Maintained */}
          <Card className="bg-gradient-to-r from-[#FF9900] to-[#ff7700] border-0 p-6 rounded-2xl shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white/80 font-medium">Booking Streak</p>
                <p className="text-3xl font-extrabold text-white">{bookingStreak} in a row! 🔥</p>
              </div>
            </div>
          </Card>

          {/* Next Milestone */}
          <Card className="bg-white/10 backdrop-blur border-white/20 p-5 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div className="flex-1">
                <p className="text-white font-bold">Almost there!</p>
                <p className="text-sm text-gray-300">50 more points to unlock your next reward</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Appointment Details */}
        <div className={`mb-8 transition-all duration-700 delay-400 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h3 className="text-white font-bold mb-3">Appointment Details</h3>
          <Card className="bg-white/10 backdrop-blur border-white/20 p-5 rounded-2xl">
            <div className="space-y-3 text-white">
              <div className="flex justify-between">
                <span className="text-gray-300">Service</span>
                <span className="font-semibold">Men's Haircut</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Barber</span>
                <span className="font-semibold">Marcus Johnson</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Date & Time</span>
                <span className="font-semibold">Oct 22, 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Location</span>
                <span className="font-semibold">Elite Barber Lounge</span>
              </div>
              <div className="h-px bg-white/20 my-2"></div>
              <div className="flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-extrabold text-[#00F5D4]">$50.00</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div className={`space-y-3 transition-all duration-700 delay-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <Button
            onClick={() => onNavigate('rewards')}
            className="w-full bg-gradient-to-r from-[#00F5D4] to-[#00d4ba] hover:from-[#00d4ba] hover:to-[#00F5D4] text-[#141829] h-14 rounded-xl shadow-lg font-bold"
          >
            View My Rewards
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            onClick={() => onNavigate('bookings')}
            variant="outline"
            className="w-full border-2 border-white/20 text-white hover:bg-white/10 h-14 rounded-xl font-semibold"
          >
            View My Appointments
          </Button>
          <Button
            onClick={() => onNavigate('home')}
            variant="ghost"
            className="w-full text-gray-300 hover:text-white hover:bg-white/5 h-12 rounded-xl"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
