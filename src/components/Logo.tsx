import React from 'react';
import { Newspaper, Rocket } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="relative">
        <Newspaper className="h-6 w-6 text-primary" />
        <Rocket className="h-4 w-4 text-primary absolute -top-1 -right-1 transform rotate-45" />
      </div>
      <span className="font-bold text-xl text-gray-800 dark:text-white">AI-PGF</span>
    </div>
  );
};