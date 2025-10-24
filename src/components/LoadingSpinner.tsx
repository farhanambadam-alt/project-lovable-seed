import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  message?: string;
}

export function LoadingSpinner({ fullScreen = false, message }: LoadingSpinnerProps) {
  if (fullScreen) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-off-white">
        <div className="relative">
          <div className="absolute inset-0 bg-electric-teal blur-2xl opacity-30 animate-pulse"></div>
          <Loader2 className="w-12 h-12 text-electric-teal animate-spin relative z-10" />
        </div>
        {message && (
          <p className="mt-4 text-deep-space-blue font-medium">{message}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="w-8 h-8 text-electric-teal animate-spin" />
    </div>
  );
}
