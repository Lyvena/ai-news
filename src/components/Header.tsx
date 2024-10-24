import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MoonIcon, SunIcon, LogOutIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Logo } from './Logo';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { toast } from 'sonner';

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  const handleSignOut = async () => {
    await supabaseClient.auth.signOut();
    toast.success('Signed out successfully');
    navigate('/');
  };

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
            {user && (
              <>
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
              </>
            )}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <Button
              variant="outline"
              onClick={handleSignOut}
              className="flex items-center gap-2"
            >
              <LogOutIcon className="h-4 w-4" />
              Sign Out
            </Button>
          ) : (
            <Link to="/signup">
              <Button variant="outline">Sign Up</Button>
            </Link>
          )}
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