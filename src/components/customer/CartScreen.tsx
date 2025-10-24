import { Trash2, Minus, Plus } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';

interface CartScreenProps {
  cartItems: Array<{ product: any; quantity: number }>;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onNavigate: (screen: string) => void;
}

export function CartScreen({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onNavigate,
}: CartScreenProps) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center p-8 bg-white">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-light-gray flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🛒</span>
          </div>
          <h3 className="mb-2">Your cart is empty</h3>
          <p className="text-gray-600 mb-6">
            Add some products to get started
          </p>
          <Button
            onClick={() => onNavigate('shop')}
            className="bg-gold hover:bg-gold/90 text-white rounded-xl"
          >
            Browse Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-border px-4 py-4">
        <h2>Shopping Cart</h2>
        <p className="text-sm text-gray-500">{cartItems.length} items</p>
      </div>

      {/* Cart Items */}
      <div className="px-4 py-4 space-y-4">
        {cartItems.map((item) => (
          <Card key={item.product.id} className="p-4 rounded-2xl">
            <div className="flex gap-4">
              <ImageWithFallback
                src={item.product.image}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-1">
                      {item.product.brand}
                    </p>
                    <p className="line-clamp-2 mb-2">{item.product.name}</p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="ml-2 text-destructive"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-gold">${item.product.price}</p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        onUpdateQuantity(
                          item.product.id,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="h-8 w-8 rounded-lg"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="h-8 w-8 rounded-lg"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Order Summary */}
      <div className="sticky bottom-0 bg-white border-t border-border px-4 py-4">
        <Card className="p-4 rounded-2xl mb-4">
          <h4 className="mb-4">Order Summary</h4>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            {subtotal < 50 && (
              <p className="text-xs text-success">
                Add ${(50 - subtotal).toFixed(2)} more for free shipping!
              </p>
            )}
            <Separator />
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-xl text-gold">${total.toFixed(2)}</span>
            </div>
          </div>
        </Card>

        <Button
          onClick={() => onNavigate('checkout')}
          className="w-full bg-gold hover:bg-gold/90 text-white h-14 rounded-xl"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
