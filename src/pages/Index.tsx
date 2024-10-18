import React from 'react';
import { NewsFeed } from '@/components/NewsFeed';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          AI-PGF Web3 Fundraising News Feed
        </h1>
        <NewsFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;