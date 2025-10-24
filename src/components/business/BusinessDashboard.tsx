import { DollarSign, Calendar, Users, Plus, Clock, Flame, Award, TrendingUp, Zap, Star, Crown } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Progress } from '../ui/progress';
import { Switch } from '../ui/switch';
import { useState } from 'react';

interface BusinessDashboardProps {
  onNavigate: (screen: string) => void;
}

const todayAppointments = [
  {
    id: 1,
    customer: 'John Smith',
    service: "Men's Haircut",
    time: '10:00 AM',
    duration: '45 min',
    price: 50,
    status: 'confirmed',
    loyaltyTier: 'Gold',
    visits: 28,
  },
  {
    id: 2,
    customer: 'Michael Brown',
    service: 'Beard Trim',
    time: '11:00 AM',
    duration: '20 min',
    price: 25,
    status: 'confirmed',
    loyaltyTier: 'Silver',
    visits: 12,
  },
  {
    id: 3,
    customer: 'David Wilson',
    service: 'Hot Shave',
    time: '12:30 PM',
    duration: '30 min',
    price: 35,
    status: 'pending',
    loyaltyTier: 'Bronze',
    visits: 5,
  },
  {
    id: 4,
    customer: 'James Taylor',
    service: 'Hair Coloring',
    time: '2:00 PM',
    duration: '90 min',
    price: 120,
    status: 'confirmed',
    loyaltyTier: 'Platinum',
    visits: 52,
  },
];

const loyaltyCustomers = [
  {
    id: 1,
    name: 'James Taylor',
    tier: 'Platinum',
    visits: 52,
    totalSpent: 2340,
    lastVisit: '2 days ago',
  },
  {
    id: 2,
    name: 'John Smith',
    tier: 'Gold',
    visits: 28,
    totalSpent: 1250,
    lastVisit: '5 days ago',
  },
  {
    id: 3,
    name: 'Robert Chen',
    tier: 'Gold',
    visits: 25,
    totalSpent: 1180,
    lastVisit: '1 week ago',
  },
];

const flashDeals = [
  {
    id: 1,
    service: 'Beard Trim',
    originalPrice: 25,
    dealPrice: 18,
    discount: 28,
    active: true,
    bookings: 12,
    expiresIn: '2h 30m',
  },
  {
    id: 2,
    service: 'Hot Shave',
    originalPrice: 35,
    dealPrice: 25,
    discount: 29,
    active: false,
    bookings: 0,
    expiresIn: '0h',
  },
];

export function BusinessDashboard({ onNavigate }: BusinessDashboardProps) {
  const [deals, setDeals] = useState(flashDeals);

  const toggleDeal = (dealId: number) => {
    setDeals(deals.map(deal => 
      deal.id === dealId ? { ...deal, active: !deal.active } : deal
    ));
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum':
        return 'text-gray-400';
      case 'Gold':
        return 'text-gold';
      case 'Silver':
        return 'text-gray-500';
      default:
        return 'text-amber-600';
    }
  };

  const getTierBgColor = (tier: string) => {
    switch (tier) {
      case 'Platinum':
        return 'bg-gray-400/10';
      case 'Gold':
        return 'bg-gold/10';
      case 'Silver':
        return 'bg-gray-500/10';
      default:
        return 'bg-amber-600/10';
    }
  };

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-off-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-deep-space-blue via-[#1a1f36] to-deep-space-blue px-4 py-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-electric-teal/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-white mb-2">Today's Schedule</h2>
          <p className="text-gray-300 text-sm">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="px-4 py-6 grid grid-cols-2 gap-4">
        <Card className="p-4 rounded-2xl border-border bg-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-electric-teal/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-electric-teal" />
            </div>
          </div>
          <p className="text-2xl mb-1">$230</p>
          <p className="text-sm text-gray-500">Today's Earnings</p>
        </Card>

        <Card className="p-4 rounded-2xl border-border bg-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-streak-orange/10 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-streak-orange" />
            </div>
          </div>
          <p className="text-2xl mb-1">{todayAppointments.length}</p>
          <p className="text-sm text-gray-500">Appointments</p>
        </Card>

        <Card className="p-4 rounded-2xl border-border bg-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-success" />
            </div>
          </div>
          <p className="text-2xl mb-1">3</p>
          <p className="text-sm text-gray-500">New Bookings</p>
        </Card>

        <Card className="p-4 rounded-2xl border-border bg-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-gold" />
            </div>
          </div>
          <p className="text-2xl mb-1">24</p>
          <p className="text-sm text-gray-500">Loyal Members</p>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="h-12 rounded-xl border-2 border-electric-teal text-electric-teal hover:bg-electric-teal/10"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Walk-in
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-xl border-2"
          >
            <Clock className="w-5 h-5 mr-2" />
            Block Time
          </Button>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="bg-white">
        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent px-4">
            <TabsTrigger
              value="appointments"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-electric-teal data-[state=active]:bg-transparent data-[state=active]:text-electric-teal"
            >
              Appointments
            </TabsTrigger>
            <TabsTrigger
              value="loyalty"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-electric-teal data-[state=active]:bg-transparent data-[state=active]:text-electric-teal"
            >
              Loyalty
            </TabsTrigger>
            <TabsTrigger
              value="deals"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-electric-teal data-[state=active]:bg-transparent data-[state=active]:text-electric-teal"
            >
              Flash Deals
            </TabsTrigger>
          </TabsList>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="px-4 py-6">
            <div className="flex items-center justify-between mb-4">
              <h3>Today's Appointments</h3>
              <Button
                variant="ghost"
                onClick={() => onNavigate('calendar')}
                className="text-electric-teal hover:text-electric-teal/80"
              >
                View All
              </Button>
            </div>

            <div className="space-y-3">
              {todayAppointments.map((appointment) => (
                <Card key={appointment.id} className="p-4 rounded-2xl border-border">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-12 h-12 bg-soft-gray">
                      <AvatarFallback className="text-deep-space-blue">
                        {appointment.customer
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <p>{appointment.customer}</p>
                            <Badge className={`${getTierBgColor(appointment.loyaltyTier)} ${getTierColor(appointment.loyaltyTier)} border-0 text-xs`}>
                              {appointment.loyaltyTier}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">
                            {appointment.service}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {appointment.visits} visits
                          </p>
                        </div>
                        <span className="text-electric-teal font-semibold ml-2">${appointment.price}</span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{appointment.time}</span>
                        </div>
                        <span>{appointment.duration}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            appointment.status === 'confirmed'
                              ? 'bg-success/10 text-success'
                              : 'bg-streak-orange/10 text-streak-orange'
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Loyalty Tab */}
          <TabsContent value="loyalty" className="px-4 py-6 space-y-6">
            {/* Top Customers */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3>Top Loyal Customers</h3>
                <Badge className="bg-gold/10 text-gold border-gold/20">
                  VIP
                </Badge>
              </div>

              <div className="space-y-3">
                {loyaltyCustomers.map((customer, index) => (
                  <Card key={customer.id} className="p-4 rounded-2xl border-border relative overflow-hidden">
                    {index === 0 && (
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-full blur-2xl"></div>
                    )}
                    <div className="relative flex items-start gap-3">
                      <Avatar className="w-12 h-12 bg-soft-gray">
                        <AvatarFallback className="text-deep-space-blue">
                          {customer.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p>{customer.name}</p>
                          {index === 0 && <Crown className="w-4 h-4 text-gold" />}
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className={`${getTierBgColor(customer.tier)} ${getTierColor(customer.tier)} border-0 text-xs`}>
                            {customer.tier}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {customer.visits} visits
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Total Spent</span>
                          <span className="font-semibold text-electric-teal">
                            ${customer.totalSpent}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          Last visit: {customer.lastVisit}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Loyalty Program Stats */}
            <Card className="p-5 rounded-2xl bg-gradient-to-br from-deep-space-blue to-[#1a1f36] text-white border-0">
              <h4 className="text-white mb-4">Loyalty Program Impact</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-electric-teal/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-electric-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Retention Rate</p>
                      <p className="text-xl font-bold">87%</p>
                    </div>
                  </div>
                  <Badge className="bg-success/20 text-success border-success/30">
                    +12%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-streak-orange/20 flex items-center justify-center">
                      <Flame className="w-5 h-5 text-streak-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Active Streaks</p>
                      <p className="text-xl font-bold">42</p>
                    </div>
                  </div>
                  <Badge className="bg-streak-orange/20 text-streak-orange border-streak-orange/30">
                    Hot
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <Award className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Total Members</p>
                      <p className="text-xl font-bold">156</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Flash Deals Tab */}
          <TabsContent value="deals" className="px-4 py-6 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3>Flash Deals</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Create time-limited offers to boost bookings
                </p>
              </div>
            </div>

            {/* Active Deals */}
            <div className="space-y-4">
              {deals.map((deal) => (
                <Card key={deal.id} className={`p-5 rounded-2xl transition-all ${
                  deal.active
                    ? 'border-2 border-streak-orange bg-gradient-to-r from-streak-orange/5 to-transparent'
                    : 'border-border'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4>{deal.service}</h4>
                        {deal.active && (
                          <Badge className="bg-streak-orange text-white border-0 animate-pulse">
                            <Zap className="w-3 h-3 mr-1" />
                            Live
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-bold text-electric-teal">
                          ${deal.dealPrice}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          ${deal.originalPrice}
                        </span>
                        <Badge className="bg-success/10 text-success border-success/20">
                          {deal.discount}% OFF
                        </Badge>
                      </div>
                      {deal.active && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Bookings</span>
                            <span className="font-semibold">{deal.bookings}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-streak-orange" />
                            <span className="text-sm font-semibold text-streak-orange">
                              Expires in {deal.expiresIn}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    <Switch
                      checked={deal.active}
                      onCheckedChange={() => toggleDeal(deal.id)}
                    />
                  </div>
                  
                  {deal.active && (
                    <div className="pt-4 border-t border-border">
                      <Progress value={(deal.bookings / 20) * 100} className="h-2 mb-2" />
                      <p className="text-xs text-gray-500">
                        {20 - deal.bookings} slots remaining
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Create New Deal */}
            <Button
              className="w-full bg-gradient-to-r from-streak-orange to-[#ff7700] hover:from-[#ff7700] hover:to-streak-orange text-white h-14 rounded-xl"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create New Flash Deal
            </Button>

            {/* Flash Deal Tips */}
            <Card className="p-5 rounded-2xl bg-gradient-to-br from-electric-teal/10 to-transparent border-electric-teal/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-electric-teal/20 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-electric-teal" />
                </div>
                <div>
                  <h4 className="mb-2">Flash Deal Tips</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Best for filling slow time slots</li>
                    <li>• Create urgency with 2-4 hour windows</li>
                    <li>• Limit to 15-20 bookings for scarcity</li>
                    <li>• Offer 20-30% discounts for impact</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
