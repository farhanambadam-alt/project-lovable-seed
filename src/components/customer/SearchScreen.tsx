import { useState } from 'react';
import { Search, SlidersHorizontal, MapPin, Star, X } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

interface SearchScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  onBack: () => void;
}

const searchResults = [
  {
    id: 1,
    name: 'Elite Barber Lounge',
    type: 'Salon',
    rating: 4.8,
    reviews: 234,
    distance: '0.5 mi',
    price: '$$',
    services: ['Haircut', 'Shave', 'Beard Trim'],
    image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXJzaG9wfGVufDF8fHx8MTc2MDgwMDY2MXww&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    id: 2,
    name: 'Prestige Hair Studio',
    type: 'Salon',
    rating: 4.9,
    reviews: 456,
    distance: '1.2 mi',
    price: '$$$',
    services: ['Haircut', 'Coloring', 'Styling'],
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA4OTIyNTF8MA&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    id: 3,
    name: 'Classic Cuts',
    type: 'Barber',
    rating: 4.7,
    reviews: 189,
    distance: '2.0 mi',
    price: '$',
    services: ['Haircut', 'Shave'],
    image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXJzaG9wfGVufDF8fHx8MTc2MDgwMDY2MXww&ixlib=rb-4.1.0&q=80&w=600',
  },
];

const filterOptions = ['Price Range', 'Distance', 'Rating', 'Services'];

export function SearchScreen({ onNavigate, onBack }: SearchScreenProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-border px-4 py-4">
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search barbers, salons, services..."
            className="pl-10 pr-10 h-12 rounded-xl bg-light-gray border-0"
          />
          <button
            onClick={onBack}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Filter Tags */}
        {activeFilters.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-3">
            {activeFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="bg-gold/10 text-gold border-gold/20"
              >
                {filter}
                <button
                  onClick={() => toggleFilter(filter)}
                  className="ml-2"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}

        {/* Filter Button */}
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="w-full rounded-xl border-2"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="px-4 py-4 bg-light-gray">
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <Button
                key={option}
                variant={activeFilters.includes(option) ? 'default' : 'outline'}
                onClick={() => toggleFilter(option)}
                className={`rounded-full ${
                  activeFilters.includes(option)
                    ? 'bg-gold hover:bg-gold/90'
                    : 'border-2'
                }`}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="px-4 py-4">
        <p className="text-sm text-gray-600">
          {searchResults.length} results found
        </p>
      </div>

      {/* Search Results */}
      <div className="space-y-4 px-4 pb-4">
        {searchResults.map((result) => (
          <Card
            key={result.id}
            onClick={() => onNavigate('barber-profile', result)}
            className="overflow-hidden rounded-2xl cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-4">
              <ImageWithFallback
                src={result.image}
                alt={result.name}
                className="w-32 h-32 object-cover flex-shrink-0"
              />
              <div className="flex-1 p-4 pl-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="mb-1">{result.name}</p>
                    <p className="text-sm text-gray-500">{result.type}</p>
                  </div>
                  <span className="text-sm text-gray-600">{result.price}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="text-sm">{result.rating}</span>
                  </div>
                  <span className="text-sm text-gray-400">
                    ({result.reviews})
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {result.distance}
                  </span>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {result.services.slice(0, 2).map((service) => (
                    <Badge
                      key={service}
                      variant="secondary"
                      className="text-xs bg-light-gray"
                    >
                      {service}
                    </Badge>
                  ))}
                  {result.services.length > 2 && (
                    <Badge variant="secondary" className="text-xs bg-light-gray">
                      +{result.services.length - 2}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
