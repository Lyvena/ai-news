import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight, Rocket, Brain, Globe, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 text-gray-800 dark:text-gray-100 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Web3 Fundraising News Feed
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Stay updated with the latest news and insights from the world of Web3 fundraising, powered by AI-PGF.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/news">
                <Button size="lg" className="gap-2">
                  View News Feed <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="gap-2">
                  Get Started <Rocket className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI-Powered Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced AI algorithms analyze and curate the most relevant Web3 fundraising news for you
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Coverage</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive coverage of Web3 fundraising events and news from around the world
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <Newspaper className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-time Updates</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get instant notifications about the latest developments in the Web3 fundraising space
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Why Choose Our Platform?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">🤖 Smart Filtering</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Our AI automatically filters out noise and presents only the most relevant news
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">📊 Data-Driven Insights</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Get detailed analytics and trends in the Web3 fundraising space
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">🔍 Custom Alerts</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Set up personalized alerts for specific topics or projects
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">🌐 Web3 Native</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Built specifically for the Web3 ecosystem and its unique challenges
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;