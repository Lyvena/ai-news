import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, TagIcon } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  tags: string[];
  url: string;
}

interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{news.title}</CardTitle>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {news.date}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{news.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {news.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              <TagIcon className="mr-1 h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">Source: {news.source}</span>
        <Button variant="outline" onClick={() => window.open(news.url, '_blank')}>
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};