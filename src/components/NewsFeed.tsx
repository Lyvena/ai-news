import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { NewsSummary } from '@/components/NewsSummary';
import { NewsCard } from '@/components/NewsCard';
import { ViewToggle } from '@/components/ViewToggle';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchNews } from '@/lib/api';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export const NewsFeed: React.FC = () => {
  const [view, setView] = useState<"card" | "summary">("summary");
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
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Error loading news feed. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end mb-4">
        <ViewToggle view={view} onViewChange={setView} />
      </div>
      {news?.map((item) => (
        view === "summary" ? (
          <NewsSummary
            key={item.id}
            title={item.title}
            content={item.summary}
            source={item.source}
            url={item.url}
            tags={item.tags}
          />
        ) : (
          <NewsCard key={item.id} news={item} />
        )
      ))}
    </div>
  );
};