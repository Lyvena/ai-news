import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Web3 Fundraising News Feed
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Stay updated with the latest news and insights from the world of Web3 fundraising, powered by AI-PGF.
          </p>
          <div className="space-y-4">
            <Link to="/news">
              <Button size="lg" className="gap-2">
                View News Feed <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
              <p className="text-gray-600 dark:text-gray-300">Curated content using advanced AI algorithms</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Web3 Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">Specialized in blockchain and crypto fundraising</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Real-time Updates</h3>
              <p className="text-gray-600 dark:text-gray-300">Latest news from across the Web3 ecosystem</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;