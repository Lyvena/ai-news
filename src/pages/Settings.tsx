import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';

const settingsSchema = z.object({
  openaiApiKey: z.string().min(1, 'API Key is required'),
});

const Settings = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof settingsSchema>>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      openaiApiKey: localStorage.getItem('openai_api_key') || '',
    },
  });

  const onSubmit = (values: z.infer<typeof settingsSchema>) => {
    localStorage.setItem('openai_api_key', values.openaiApiKey);
    toast({
      title: 'Settings saved',
      description: 'Your OpenAI API key has been saved successfully.',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Settings</h1>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">AI Configuration</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="openaiApiKey"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>OpenAI API Key</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your OpenAI API key"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Your API key will be stored locally and used for AI-powered features.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Save Settings</Button>
              </form>
            </Form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;