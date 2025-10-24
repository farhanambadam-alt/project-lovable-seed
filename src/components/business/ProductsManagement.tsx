import { Plus, Edit2, Trash2, Package } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';

interface ProductsManagementProps {
  onNavigate: (screen: string) => void;
}

const initialProducts = [
  {
    id: 1,
    name: 'Premium Hair Pomade',
    brand: 'StyleCo',
    price: 24.99,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1686121544157-6f178a23d584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwcHJvZHVjdHMlMjBib3R0bGVzfGVufDF8fHx8MTc2MDg3MjA2OXww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 2,
    name: 'Styling Gel Strong Hold',
    brand: 'GroomPro',
    price: 18.99,
    stock: 23,
    image: 'https://images.unsplash.com/photo-1638609269267-f0128098a809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMGdlbHxlbnwxfHx8fDE3NjA4OTIyNTN8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 3,
    name: 'Argan Oil Treatment',
    brand: 'NaturalCare',
    price: 32.99,
    stock: 8,
    image: 'https://images.unsplash.com/photo-1686121544157-6f178a23d584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwcHJvZHVjdHMlMjBib3R0bGVzfGVufDF8fHx8MTc2MDg3MjA2OXww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    id: 4,
    name: 'Professional Scissors',
    brand: 'BarberTools',
    price: 89.99,
    stock: 5,
    image: 'https://images.unsplash.com/photo-1656921350153-b6389adaad57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjB0b29scyUyMHNjaXNzb3JzfGVufDF8fHx8MTc2MDg5MjI1Mnww&ixlib=rb-4.1.0&q=80&w=400',
  },
];

export function ProductsManagement({ onNavigate }: ProductsManagementProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2>Products</h2>
            <p className="text-sm text-gray-500">{products.length} products</p>
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className="px-4 py-6 space-y-3">
        {products.map((product) => (
          <Card key={product.id} className="p-4 rounded-2xl">
            <div className="flex gap-4">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-1">
                      {product.brand}
                    </p>
                    <p className="mb-1 line-clamp-1">{product.name}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-lg"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(product.id)}
                      className="h-8 w-8 rounded-lg text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gold">${product.price}</span>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Package className="w-4 h-4" />
                    <span>Stock: {product.stock}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Floating Add Button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="fixed bottom-24 right-4 h-14 w-14 rounded-full bg-gold hover:bg-gold/90 shadow-lg">
            <Plus className="w-6 h-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="productName">Product Name</Label>
              <Input
                id="productName"
                placeholder="e.g., Premium Pomade"
                className="h-12 rounded-lg bg-light-gray border-0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brand">Brand</Label>
              <Input
                id="brand"
                placeholder="e.g., StyleCo"
                className="h-12 rounded-lg bg-light-gray border-0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="productDescription">Description</Label>
              <Textarea
                id="productDescription"
                placeholder="Product description..."
                className="rounded-lg bg-light-gray border-0"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productPrice">Price ($)</Label>
                <Input
                  id="productPrice"
                  type="number"
                  placeholder="24.99"
                  className="h-12 rounded-lg bg-light-gray border-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stock">Stock</Label>
                <Input
                  id="stock"
                  type="number"
                  placeholder="15"
                  className="h-12 rounded-lg bg-light-gray border-0"
                />
              </div>
            </div>

            <Button
              onClick={() => setIsDialogOpen(false)}
              className="w-full bg-gold hover:bg-gold/90 text-white h-12 rounded-xl"
            >
              Add Product
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
