import { supabase } from "@/integrations/supabase/client";

export const analyzeContent = async (content: string): Promise<string> => {
  try {
    const { data, error } = await supabase.functions.invoke('analyze-content', {
      body: { content },
    });

    if (error) throw error;
    return data.analysis;
  } catch (error) {
    console.error('Error analyzing content:', error);
    throw new Error('Failed to analyze content. Please check your API key and try again.');
  }
};