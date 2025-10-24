import { Calendar, Package, Heart, CreditCard, Settings, LogOut, Flame, Award, Trophy, Target, Zap, Crown, TrendingUp, Star } from 'lucide-react';
import { Card } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';

interface CustomerProfileProps {
  onNavigate: (screen: string) => void;
}

const upcomingAppointments = [
  {
    id: 1,
    service: "Men's Haircut",
    barber: 'Marcus Johnson',
    salon: 'Elite Barber Lounge',
    date: 'Oct 22, 2025',
    time: '2:00 PM',
    price: 50,
  },
  {
    id: 2,
    service: 'Beard Trim',
    barber: 'Alex Rivera',
    salon: 'Prestige Hair Studio',
    date: 'Oct 25, 2025',
    time: '4:30 PM',
    price: 25,
  },
];

const pastAppointments = [
  {
    id: 3,
    service: "Men's Haircut",
    barber: 'Sarah Chen',
    salon: 'Classic Cuts',
    date: 'Oct 10, 2025',
    time: '11:00 AM',
    price: 50,
    status: 'completed',
  },
];

const achievements = [
  {
    id: 1,
    name: 'First Visit',
    description: 'Complete your first booking',
    icon: Star,
    unlocked: true,
    date: 'Sept 15, 2025',
  },
  {
    id: 2,
    name: 'Week Warrior',
    description: 'Book 3 appointments in a week',
    icon: Flame,
    unlocked: true,
    date: 'Oct 2, 2025',
  },
  {
    id: 3,
    name: 'Style Explorer',
    description: 'Try 5 different services',
    icon: Target,
    unlocked: true,
    date: 'Oct 8, 2025',
  },
  {
    id: 4,
    name: 'Loyal Customer',
    description: 'Complete 10 bookings',
    icon: Award,
    unlocked: false,
    progress: 7,
    total: 10,
  },
  {
    id: 5,
    name: 'Streak Master',
    description: 'Maintain a 5-week booking streak',
    icon: Trophy,
    unlocked: false,
    progress: 3,
    total: 5,
  },
  {
    id: 6,
    name: 'VIP Status',
    description: 'Spend $500 total',
    icon: Crown,
    unlocked: false,
    progress: 375,
    total: 500,
  },
];

const menuItems = [
  { id: 'orders', icon: Package, label: 'My Orders', screen: 'orders' },
  { id: 'favorites', icon: Heart, label: 'Saved Barbers', screen: 'favorites' },
  { id: 'payment', icon: CreditCard, label: 'Payment Methods', screen: 'payment' },
  { id: 'settings', icon: Settings, label: 'Settings', screen: 'settings' },
];

export function CustomerProfile({ onNavigate }: CustomerProfileProps) {
  const bookingStreak = 3;
  const stylePoints = 850;
  const loyaltyTier = 'Silver';
  const nextTierPoints = 1000;
  const progressToNextTier = (stylePoints / nextTierPoints) * 100;
  const completedBookings = 7;

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-off-white">
      {/* Gamified Header */}
      <div className="bg-gradient-to-br from-deep-space-blue via-[#1a1f36] to-deep-space-blue px-4 py-8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-electric-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-streak-orange/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-20 h-20 border-4 border-electric-teal ring-4 ring-electric-teal/20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-br from-electric-teal to-[#00d4ba] text-deep-space-blue text-2xl font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-white">
              <h3 className="mb-1 text-white">John Doe</h3>
              <div className="flex items-center gap-2">
                <Badge className="bg-gold/20 text-gold border-gold/30">
                  {loyaltyTier} Member
                </Badge>
                <Badge className="bg-electric-teal/20 text-electric-teal border-electric-teal/30">
                  Level 5
                </Badge>
              </div>
            </div>
          </div>

          {/* Gamification Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {/* Booking Streak */}
            <Card className="bg-white/10 backdrop-blur border-white/20 p-3 rounded-xl">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-streak-orange/20 flex items-center justify-center mb-2">
                  <Flame className="w-5 h-5 text-streak-orange" />
                </div>
                <p className="text-2xl font-extrabold text-white">{bookingStreak}</p>
                <p className="text-xs text-gray-300">Day Streak</p>
              </div>
            </Card>

            {/* Style Points */}
            <Card className="bg-white/10 backdrop-blur border-white/20 p-3 rounded-xl">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-electric-teal/20 flex items-center justify-center mb-2">
                  <Zap className="w-5 h-5 text-electric-teal" />
                </div>
                <p className="text-2xl font-extrabold text-white">{stylePoints}</p>
                <p className="text-xs text-gray-300">Style Points</p>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="bg-white/10 backdrop-blur border-white/20 p-3 rounded-xl">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-2">
                  <Trophy className="w-5 h-5 text-gold" />
                </div>
                <p className="text-2xl font-extrabold text-white">3</p>
                <p className="text-xs text-gray-300">Achievements</p>
              </div>
            </Card>
          </div>

          {/* Progress to Next Tier */}
          <Card className="bg-white/10 backdrop-blur border-white/20 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-electric-teal" />
                <p className="text-sm text-white font-semibold">Next Tier: Gold</p>
              </div>
              <p className="text-sm text-gray-300">{stylePoints}/{nextTierPoints}</p>
            </div>
            <Progress value={progressToNextTier} className="h-2 bg-white/20" />
            <p className="text-xs text-gray-300 mt-2">
              {nextTierPoints - stylePoints} points to unlock Gold benefits
            </p>
          </Card>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="bg-white">
        <Tabs defaultValue="achievements" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="achievements"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-electric-teal data-[state=active]:bg-transparent data-[state=active]:text-electric-teal"
            >
              Achievements
            </TabsTrigger>
            <TabsTrigger
              value="appointments"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-electric-teal data-[state=active]:bg-transparent data-[state=active]:text-electric-teal"
            >
              Appointments
            </TabsTrigger>
            <TabsTrigger
              value="account"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-electric-teal data-[state=active]:bg-transparent data-[state=active]:text-electric-teal"
            >
              Account
            </TabsTrigger>
          </TabsList>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="px-4 py-6 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3>Your Achievements</h3>
                <Badge className="bg-electric-teal/10 text-electric-teal border-electric-teal/20">
                  {achievements.filter(a => a.unlocked).length}/{achievements.length}
                </Badge>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <Card
                      key={achievement.id}
                      className={`p-4 rounded-2xl transition-all ${
                        achievement.unlocked
                          ? 'border-electric-teal bg-gradient-to-r from-electric-teal/5 to-transparent'
                          : 'border-border opacity-60'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            achievement.unlocked
                              ? 'bg-electric-teal text-deep-space-blue'
                              : 'bg-soft-gray text-gray-400'
                          }`}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-1">
                            <p className="font-semibold">{achievement.name}</p>
                            {achievement.unlocked && (
                              <Badge className="bg-electric-teal text-deep-space-blue border-0">
                                ✓
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {achievement.description}
                          </p>
                          {achievement.unlocked ? (
                            <p className="text-xs text-gray-500">
                              Unlocked on {achievement.date}
                            </p>
                          ) : (
                            <div>
                              <div className="flex justify-between text-xs text-gray-500 mb-1">
                                <span>Progress</span>
                                <span>
                                  {achievement.progress}/{achievement.total}
                                </span>
                              </div>
                              <Progress
                                value={(achievement.progress! / achievement.total!) * 100}
                                className="h-1.5"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="p-5 rounded-2xl bg-gradient-to-br from-deep-space-blue to-[#1a1f36] text-white border-0">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-electric-teal/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-electric-teal" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Keep Going!</h4>
                  <p className="text-sm text-gray-300">
                    Book your next appointment to maintain your streak and earn more points!
                  </p>
                </div>
              </div>
              <Button
                onClick={() => onNavigate('home')}
                className="w-full bg-electric-teal hover:bg-electric-teal/90 text-deep-space-blue h-12 rounded-xl"
              >
                Book Now
              </Button>
            </Card>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="px-4 py-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-electric-teal" />
              <h3>Appointments</h3>
            </div>

            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="w-full mb-4 bg-soft-gray">
                <TabsTrigger value="upcoming" className="flex-1 data-[state=active]:bg-white">
                  Upcoming
                </TabsTrigger>
                <TabsTrigger value="past" className="flex-1 data-[state=active]:bg-white">
                  Past
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-3">
                {upcomingAppointments.map((appointment) => (
                  <Card key={appointment.id} className="p-4 rounded-2xl border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="mb-1">{appointment.service}</p>
                        <p className="text-sm text-gray-500">
                          {appointment.barber} • {appointment.salon}
                        </p>
                      </div>
                      <Badge className="bg-electric-teal/10 text-electric-teal border-electric-teal/20">
                        Upcoming
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4 text-gray-600">
                        <span>{appointment.date}</span>
                        <span>{appointment.time}</span>
                      </div>
                      <span className="text-electric-teal font-semibold">${appointment.price}</span>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="past" className="space-y-3">
                {pastAppointments.map((appointment) => (
                  <Card key={appointment.id} className="p-4 rounded-2xl border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="mb-1">{appointment.service}</p>
                        <p className="text-sm text-gray-500">
                          {appointment.barber} • {appointment.salon}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-success/10 text-success border-success/20"
                      >
                        Completed
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4 text-gray-600">
                        <span>{appointment.date}</span>
                        <span>{appointment.time}</span>
                      </div>
                      <span className="text-electric-teal font-semibold">${appointment.price}</span>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account" className="px-4 py-6">
            <h3 className="mb-4">Account Settings</h3>
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.screen)}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-soft-gray transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-600" />
                    <span className="flex-1 text-left">{item.label}</span>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                );
              })}
              
              <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-destructive/10 transition-colors text-destructive">
                <LogOut className="w-5 h-5" />
                <span className="flex-1 text-left">Log Out</span>
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
