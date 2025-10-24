import { useState } from 'react';
import { Button } from '../ui/button';
import { Upload, Sparkles, TrendingUp, Calendar, BarChart3, Package, Target } from 'lucide-react';
import { Progress } from '../ui/progress';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface OnboardingCarouselProps {
  userType: 'customer' | 'business';
  onComplete: () => void;
}

const styleVibes = [
  { id: 'classic', label: 'Classic', emoji: '👔', image: 'professional man haircut' },
  { id: 'modern', label: 'Modern', emoji: '✨', image: 'modern fade haircut' },
  { id: 'creative', label: 'Creative', emoji: '🎨', image: 'creative hair design' },
  { id: 'rugged', label: 'Rugged', emoji: '🏔️', image: 'beard grooming man' },
];

export function OnboardingCarousel({ userType, onComplete }: OnboardingCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [profileProgress, setProfileProgress] = useState(0);

  const handleNext = () => {
    if (userType === 'customer') {
      if (currentSlide < 2) {
        setCurrentSlide(currentSlide + 1);
        if (currentSlide === 0 && selectedVibe) {
          setProfileProgress(33);
        } else if (currentSlide === 1) {
          setProfileProgress(66);
        }
      } else {
        setProfileProgress(100);
        onComplete();
      }
    } else {
      if (currentSlide < businessSlides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        onComplete();
      }
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  if (userType === 'business') {
    return <BusinessOnboarding currentSlide={currentSlide} onNext={handleNext} onSkip={handleSkip} />;
  }

  return (
    <div className="h-screen bg-[#F9F9F9] flex flex-col p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F5D4] rounded-full blur-3xl opacity-10"></div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex-1">
          <Progress value={profileProgress} className="h-2" />
          <p className="text-xs text-gray-500 mt-1">Profile Setup: {profileProgress}%</p>
        </div>
        <button onClick={handleSkip} className="text-gray-500 hover:text-[#141829] ml-4 text-sm font-medium">
          Skip
        </button>
      </div>

      {/* Slide 1: Style Quiz */}
      {currentSlide === 0 && (
        <div className="flex-1 flex flex-col gap-6 animate-bounce-in">
          <div className="text-center space-y-2">
            <h2 className="text-3xl text-[#141829] font-extrabold">First, What's Your Vibe?</h2>
            <p className="text-gray-600">This helps us personalize your experience</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {styleVibes.map((vibe) => (
              <button
                key={vibe.id}
                onClick={() => {
                  setSelectedVibe(vibe.id);
                  setProfileProgress(33);
                }}
                className={`relative rounded-2xl overflow-hidden h-44 transition-all ${
                  selectedVibe === vibe.id
                    ? 'ring-4 ring-[#00F5D4] scale-[1.02]'
                    : 'hover:scale-[1.02]'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#141829] via-[#141829]/50 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
                  <div className="text-3xl mb-1">{vibe.emoji}</div>
                  <div className="font-bold text-lg">{vibe.label}</div>
                </div>
                {selectedVibe === vibe.id && (
                  <div className="absolute top-3 right-3 z-20 w-6 h-6 bg-[#00F5D4] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#141829]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-[#EAEAEA]"></div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Slide 2: Profile Setup */}
      {currentSlide === 1 && (
        <div className="flex-1 flex flex-col gap-6 animate-bounce-in">
          <div className="text-center space-y-2">
            <h2 className="text-3xl text-[#141829] font-extrabold">Set Up Your Style Profile</h2>
            <p className="text-gray-600">Better recommendations start here</p>
          </div>

          <div className="flex-1 flex flex-col gap-4 mt-4">
            <div className="bg-white rounded-2xl p-6 border-2 border-dashed border-[#EAEAEA] hover:border-[#00F5D4] transition-all cursor-pointer group">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#EAEAEA] rounded-full flex items-center justify-center group-hover:bg-[#00F5D4]/10 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 group-hover:text-[#00F5D4]" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-[#141829]">Upload Your Photo</p>
                  <p className="text-sm text-gray-500">Help barbers know your current look</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 space-y-4">
              <div>
                <label className="text-sm font-semibold text-[#141829] mb-2 block">Hair Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Straight', 'Wavy', 'Curly', 'Coily'].map((type) => (
                    <button
                      key={type}
                      className="px-4 py-2 bg-[#EAEAEA] hover:bg-[#00F5D4] hover:text-[#141829] rounded-lg transition-colors font-medium text-sm"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#141829] mb-2 block">Preferred Length</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Short', 'Medium', 'Long'].map((length) => (
                    <button
                      key={length}
                      className="px-4 py-2 bg-[#EAEAEA] hover:bg-[#00F5D4] hover:text-[#141829] rounded-lg transition-colors font-medium text-sm"
                    >
                      {length}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide 3: Gamification Intro */}
      {currentSlide === 2 && (
        <div className="flex-1 flex flex-col gap-6 animate-bounce-in">
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF9900] to-[#ff7700] rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl text-[#141829] font-extrabold">Earn Rewards<br/>Every Visit</h2>
            <p className="text-gray-600">Stay consistent and unlock exclusive perks</p>
          </div>

          <div className="flex-1 space-y-4 mt-4">
            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#00F5D4]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00F5D4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#00F5D4]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#141829] mb-1">Style Points</h3>
                  <p className="text-sm text-gray-600">Earn 100 points with every booking</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#FF9900]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF9900]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#FF9900]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#141829] mb-1">Booking Streak</h3>
                  <p className="text-sm text-gray-600">Keep your streak alive for bonus rewards</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#D4AF37]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#141829] mb-1">Unlock Badges</h3>
                  <p className="text-sm text-gray-600">Collect achievements and show your style journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4 pt-6">
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-[#00F5D4]' : 'w-2 bg-[#EAEAEA]'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={handleNext}
          disabled={currentSlide === 0 && !selectedVibe}
          className="w-full bg-gradient-to-r from-[#00F5D4] to-[#00d4ba] hover:from-[#00d4ba] hover:to-[#00F5D4] text-[#141829] h-14 rounded-xl shadow-lg transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="font-bold">
            {currentSlide < 2 ? 'Continue' : 'Get Started'}
          </span>
        </Button>
      </div>
    </div>
  );
}

// Business onboarding component
const businessSlides = [
  {
    icon: Calendar,
    title: 'Manage Your Schedule',
    description: 'Keep track of all your appointments and manage your calendar effortlessly.',
  },
  {
    icon: BarChart3,
    title: 'Grow Your Business',
    description: 'Access detailed analytics and insights to help your business thrive.',
  },
  {
    icon: Package,
    title: 'Sell Your Products',
    description: 'Expand your revenue by selling products directly through the platform.',
  },
];

function BusinessOnboarding({ currentSlide, onNext, onSkip }: { currentSlide: number; onNext: () => void; onSkip: () => void }) {
  const slide = businessSlides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="h-screen bg-[#F9F9F9] flex flex-col p-8">
      <div className="flex justify-end mb-8">
        <button onClick={onSkip} className="text-gray-500 hover:text-[#141829] font-medium">
          Skip
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00F5D4]/20 to-[#00F5D4]/5 flex items-center justify-center">
          <Icon className="w-16 h-16 text-[#00F5D4]" strokeWidth={1.5} />
        </div>

        <div className="text-center space-y-4 max-w-sm">
          <h2 className="text-3xl text-[#141829] font-extrabold">{slide.title}</h2>
          <p className="text-gray-600 text-lg">{slide.description}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-center gap-2">
          {businessSlides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-[#00F5D4]' : 'w-2 bg-[#EAEAEA]'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-[#00F5D4] to-[#00d4ba] hover:from-[#00d4ba] hover:to-[#00F5D4] text-[#141829] h-14 rounded-xl shadow-lg"
        >
          <span className="font-bold">
            {currentSlide < businessSlides.length - 1 ? 'Next' : 'Get Started'}
          </span>
        </Button>
      </div>
    </div>
  );
}
