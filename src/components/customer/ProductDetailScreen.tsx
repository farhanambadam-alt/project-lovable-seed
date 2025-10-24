import { useState } from 'react';
import { ArrowLeft, Minus, Plus, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface ProductDetailScreenProps {
  data: any;
  onNavigate: (screen: string, data?: any) => void;
  onBack: () => void;
  onAddToCart: (product: any, quantity: number) => void;
}

export function ProductDetailScreen({
  data,
  onNavigate,
  onBack,
  onAddToCart,
}: ProductDetailScreenProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(data, quantity);
    onNavigate('cart');
  };

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-border px-4 py-4">
        <button onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Product Image */}
      <div className="p-4">
        <Card className="overflow-hidden rounded-2xl">
          <ImageWithFallback
            src={data.image}
            alt={data.name}
            className="w-full h-80 object-cover"
          />
        </Card>
      </div>

      {/* Product Info */}
      <div className="px-4 space-y-6">
        <div>
          <p className="text-sm text-gray-500 mb-2">{data.brand}</p>
          <h2 className="mb-3">{data.name}</h2>
          <div className="flex items-center gap-4">
            <p className="text-3xl text-gold">${data.price}</p>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-gold text-gold" />
              <span>{data.rating || '4.8'}</span>
              <span className="text-gray-500">(124 reviews)</span>
            </div>
          </div>
        </div>

        {/* Quantity Selector */}
        <div>
          <label className="block mb-3">Quantity</label>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-12 w-12 rounded-xl border-2"
            >
              <Minus className="w-5 h-5" />
            </Button>
            <span className="text-xl w-12 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
              className="h-12 w-12 rounded-xl border-2"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Description */}
        <div>
          <h4 className="mb-3">Product Description</h4>
          <p className="text-gray-600">
            Premium quality hair styling product designed for professional results.
            Provides strong hold with a natural finish. Perfect for all hair types
            and styles. Water-based formula makes it easy to wash out. Contains
            natural ingredients that nourish and protect your hair.
          </p>
        </div>

        {/* Ingredients */}
        <div>
          <h4 className="mb-3">Key Ingredients</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>Argan Oil - Moisturizes and adds shine</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>Beeswax - Provides natural hold</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>Vitamin E - Protects and strengthens</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>Shea Butter - Conditions and softens</span>
            </li>
          </ul>
        </div>

        {/* Add to Cart Button */}
        <div className="sticky bottom-0 bg-white py-4 border-t border-border -mx-4 px-4">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-gold hover:bg-gold/90 text-white h-14 rounded-xl"
          >
            Add to Cart - ${(data.price * quantity).toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
}
