import { Plus, Edit2, Trash2, Clock, DollarSign } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useState } from 'react';

interface ServicesManagementProps {
  onNavigate: (screen: string) => void;
}

const initialServices = [
  {
    id: 1,
    name: "Men's Haircut",
    duration: 45,
    price: 50,
    description: 'Classic and modern haircuts',
  },
  {
    id: 2,
    name: 'Beard Trim',
    duration: 20,
    price: 25,
    description: 'Professional beard grooming',
  },
  {
    id: 3,
    name: 'Hot Shave',
    duration: 30,
    price: 35,
    description: 'Traditional hot towel shave',
  },
  {
    id: 4,
    name: 'Hair Coloring',
    duration: 90,
    price: 120,
    description: 'Professional hair coloring service',
  },
];

export function ServicesManagement({ onNavigate }: ServicesManagementProps) {
  const [services, setServices] = useState(initialServices);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = (id: number) => {
    setServices(services.filter((s) => s.id !== id));
  };

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2>Services</h2>
            <p className="text-sm text-gray-500">{services.length} services</p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="px-4 py-6 space-y-3">
        {services.map((service) => (
          <Card key={service.id} className="p-4 rounded-2xl">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <p className="mb-1">{service.name}</p>
                <p className="text-sm text-gray-500 mb-3">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration} min</span>
                  </div>
                  <div className="flex items-center gap-1 text-gold">
                    <DollarSign className="w-4 h-4" />
                    <span>${service.price}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 ml-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-xl"
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDelete(service.id)}
                  className="h-10 w-10 rounded-xl text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
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
            <DialogTitle>Add New Service</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="serviceName">Service Name</Label>
              <Input
                id="serviceName"
                placeholder="e.g., Men's Haircut"
                className="h-12 rounded-lg bg-light-gray border-0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="Brief description"
                className="h-12 rounded-lg bg-light-gray border-0"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (min)</Label>
                <Input
                  id="duration"
                  type="number"
                  placeholder="45"
                  className="h-12 rounded-lg bg-light-gray border-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="50"
                  className="h-12 rounded-lg bg-light-gray border-0"
                />
              </div>
            </div>

            <Button
              onClick={() => setIsDialogOpen(false)}
              className="w-full bg-gold hover:bg-gold/90 text-white h-12 rounded-xl"
            >
              Add Service
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
