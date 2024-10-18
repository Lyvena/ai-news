import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { NewsCard } from '@/components/NewsCard';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchNews } from '@/lib/api';

export const NewsFeed: React.FC = () => {
  const { data: news, isLoading, error } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-40 w-full" />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error loading news feed.</div>;
  }

  return (
    <div className="space-y-6">
      {news?.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
};