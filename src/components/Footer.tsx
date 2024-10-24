import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-sm mt-8">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} AI-PGF. All rights reserved.</p>
      </div>
    </footer>
  );
};