import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  )

  try {
    // Get latest news items
    const { data: newsItems, error: newsError } = await supabaseClient
      .from('news_items')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10)

    if (newsError) throw newsError

    // Get all users
    const { data: profiles, error: profilesError } = await supabaseClient
      .from('profiles')
      .select('*')

    if (profilesError) throw profilesError

    console.log('Running scheduled digest for users:', profiles.length)

    // Send digest to each user
    const sendDigest = async (profile: any) => {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        },
        body: JSON.stringify({
          from: 'AI-PGF <notifications@your-domain.com>',
          to: [profile.email],
          subject: 'Your Daily Web3 Fundraising News Digest',
          html: `
            <h1>Latest Web3 Fundraising News</h1>
            ${newsItems.map((item: any) => `
              <div>
                <h2>${item.title}</h2>
                <p>${item.summary}</p>
                <a href="${item.url}">Read more</a>
              </div>
            `).join('')}
          `,
        }),
      })
    }

    await Promise.all(profiles.map(sendDigest))

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error in scheduled-digest function:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})