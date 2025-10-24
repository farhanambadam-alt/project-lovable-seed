import { Search, MapPin, Star, ChevronRight, Flame, TrendingUp, Trophy, Zap } from 'lucide-react';
import { Input } from '../ui/input';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

interface HomeScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

const recentBarbers = [
  {
    id: 1,
    name: 'Marcus Johnson',
    specialty: 'Classic Cuts',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1759134248487-e8baaf31e33e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBoYWlyY3V0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDg0NDY5N3ww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 2,
    name: 'Alex Rivera',
    specialty: 'Modern Fades',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1759134248487-e8baaf31e33e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBoYWlyY3V0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDg0NDY5N3ww&ixlib=rb-4.1.0&q=80&w=400',
  },
];

const forYouBarbers = [
  {
    id: 3,
    name: 'Sarah Chen',
    specialty: 'Hair Styling',
    rating: 5.0,
    match: 95,
    image: 'https://images.unsplash.com/photo-1759134248487-e8baaf31e33e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBoYWlyY3V0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDg0NDY5N3ww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 4,
    name: 'James Wilson',
    specialty: 'Modern Cuts',
    rating: 4.9,
    match: 92,
    image: 'https://images.unsplash.com/photo-1759134248487-e8baaf31e33e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBoYWlyY3V0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDg0NDY5N3ww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 5,
    name: 'Mike Torres',
    specialty: 'Fade Expert',
    rating: 4.8,
    match: 88,
    image: 'https://images.unsplash.com/photo-1759134248487-e8baaf31e33e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBoYWlyY3V0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDg0NDY5N3ww&ixlib=rb-4.1.0&q=80&w=400',
  },
];

const trendingBarbers = [
  {
    id: 6,
    name: 'Elite Barber Lounge',
    service: 'The Fade',
    bookings: 47,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXJzaG9wfGVufDF8fHx8MTc2MDgwMDY2MXww&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    id: 7,
    name: 'Prestige Hair Studio',
    service: 'Classic Taper',
    bookings: 38,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA4OTIyNTF8MA&ixlib=rb-4.1.0&q=80&w=600',
  },
];

const styleChallenge = {
  service: 'Beard Trim',
  description: 'Try something new and earn a badge!',
  reward: 'Adventurer Badge + 150 Points',
  image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHRyaW18ZW58MXx8fHwxNzYwODkyMjU0fDA&ixlib=rb-4.1.0&q=80&w=600',
};

const highlyRatedBarbers = [
  {
    id: 8,
    name: 'The Cutting Edge',
    specialty: 'Full Service',
    rating: 5.0,
    distance: '0.3 mi',
    image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXJzaG9wfGVufDF8fHx8MTc2MDgwMDY2MXww&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    id: 9,
    name: 'Style Masters',
    specialty: 'Premium Grooming',
    rating: 4.9,
    distance: '0.7 mi',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA4OTIyNTF8MA&ixlib=rb-4.1.0&q=80&w=600',
  },
];

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const bookingStreak = 3;
  const userName = 'Alex';

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-[#F9F9F9]">
      {/* Header with Streak */}
      <div className="sticky top-0 z-10 bg-[#141829] text-white px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-400">Hey, {userName}! 👋</p>
            <h2 className="text-xl font-extrabold">Ready for Your Next Look?</h2>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#FF9900] to-[#ff7700] px-3 py-2 rounded-xl shadow-lg">
            <Flame className="w-5 h-5 text-white" />
            <div className="text-right">
              <p className="text-xs font-medium">Streak</p>
              <p className="text-lg font-extrabold leading-none">{bookingStreak}</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search barbers, salons, services..."
            className="pl-10 h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            onClick={() => onNavigate('search')}
          />
        </div>
      </div>

      {/* Book Again Section */}
      {recentBarbers.length > 0 && (
        <div className="py-6">
          <div className="flex items-center justify-between px-4 mb-3">
            <h3 className="text-xl font-extrabold text-[#141829]">Book Again</h3>
            <button className="text-[#00F5D4] text-sm flex items-center gap-1 font-semibold">
              See All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-gray-500 px-4 mb-4">Your favorite barbers</p>
          <div className="flex gap-4 overflow-x-auto px-4 scrollbar-hide">
            {recentBarbers.map((barber) => (
              <div
                key={barber.id}
                onClick={() => onNavigate('barber-profile', barber)}
                className="flex-shrink-0 w-48 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform bg-white shadow-md"
              >
                <div className="relative h-56">
                  <ImageWithFallback
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141829] via-[#141829]/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold mb-1">{barber.name}</p>
                    <p className="text-xs text-gray-300 mb-2">{barber.specialty}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#FF9900] text-[#FF9900]" />
                      <span className="text-sm text-white font-semibold">{barber.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* For You: Top Picks */}
      <div className="py-6 bg-white">
        <div className="flex items-center justify-between px-4 mb-3">
          <div>
            <h3 className="text-xl font-extrabold text-[#141829]">For You: Top Picks in New York</h3>
            <p className="text-sm text-gray-500">Based on your style preferences</p>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 scrollbar-hide mt-4">
          {forYouBarbers.map((barber) => (
            <div
              key={barber.id}
              onClick={() => onNavigate('barber-profile', barber)}
              className="flex-shrink-0 w-64 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform bg-[#F9F9F9] shadow-md border-2 border-transparent hover:border-[#00F5D4]"
            >
              <div className="relative h-72">
                <ImageWithFallback
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#00F5D4] text-[#141829] px-3 py-1 rounded-full text-xs font-bold">
                  {barber.match}% Match
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#141829] via-[#141829]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-extrabold text-lg mb-1">{barber.name}</p>
                  <p className="text-sm text-gray-300 mb-2">{barber.specialty}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#FF9900] text-[#FF9900]" />
                    <span className="text-sm text-white font-semibold">{barber.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Now */}
      <div className="py-6">
        <div className="flex items-center gap-2 px-4 mb-3">
          <TrendingUp className="w-5 h-5 text-[#FF9900]" />
          <h3 className="text-xl font-extrabold text-[#141829]">Trending Now: The Fade</h3>
        </div>
        <p className="text-sm text-gray-500 px-4 mb-4">Most booked service this week</p>
        <div className="flex gap-4 overflow-x-auto px-4 scrollbar-hide">
          {trendingBarbers.map((barber) => (
            <div
              key={barber.id}
              onClick={() => onNavigate('barber-profile', barber)}
              className="flex-shrink-0 w-56 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform bg-white shadow-md"
            >
              <div className="relative h-64">
                <ImageWithFallback
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-[#FF9900] text-white border-0">
                  <Zap className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
                <div className="absolute inset-0 bg-gradient-to-t from-[#141829] via-[#141829]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold mb-1">{barber.name}</p>
                  <p className="text-xs text-[#00F5D4] mb-2">{barber.service}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#FF9900] text-[#FF9900]" />
                      <span className="text-sm text-white font-semibold">{barber.rating}</span>
                    </div>
                    <span className="text-xs text-gray-300">{barber.bookings} bookings this week</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Style Challenge */}
      <div className="py-6 px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-[1.01] transition-transform" onClick={() => onNavigate('search')}>
          <ImageWithFallback
            src={styleChallenge.image}
            alt={styleChallenge.service}
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141829] via-[#141829]/70 to-transparent"></div>
          <div className="absolute top-3 left-3">
            <Badge className="bg-gradient-to-r from-[#D4AF37] to-[#b8941f] text-white border-0">
              <Trophy className="w-3 h-3 mr-1" />
              Style Challenge
            </Badge>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-white font-extrabold text-xl mb-2">Try a {styleChallenge.service}!</h3>
            <p className="text-gray-300 text-sm mb-3">{styleChallenge.description}</p>
            <div className="flex items-center gap-2">
              <div className="bg-[#00F5D4] text-[#141829] px-4 py-2 rounded-lg font-bold text-sm">
                {styleChallenge.reward}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highly Rated Near You */}
      <div className="py-6 bg-white">
        <div className="flex items-center justify-between px-4 mb-4">
          <h3 className="text-xl font-extrabold text-[#141829]">Highly Rated Near You</h3>
          <button className="text-[#00F5D4] text-sm flex items-center gap-1 font-semibold">
            See All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4 px-4">
          {highlyRatedBarbers.map((barber) => (
            <div
              key={barber.id}
              onClick={() => onNavigate('barber-profile', barber)}
              className="rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow bg-[#F9F9F9] border border-[#EAEAEA]"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141829]/70 to-transparent"></div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-extrabold text-[#141829] mb-1">{barber.name}</p>
                    <p className="text-sm text-gray-500">{barber.specialty} • {barber.distance} away</p>
                  </div>
                  <div className="flex items-center gap-1 bg-[#00F5D4]/10 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 fill-[#00F5D4] text-[#00F5D4]" />
                    <span className="text-sm font-bold text-[#141829]">{barber.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
