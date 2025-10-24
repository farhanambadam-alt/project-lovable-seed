import { Scissors } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SplashScreen() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="h-screen bg-[#141829] flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          {/* Liquid animation effect */}
          <div 
            className={`absolute inset-0 bg-[#00F5D4] blur-3xl transition-all duration-1000 ${
              animate ? 'opacity-60 scale-150' : 'opacity-0 scale-50'
            }`}
          ></div>
          <div 
            className={`absolute inset-0 bg-[#00F5D4] blur-xl transition-all duration-700 delay-200 ${
              animate ? 'opacity-40 scale-125' : 'opacity-0 scale-75'
            }`}
          ></div>
          <Scissors 
            className={`w-20 h-20 text-[#00F5D4] relative transition-all duration-500 ${
              animate ? 'scale-100 rotate-0' : 'scale-50 rotate-180'
            }`} 
            strokeWidth={1.5} 
          />
        </div>
        <h1 
          className={`text-5xl text-[#00F5D4] tracking-wider transition-all duration-700 delay-300 font-extrabold ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Barber & Co.
        </h1>
      </div>
    </div>
  );
}
