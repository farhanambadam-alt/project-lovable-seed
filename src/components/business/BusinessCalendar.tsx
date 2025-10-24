import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';

interface BusinessCalendarProps {
  onNavigate: (screen: string, data?: any) => void;
}

const appointments = {
  '2025-10-20': [
    {
      id: 1,
      customer: 'John Smith',
      service: "Men's Haircut",
      time: '10:00 AM',
      duration: '45 min',
      price: 50,
    },
    {
      id: 2,
      customer: 'Michael Brown',
      service: 'Beard Trim',
      time: '11:00 AM',
      duration: '20 min',
      price: 25,
    },
  ],
  '2025-10-21': [
    {
      id: 3,
      customer: 'David Wilson',
      service: 'Hot Shave',
      time: '2:00 PM',
      duration: '30 min',
      price: 35,
    },
  ],
  '2025-10-22': [
    {
      id: 4,
      customer: 'James Taylor',
      service: 'Hair Coloring',
      time: '3:00 PM',
      duration: '90 min',
      price: 120,
    },
    {
      id: 5,
      customer: 'Robert Davis',
      service: "Men's Haircut",
      time: '5:00 PM',
      duration: '45 min',
      price: 50,
    },
  ],
};

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function BusinessCalendar({ onNavigate }: BusinessCalendarProps) {
  const [selectedDate, setSelectedDate] = useState('2025-10-20');
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 9, 1)); // October 2025

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const formatDate = (day: number) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const days = getDaysInMonth(currentMonth);
  const selectedAppointments = appointments[selectedDate as keyof typeof appointments] || [];

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  return (
    <div className="h-screen overflow-y-auto pb-20 bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-border px-4 py-4">
        <h2>Schedule</h2>
      </div>

      {/* Calendar */}
      <div className="px-4 py-6">
        <Card className="p-4 rounded-2xl">
          {/* Month Navigator */}
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={previousMonth}
              className="h-10 w-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <h4>
              {currentMonth.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </h4>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextMonth}
              className="h-10 w-10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center text-sm text-gray-500 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} />;
              }

              const dateStr = formatDate(day);
              const hasAppointments = appointments[dateStr as keyof typeof appointments];
              const isSelected = dateStr === selectedDate;

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(dateStr)}
                  className={`aspect-square flex flex-col items-center justify-center rounded-xl transition-all ${
                    isSelected
                      ? 'bg-gold text-white'
                      : hasAppointments
                      ? 'bg-gold/10 text-charcoal hover:bg-gold/20'
                      : 'hover:bg-light-gray'
                  }`}
                >
                  <span className="text-sm">{day}</span>
                  {hasAppointments && !isSelected && (
                    <div className="w-1 h-1 rounded-full bg-gold mt-1" />
                  )}
                </button>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Appointments for Selected Date */}
      <div className="px-4 pb-6">
        <h4 className="mb-4">
          Appointments for{' '}
          {new Date(selectedDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </h4>

        {selectedAppointments.length > 0 ? (
          <div className="space-y-3">
            {selectedAppointments.map((appointment) => (
              <Card
                key={appointment.id}
                onClick={() => onNavigate('appointment-detail', appointment)}
                className="p-4 rounded-2xl cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <Avatar className="w-12 h-12 bg-light-gray">
                    <AvatarFallback className="text-charcoal">
                      {appointment.customer
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <p className="mb-1">{appointment.customer}</p>
                        <p className="text-sm text-gray-500">
                          {appointment.service}
                        </p>
                      </div>
                      <span className="text-gold ml-2">
                        ${appointment.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{appointment.time}</span>
                      </div>
                      <span>{appointment.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-8 rounded-2xl text-center">
            <p className="text-gray-500">No appointments scheduled</p>
          </Card>
        )}
      </div>
    </div>
  );
}
