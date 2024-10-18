import { useState, useEffect } from 'react';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  tags: string[];
  url: string;
}

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Ethereum Foundation Announces New Grants for Web3 Projects',
    summary: 'The Ethereum Foundation has unveiled a new round of grants aimed at supporting innovative Web3 projects focused on scalability and sustainability.',
    source: 'CryptoNews',
    date: '2023-04-15',
    tags: ['Ethereum', 'Grants', 'Web3'],
    url: 'https://example.com/ethereum-grants',
  },
  {
    id: '2',
    title: 'Decentralized Autonomous Organization Raises $10M for Climate Action',
    summary: 'A newly formed DAO has successfully raised $10 million in a token sale to fund various climate action initiatives using blockchain technology.',
    source: 'BlockchainToday',
    date: '2023-04-14',
    tags: ['DAO', 'Climate', 'Fundraising'],
    url: 'https://example.com/dao-climate-fundraising',
  },
  {
    id: '3',
    title: 'New AI-Powered DeFi Platform Launches on Polygon',
    summary: 'An innovative DeFi platform leveraging artificial intelligence for optimized yield farming strategies has been launched on the Polygon network.',
    source: 'DeFi Insider',
    date: '2023-04-13',
    tags: ['DeFi', 'AI', 'Polygon'],
    url: 'https://example.com/ai-defi-polygon',
  },
];

export const fetchNews = async (): Promise<NewsItem[]> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockNews;
};