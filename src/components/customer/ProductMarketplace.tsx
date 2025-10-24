import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';

interface ProductMarketplaceProps {
  onNavigate: (screen: string, data?: any) => void;
}

const categories = [
  'All',
  'Shampoos',
  'Conditioners',
  'Gels',
  'Pomades',
  'Oils',
  'Tools',
];

const products = [
  {
    id: 1,
    name: 'Premium Hair Pomade',
    brand: 'StyleCo',
    price: 24.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1686121544157-6f178a23d584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwcHJvZHVjdHMlMjBib3R0bGVzfGVufDF8fHx8MTc2MDg3MjA2OXww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 2,
    name: 'Styling Gel Strong Hold',
    brand: 'GroomPro',
    price: 18.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1638609269267-f0128098a809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMGdlbHxlbnwxfHx8fDE3NjA4OTIyNTN8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 3,
    name: 'Argan Oil Treatment',
    brand: 'NaturalCare',
    price: 32.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1686121544157-6f178a23d584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwcHJvZHVjdHMlMjBib3R0bGVzfGVufDF8fHx8MTc2MDg3MjA2OXww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 4,
    name: 'Professional Scissors',
    brand: 'BarberTools',
    price: 89.99,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1656921350153-b6389adaad57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjB0b29scyUyMHNjaXNzb3JzfGVufDF8fHx8MTc2MDg5MjI1Mnww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 5,
    name: 'Moisturizing Shampoo',
    brand: 'HairCare+',
    price: 15.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1686121544157-6f178a23d584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwcHJvZHVjdHMlMjBib3R0bGVzfGVufDF8fHx8MTc2MDg3MjA2OXww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 6,
    name: 'Beard Oil Premium',
    brand: 'BeardCo',
    price: 22.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1638609269267-f0128098a809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMGdlbHxlbnwxfHx8fDE3NjA4OTIyNTN8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
];

export function ProductMarketplace({ onNavigate }: ProductMarketplaceProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-border px-4 py-4">
        <h2 className="mb-4">Shop Products</h2>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search products..."
              className="pl-10 h-12 rounded-xl bg-light-gray border-0"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-xl border-2"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="sticky top-[140px] z-10 bg-white px-4 py-4 border-b border-border">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-gold hover:bg-gold/90'
                  : 'border-2'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 py-4 grid grid-cols-2 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            onClick={() => onNavigate('product-detail', product)}
            className="overflow-hidden rounded-2xl cursor-pointer hover:shadow-lg transition-shadow"
          >
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
              <p className="text-sm line-clamp-2 mb-2">{product.name}</p>
              <div className="flex items-center justify-between">
                <p className="text-gold">${product.price}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <span>⭐</span>
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
