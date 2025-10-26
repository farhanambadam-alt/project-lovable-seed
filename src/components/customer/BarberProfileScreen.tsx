fffffffffffffffffffffffffffimport { useState } from 'react';
import { ArrowLeft, Heart, Star, MapPin, Clock, Phone, Mail, Play, Flame, Award, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

interface BarberProfileScreenProps {
  data: any;
  onNavigate: (screen: string, data?: any) => void;
  onBack: () => void;
}

const services = [
  { id: 1, name: "Men's Haircut", duration: '45 min', price: 50 },
  { id: 2, name: 'Beard Trim', duration: '20 min', price: 25 },
  { id: 3, name: 'Hot Shave', duration: '30 min', price: 35 },
  { id: 4, name: 'Hair Coloring', duration: '90 min', price: 120 },
];

const products = [
  {
    id: 1,
    name: 'Premium Pomade',
    brand: 'StyleCo',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1686121544157-6f178a23d584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwcHJvZHVjdHMlMjBib3R0bGVzfGVufDF8fHx8MTc2MDg3MjA2OXww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 2,
    name: 'Styling Gel',
    brand: 'GroomPro',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1638609269267-f0128098a809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMGdlbHxlbnwxfHx8fDE3NjA4OTIyNTN8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
];

const reviews = [
  {
    id: 1,
    author: 'John D.',
    rating: 5,
    date: '2 days ago',
    comment: 'Excellent service! Best haircut I\'ve had in years. Highly recommend.',
  },
  {
    id: 2,
    author: 'Michael R.',
    rating: 5,
    date: '1 week ago',
    comment: 'Professional and friendly. The attention to detail is outstanding.',
  },
  {
    id: 3,
    author: 'David L.',
    rating: 4,
    date: '2 weeks ago',
    comment: 'Great experience overall. Will definitely be coming back.',
  },
];

const loyaltyBenefits = [
  { tier: 'Bronze', visits: 3, discount: 5, current: false },
  { tier: 'Silver', visits: 10, discount: 10, current: true },
  { tier: 'Gold', visits: 25, discount: 15, current: false },
  { tier: 'Platinum', visits: 50, discount: 20, current: false },
];

export function BarberProfileScreen({ data, onNavigate, onBack }: BarberProfileScreenProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  // Provide default values if data is null
  const barberData = data || {
    name: 'Elite Barber Lounge',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXJzaG9wfGVufDF8fHx8MTc2MDgwMDY2MXww&ixlib=rb-4.1.0&q=80&w=800'
  };
  
  const currentVisits = 12;
  const nextTierVisits = 25;
  const progressToNextTier = (currentVisits / nextTierVisits) * 100;

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-off-white">
      {/* Video/Image Header */}
      <div className="relative">
        {showVideo ? (
          <div className="relative w-full h-64 bg-black">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
          </div>
        ) : (
          <>
            <ImageWithFallback
              src={barberData.image}
              alt={barberData.name}
              className="w-full h-64 object-cover"
            />
            {/* Video Play Button Overlay */}
            <button
              onClick={() => setShowVideo(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-electric-teal/90 backdrop-blur flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-deep-space-blue ml-1" fill="currentColor" />
              </div>
            </button>
          </>
        )}
        
        {!showVideo && (
          <>
            <button
              onClick={onBack}
              className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
                }`}
              />
            </button>
          </>
        )}
      </div>

      {/* Info Section */}
      <div className="px-4 py-6 border-b border-border bg-white">
        <h2 className="mb-2">{barberData.name}</h2>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-gold text-gold" />
            <span>{barberData.rating || '4.8'}</span>
            <span className="text-gray-500">(234 reviews)</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">123 Main Street, New York, NY 10001</span>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="services" className="w-full bg-white">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="services"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-electric-teal data-[state=active]:bg-transparent data-[state=active]:text-electric-teal"
          >
            Services
          </TabsTrigger>
          <TabsTrigger
            value="loyalty"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-electric-teal data-[state=active]:bg-transparent data-[state=active]:text-electric-teal"
          >
            Loyalty
          </TabsTrigger>
          <TabsTrigger
            value="products"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-electric-teal data-[state=active]:bg-transparent data-[state=active]:text-electric-teal"
          >
            Products
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-electric-teal data-[state=active]:bg-transparent data-[state=active]:text-electric-teal"
          >
            Reviews
          </TabsTrigger>
          <TabsTrigger
            value="about"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-electric-teal data-[state=active]:bg-transparent data-[state=active]:text-electric-teal"
          >
            About
          </TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="space-y-3 px-4 mt-4">
          {services.map((service) => (
            <Card key={service.id} className="p-4 rounded-2xl border-border">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="mb-1">{service.name}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <span className="text-electric-teal font-semibold">${service.price}</span>
                  </div>
                </div>
                <Button
                  onClick={() => onNavigate('booking', { service })}
                  className="bg-electric-teal hover:bg-electric-teal/90 text-deep-space-blue rounded-xl"
                >
                  Book
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="loyalty" className="px-4 mt-4 space-y-6">
          {/* Current Loyalty Status */}
          <Card className="p-6 rounded-2xl bg-gradient-to-br from-electric-teal to-[#00d4ba] border-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-white">
                <p className="text-sm opacity-90">Your Status</p>
                <p className="text-2xl font-bold">Silver Member</p>
              </div>
              <div className="text-right text-white">
                <p className="text-3xl font-extrabold">10%</p>
                <p className="text-sm opacity-90">Discount</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-white text-sm">
                <span>{currentVisits} visits</span>
                <span>{nextTierVisits} visits to Gold</span>
              </div>
              <Progress value={progressToNextTier} className="h-2 bg-white/20" />
            </div>
          </Card>

          {/* Loyalty Tiers */}
          <div>
            <h4 className="mb-4">Loyalty Tiers</h4>
            <div className="space-y-3">
              {loyaltyBenefits.map((tier, index) => (
                <Card
                  key={tier.tier}
                  className={`p-4 rounded-2xl transition-all ${
                    tier.current
                      ? 'border-2 border-electric-teal bg-electric-teal/5'
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          tier.tier === 'Platinum'
                            ? 'bg-gray-400/20'
                            : tier.tier === 'Gold'
                            ? 'bg-gold/20'
                            : tier.tier === 'Silver'
                            ? 'bg-gray-300/30'
                            : 'bg-amber-600/20'
                        }`}
                      >
                        <Award
                          className={`w-6 h-6 ${
                            tier.tier === 'Platinum'
                              ? 'text-gray-400'
                              : tier.tier === 'Gold'
                              ? 'text-gold'
                              : tier.tier === 'Silver'
                              ? 'text-gray-500'
                              : 'text-amber-600'
                          }`}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{tier.tier}</p>
                          {tier.current && (
                            <Badge className="bg-electric-teal text-deep-space-blue border-0">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{tier.visits} visits required</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-electric-teal">{tier.discount}%</p>
                      <p className="text-xs text-gray-500">discount</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Exclusive Perks */}
          <Card className="p-5 rounded-2xl bg-deep-space-blue text-white border-0">
            <div className="flex items-center gap-3 mb-3">
              <Flame className="w-6 h-6 text-streak-orange" />
              <h4 className="text-white">Exclusive Perks</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-electric-teal mt-1">•</span>
                <span>Priority booking for peak hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-electric-teal mt-1">•</span>
                <span>Birthday month special discount</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-electric-teal mt-1">•</span>
                <span>Early access to new products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-electric-teal mt-1">•</span>
                <span>Complimentary beverage with every visit</span>
              </li>
            </ul>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="px-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <Card
                key={product.id}
                onClick={() => onNavigate('product-detail', product)}
                className="overflow-hidden rounded-2xl cursor-pointer hover:shadow-lg transition-shadow border-border"
              >
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                  <p className="text-sm line-clamp-1 mb-2">{product.name}</p>
                  <p className="text-electric-teal font-semibold">${product.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-4 px-4 mt-4">
          {reviews.map((review) => (
            <Card key={review.id} className="p-4 rounded-2xl border-border">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="mb-1">{review.author}</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-sm text-gray-600">{review.comment}</p>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="about" className="px-4 mt-4 space-y-6">
          <div>
            <h4 className="mb-3">About</h4>
            <p className="text-gray-600">
              Professional barber shop offering premium grooming services for men.
              We specialize in classic and modern haircuts, beard grooming, and
              hot towel shaves. Our experienced team is dedicated to providing
              exceptional service in a relaxed, welcoming environment.
            </p>
          </div>

          <div>
            <h4 className="mb-3">Business Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-sm">info@elitebarber.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-sm">
                  123 Main Street, New York, NY 10001
                </span>
              </div>
            </div>
          </div>

          <div className="h-48 bg-gray-200 rounded-2xl flex items-center justify-center">
            <p className="text-gray-500">Map View</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
