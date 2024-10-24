import { NewsItem } from '@/lib/api';

export const analyzeNewsContent = async (content: string): Promise<string> => {
  const apiKey = localStorage.getItem('openai_api_key');
  
  if (!apiKey) {
    throw new Error('OpenAI API key not found. Please add it in the settings.');
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an AI assistant that analyzes Web3 fundraising news and provides insights.',
          },
          {
            role: 'user',
            content: `Analyze this Web3 fundraising news and provide key insights: ${content}`,
          },
        ],
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error analyzing content:', error);
    throw new Error('Failed to analyze content. Please check your API key and try again.');
  }
};

export const generateSummary = async (newsItem: NewsItem): Promise<string> => {
  const apiKey = localStorage.getItem('openai_api_key');
  
  if (!apiKey) {
    return newsItem.summary;
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an AI assistant that generates concise summaries of Web3 fundraising news.',
          },
          {
            role: 'user',
            content: `Generate a concise summary of this news: ${newsItem.title}\n${newsItem.summary}`,
          },
        ],
        max_tokens: 100,
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating summary:', error);
    return newsItem.summary;
  }
};