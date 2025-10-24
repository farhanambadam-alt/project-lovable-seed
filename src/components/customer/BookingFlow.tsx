import { useState } from 'react';
import { ArrowLeft, Calendar as CalendarIcon, Clock, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Card } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface BookingFlowProps {
  data: any;
  onNavigate: (screen: string, data?: any) => void;
  onBack: () => void;
}

const barbers = [
  { id: 1, name: 'Marcus Johnson', specialty: 'Senior Stylist', image: '' },
  { id: 2, name: 'Alex Rivera', specialty: 'Master Barber', image: '' },
  { id: 3, name: 'Sarah Chen', specialty: 'Hair Specialist', image: '' },
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
];

const unavailableSlots = ['10:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'];

export function BookingFlow({ data, onNavigate, onBack }: BookingFlowProps) {
  const [step, setStep] = useState(1);
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [notes, setNotes] = useState('');

  // Provide default values if data is null
  const bookingData = data || {
    service: {
      name: "Men's Haircut",
      duration: '45 min',
      price: 50
    }
  };

  const handleConfirm = () => {
    onNavigate('booking-confirmation');
  };

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-border px-4 py-4">
        <div className="flex items-center gap-4">
          <button onClick={step === 1 ? onBack : () => setStep(step - 1)}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h3>Book Appointment</h3>
            <p className="text-sm text-gray-500">Step {step} of 3</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex gap-2 px-4 py-4">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`flex-1 h-2 rounded-full transition-all ${
              s <= step ? 'bg-electric-teal' : 'bg-soft-gray'
            }`}
          />
        ))}
      </div>

      {/* Step 1: Select Professional */}
      {step === 1 && (
        <div className="px-4 space-y-4">
          <div className="mb-4">
            <h4 className="mb-2">Select Professional</h4>
            <p className="text-sm text-gray-600">
              Choose your preferred barber or let us assign one for you
            </p>
          </div>

          <Card
            onClick={() => setSelectedBarber(0)}
            className={`p-4 rounded-2xl cursor-pointer transition-all ${
              selectedBarber === 0
                ? 'border-2 border-electric-teal bg-electric-teal/5'
                : 'border-2 border-transparent'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center">
                <User className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <p>No Preference</p>
                <p className="text-sm text-gray-500">
                  Next available professional
                </p>
              </div>
            </div>
          </Card>

          {barbers.map((barber, index) => (
            <Card
              key={barber.id}
              onClick={() => setSelectedBarber(barber.id)}
              className={`p-4 rounded-2xl cursor-pointer transition-all ${
                selectedBarber === barber.id
                  ? 'border-2 border-electric-teal bg-electric-teal/5'
                  : 'border-2 border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={barber.image} />
                  <AvatarFallback>{barber.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p>{barber.name}</p>
                  <p className="text-sm text-gray-500">{barber.specialty}</p>
                </div>
              </div>
            </Card>
          ))}

          <Button
            onClick={() => setStep(2)}
            disabled={selectedBarber === null}
            className="w-full bg-electric-teal hover:bg-electric-teal/90 text-deep-space-blue h-14 rounded-xl"
          >
            Continue
          </Button>
        </div>
      )}

      {/* Step 2: Select Date & Time */}
      {step === 2 && (
        <div className="px-4 space-y-6">
          <div className="mb-4">
            <h4 className="mb-2">Select Date & Time</h4>
            <p className="text-sm text-gray-600">
              Choose your preferred appointment date and time
            </p>
          </div>

          <Card className="p-4 rounded-2xl">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) =>
                date < new Date() || date < new Date(new Date().setHours(0, 0, 0, 0))
              }
              className="rounded-md"
            />
          </Card>

          {selectedDate && (
            <div>
              <h4 className="mb-4">Available Times</h4>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((slot) => {
                  const isUnavailable = unavailableSlots.includes(slot);
                  return (
                    <button
                      key={slot}
                      onClick={() => !isUnavailable && setSelectedTime(slot)}
                      disabled={isUnavailable}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        selectedTime === slot
                          ? 'border-electric-teal bg-electric-teal text-deep-space-blue'
                          : isUnavailable
                          ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'border-gray-200 hover:border-electric-teal'
                      }`}
                    >
                      <div className="text-sm">{slot}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <Button
            onClick={() => setStep(3)}
            disabled={!selectedDate || !selectedTime}
            className="w-full bg-electric-teal hover:bg-electric-teal/90 text-deep-space-blue h-14 rounded-xl"
          >
            Continue
          </Button>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="px-4 space-y-6">
          <div className="mb-4">
            <h4 className="mb-2">Appointment Summary</h4>
            <p className="text-sm text-gray-600">
              Review your booking details
            </p>
          </div>

          <Card className="p-4 rounded-2xl space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Service</p>
              <p>{bookingData.service?.name || "Men's Haircut"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Professional</p>
              <p>
                {selectedBarber === 0
                  ? 'No Preference'
                  : barbers.find((b) => b.id === selectedBarber)?.name}
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Date</p>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-gray-400" />
                  <p>{selectedDate?.toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Time</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <p>{selectedTime}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Duration</p>
              <p>{bookingData.service?.duration || '45 min'}</p>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <p>Total Price</p>
                <p className="text-2xl text-electric-teal font-bold">
                  ${bookingData.service?.price || 50}
                </p>
              </div>
            </div>
          </Card>

          <div>
            <label htmlFor="notes" className="block mb-2">
              Notes (Optional)
            </label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special requests or preferences..."
              className="rounded-xl bg-soft-gray border-0 min-h-24"
            />
          </div>

          <Button
            onClick={handleConfirm}
            className="w-full bg-electric-teal hover:bg-electric-teal/90 text-deep-space-blue h-14 rounded-xl font-bold"
          >
            Confirm Booking
          </Button>
        </div>
      )}
    </div>
  );
}
