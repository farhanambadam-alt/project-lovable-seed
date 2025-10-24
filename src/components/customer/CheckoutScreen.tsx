import { useState } from 'react';
import { ArrowLeft, CreditCard, Truck } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

interface CheckoutScreenProps {
  cartItems: Array<{ product: any; quantity: number }>;
  onBack: () => void;
  onComplete: () => void;
}

export function CheckoutScreen({ cartItems, onBack, onComplete }: CheckoutScreenProps) {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-border px-4 py-4">
        <div className="flex items-center gap-4">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2>Checkout</h2>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Shipping Address */}
        <Card className="p-4 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
              <Truck className="w-5 h-5 text-gold" />
            </div>
            <h4>Shipping Address</h4>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                className="h-12 rounded-lg bg-light-gray border-0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="123 Main Street"
                className="h-12 rounded-lg bg-light-gray border-0"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  placeholder="New York"
                  className="h-12 rounded-lg bg-light-gray border-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP Code</Label>
                <Input
                  id="zip"
                  placeholder="10001"
                  className="h-12 rounded-lg bg-light-gray border-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                className="h-12 rounded-lg bg-light-gray border-0"
              />
            </div>
          </div>
        </Card>

        {/* Payment Method */}
        <Card className="p-4 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-gold" />
            </div>
            <h4>Payment Method</h4>
          </div>

          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-gold cursor-pointer">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex-1 cursor-pointer">
                  Credit / Debit Card
                </Label>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-gold cursor-pointer">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                  PayPal
                </Label>
              </div>
            </div>
          </RadioGroup>

          {paymentMethod === 'card' && (
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="h-12 rounded-lg bg-light-gray border-0"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    className="h-12 rounded-lg bg-light-gray border-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    className="h-12 rounded-lg bg-light-gray border-0"
                  />
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Order Summary */}
        <Card className="p-4 rounded-2xl">
          <h4 className="mb-4">Order Summary</h4>
          
          <div className="space-y-3 mb-4">
            {cartItems.map((item) => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {item.product.name} x{item.quantity}
                </span>
                <span>${(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-xl text-gold">${total.toFixed(2)}</span>
            </div>
          </div>
        </Card>

        {/* Pay Button */}
        <Button
          onClick={onComplete}
          className="w-full bg-gold hover:bg-gold/90 text-white h-14 rounded-xl"
        >
          Pay ${total.toFixed(2)}
        </Button>
      </div>
    </div>
  );
}
