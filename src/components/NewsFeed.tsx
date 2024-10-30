import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { NewsSummary } from '@/components/NewsSummary';
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
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-[300px] w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-8">
        Error loading news feed. Please try again later.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {news?.map((item) => (
        <NewsSummary
          key={item.id}
          title={item.title}
          content={item.summary}
          source={item.source}
          url={item.url}
          tags={item.tags}
        />
      ))}
    </div>
  );
};