import { Trophy, Star, Flame, Gift, Lock, TrendingUp, Target, Sparkles, Award } from 'lucide-react';
import { Progress } from '../ui/progress';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

interface RewardsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

const achievements = [
  { id: 1, name: 'First Booking', description: 'Book your first appointment', icon: '🎯', earned: true, date: 'Oct 1, 2025' },
  { id: 2, name: 'Style Explorer', description: 'Try 3 different services', icon: '🗺️', earned: true, date: 'Oct 5, 2025' },
  { id: 3, name: 'Loyal Customer', description: '5 bookings at one shop', icon: '❤️', earned: true, date: 'Oct 12, 2025' },
  { id: 4, name: 'Week Warrior', description: 'Book 1 appointment per week for a month', icon: '⚔️', earned: false },
  { id: 5, name: 'Product Enthusiast', description: 'Purchase 5 products', icon: '🛍️', earned: false },
  { id: 6, name: 'Review Master', description: 'Leave 10 reviews', icon: '✍️', earned: false },
  { id: 7, name: 'Early Bird', description: 'Book 5 morning appointments', icon: '🌅', earned: false },
  { id: 8, name: 'Style Icon', description: 'Reach Gold tier', icon: '👑', earned: false },
];

const rewards = [
  { id: 1, title: '10% Off Next Booking', points: 500, claimed: false },
  { id: 2, title: 'Free Beard Trim', points: 1000, claimed: false },
  { id: 3, title: '$5 Product Credit', points: 750, claimed: false },
  { id: 4, title: 'Priority Booking', points: 1500, claimed: false },
];

export function RewardsScreen({ onNavigate }: RewardsScreenProps) {
  const stylePoints = 850;
  const bookingStreak = 3;
  const loyaltyTier = 'Bronze';
  const nextTierPoints = 1500;
  const nextReward = 1000;
  const nextRewardName = 'Free Beard Trim';

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-[#F9F9F9]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#141829] via-[#1a1f36] to-[#141829] text-white px-6 py-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#00F5D4] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF9900] rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-6 h-6 text-[#00F5D4]" />
            <h1 className="text-2xl font-extrabold">Your Rewards</h1>
          </div>
          <p className="text-gray-300 mb-6">Keep earning to unlock exclusive perks</p>

          {/* Points Card */}
          <div className="bg-gradient-to-br from-[#00F5D4] to-[#00d4ba] rounded-2xl p-6 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-[#141829]/70 font-medium">Total Style Points</p>
                <p className="text-4xl font-extrabold text-[#141829]">{stylePoints}</p>
              </div>
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-[#141829]" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#141829]/80">
              <TrendingUp className="w-4 h-4" />
              <span className="font-semibold">+100 points from last booking</span>
            </div>
          </div>

          {/* Loyalty Tier */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#D4AF37]" />
                <span className="font-bold text-lg">Loyalty Tier: {loyaltyTier}</span>
              </div>
              <Badge className="bg-[#D4AF37] text-[#141829] border-0 px-3 py-1">
                {stylePoints}/{nextTierPoints}
              </Badge>
            </div>
            <Progress value={(stylePoints / nextTierPoints) * 100} className="h-2 mb-2" />
            <p className="text-sm text-gray-300">Earn {nextTierPoints - stylePoints} more points to reach Silver Tier</p>
          </div>
        </div>
      </div>

      {/* Booking Streak Section */}
      <div className="px-6 py-6">
        <Card className="bg-gradient-to-r from-[#FF9900] to-[#ff7700] text-white p-6 rounded-2xl shadow-lg border-0">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-6 h-6" />
                <h3 className="text-xl font-extrabold">Booking Streak</h3>
              </div>
              <p className="text-2xl font-extrabold mb-1">{bookingStreak} in a row! 🔥</p>
              <p className="text-sm text-white/80">Keep it up! Book again to maintain your streak.</p>
            </div>
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <span className="text-4xl font-extrabold">{bookingStreak}</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Progress to Next Reward */}
      <div className="px-6 pb-6">
        <h3 className="text-lg font-extrabold text-[#141829] mb-4">Next Reward</h3>
        <Card className="bg-white p-5 rounded-2xl shadow-md border border-[#EAEAEA]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00F5D4] to-[#00d4ba] rounded-xl flex items-center justify-center">
                <Gift className="w-6 h-6 text-[#141829]" />
              </div>
              <div>
                <p className="font-bold text-[#141829]">{nextRewardName}</p>
                <p className="text-sm text-gray-500">{nextReward} points required</p>
              </div>
            </div>
            <Badge className="bg-[#00F5D4]/10 text-[#00F5D4] border-0 px-3 py-1">
              {nextReward - stylePoints} left
            </Badge>
          </div>
          <Progress value={(stylePoints / nextReward) * 100} className="h-3" />
        </Card>
      </div>

      {/* Available Rewards */}
      <div className="px-6 pb-6">
        <h3 className="text-lg font-extrabold text-[#141829] mb-4">Available Rewards</h3>
        <div className="space-y-3">
          {rewards.map((reward) => {
            const canClaim = stylePoints >= reward.points;
            return (
              <Card
                key={reward.id}
                className={`p-4 rounded-2xl shadow-md border transition-all ${
                  canClaim
                    ? 'bg-white border-[#00F5D4] hover:shadow-lg cursor-pointer'
                    : 'bg-gray-100 border-[#EAEAEA]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        canClaim ? 'bg-[#00F5D4]/10' : 'bg-gray-200'
                      }`}
                    >
                      {canClaim ? (
                        <Gift className="w-5 h-5 text-[#00F5D4]" />
                      ) : (
                        <Lock className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <p className={`font-bold ${canClaim ? 'text-[#141829]' : 'text-gray-500'}`}>
                        {reward.title}
                      </p>
                      <p className="text-sm text-gray-500">{reward.points} points</p>
                    </div>
                  </div>
                  {canClaim ? (
                    <button className="px-4 py-2 bg-gradient-to-r from-[#00F5D4] to-[#00d4ba] text-[#141829] rounded-lg font-bold text-sm hover:shadow-lg transition-all">
                      Claim
                    </button>
                  ) : (
                    <Lock className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="px-6 pb-6">
        <h3 className="text-lg font-extrabold text-[#141829] mb-4">Achievements</h3>
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`rounded-2xl p-4 text-center transition-all ${
                achievement.earned
                  ? 'bg-gradient-to-br from-[#00F5D4]/20 to-[#00F5D4]/10 border-2 border-[#00F5D4]'
                  : 'bg-gray-100 border-2 border-transparent opacity-50'
              }`}
            >
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <p className={`text-xs font-bold mb-1 ${achievement.earned ? 'text-[#141829]' : 'text-gray-500'}`}>
                {achievement.name}
              </p>
              {achievement.earned && achievement.date && (
                <p className="text-xs text-gray-500">{achievement.date}</p>
              )}
              {!achievement.earned && <Lock className="w-4 h-4 text-gray-400 mx-auto mt-1" />}
            </div>
          ))}
        </div>
      </div>

      {/* How to Earn More */}
      <div className="px-6 pb-8">
        <h3 className="text-lg font-extrabold text-[#141829] mb-4">How to Earn More Points</h3>
        <div className="bg-white rounded-2xl p-5 shadow-md border border-[#EAEAEA] space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#00F5D4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-[#00F5D4]" />
            </div>
            <div>
              <p className="font-bold text-[#141829]">Book an appointment</p>
              <p className="text-sm text-gray-500">+100 points per booking</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF9900]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-[#FF9900]" />
            </div>
            <div>
              <p className="font-bold text-[#141829]">Leave a review</p>
              <p className="text-sm text-gray-500">+25 points per review</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Flame className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="font-bold text-[#141829]">Maintain your streak</p>
              <p className="text-sm text-gray-500">+50 bonus points per week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
