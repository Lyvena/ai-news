import { supabase } from '@/integrations/supabase/client';

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  date?: string;
  tags: string[];
  url: string;
  user_id: string;
  created_at: string;
}

export const fetchNews = async (): Promise<NewsItem[]> => {
  const { data, error } = await supabase
    .from('news_items')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error('Error fetching news');
  }

  return data.map(item => ({
    ...item,
    date: new Date(item.created_at).toLocaleDateString(),
  }));
};

export const createNewsItem = async (newsItem: Omit<NewsItem, 'id' | 'created_at' | 'user_id'>) => {
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) throw new Error('User not authenticated');

  const { data, error } = await supabase
    .from('news_items')
    .insert([
      {
        ...newsItem,
        user_id: userData.user.id,
      }
    ])
    .select()
    .single();

  if (error) {
    throw new Error('Error creating news item');
  }

  return data;
};