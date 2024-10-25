import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          <nav className="ml-8 space-x-4">
            <Link 
              to="/" 
              className={`text-sm ${location.pathname === '/' ? 'text-primary font-semibold' : 'text-gray-600 dark:text-gray-300'}`}
            >
              Home
            </Link>
            <Link 
              to="/news" 
              className={`text-sm ${location.pathname === '/news' ? 'text-primary font-semibold' : 'text-gray-600 dark:text-gray-300'}`}
            >
              News Feed
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm ${location.pathname === '/contact' ? 'text-primary font-semibold' : 'text-gray-600 dark:text-gray-300'}`}
            >
              Contact
            </Link>
            <Link 
              to="/settings" 
              className={`text-sm ${location.pathname === '/settings' ? 'text-primary font-semibold' : 'text-gray-600 dark:text-gray-300'}`}
            >
              Settings
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/signup">
            <Button variant="outline">Sign Up</Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
};