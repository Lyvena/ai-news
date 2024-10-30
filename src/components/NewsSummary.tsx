import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { summarizeArticle } from '@/lib/summarize';
import { Brain, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface NewsSummaryProps {
  title: string;
  content: string;
  source: string;
  url: string;
  tags: string[];
}

export const NewsSummary: React.FC<NewsSummaryProps> = ({
  title,
  content,
  source,
  url,
  tags,
}) => {
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    try {
      const generatedSummary = await summarizeArticle(content, title);
      setSummary(generatedSummary);
      toast({
        title: "Summary Generated",
        description: "AI has successfully summarized the article.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate summary. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-sm text-gray-500 mt-2">Source: {source}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(url, '_blank')}
              className="flex items-center gap-2"
            >
              Read Original <ExternalLink className="h-4 w-4" />
            </Button>
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          {!summary && !isLoading && (
            <Button
              onClick={handleGenerateSummary}
              className="mb-4 w-full flex items-center justify-center gap-2"
            >
              <Brain className="h-4 w-4" />
              Generate AI Summary
            </Button>
          )}
          
          {isLoading && (
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[95%]" />
            </div>
          )}
          
          {summary && (
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI Summary
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{summary}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};