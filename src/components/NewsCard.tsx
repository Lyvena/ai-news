import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, TagIcon, ExternalLinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { NewsItem } from '@/lib/api';

interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  // Format the date from created_at if date is not provided
  const displayDate = news.date || new Date(news.created_at).toLocaleDateString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="text-xl font-semibold line-clamp-2 hover:line-clamp-none transition-all duration-300">
            {news.title}
          </CardTitle>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {displayDate}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 hover:line-clamp-none transition-all duration-300">
            {news.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {news.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="animate-in fade-in-50">
                <TagIcon className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Source: {news.source}
          </span>
          <Button 
            variant="outline" 
            onClick={() => window.open(news.url, '_blank')}
            className="gap-2 hover:gap-3 transition-all duration-300"
          >
            Read More
            <ExternalLinkIcon className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};