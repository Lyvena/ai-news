import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Us</h1>
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
            <Mail className="h-5 w-5" />
            <a href="mailto:info@lyvena.xyz" className="hover:text-primary">
              info@lyvena.xyz
            </a>
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            We'd love to hear from you! Whether you have questions about our platform,
            need technical support, or want to explore partnership opportunities,
            please don't hesitate to reach out.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;