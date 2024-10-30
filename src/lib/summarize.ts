import { supabase } from "@/integrations/supabase/client";

export const summarizeArticle = async (content: string, title: string): Promise<string> => {
  try {
    const { data, error } = await supabase.functions.invoke('summarize-news', {
      body: { content, title },
    });

    if (error) throw error;
    return data.summary;
  } catch (error) {
    console.error('Error summarizing article:', error);
    throw new Error('Failed to summarize article. Please try again later.');
  }
};