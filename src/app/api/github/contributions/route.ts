import { NextResponse } from 'next/server';

// Force static generation with revalidation every hour
export const dynamic = 'force-static';
export const revalidate = 3600; // 1 hour

export async function GET() {
  try {
    // GitHub doesn't provide a direct API for contribution graph
    // We'll use the GitHub GraphQL API to get recent activity
    // For a simpler approach, we can use a third-party service or calculate from events
    
    const username = 'govindggupta';
    
    // Fetch user events to calculate contributions
    const eventsResponse = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!eventsResponse.ok) {
      throw new Error('Failed to fetch GitHub events');
    }

    const events = await eventsResponse.json();
    
    // Group events by date and count contributions
    const contributionsMap = new Map<string, number>();
    const today = new Date();
    
    // Initialize last 30 days with 0
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      contributionsMap.set(dateStr, 0);
    }
    
    // Count contributions from events
    events.forEach((event: any) => {
      if (event.type === 'PushEvent' || event.type === 'PullRequestEvent' || event.type === 'IssueEvent') {
        const eventDate = new Date(event.created_at);
        const dateStr = eventDate.toISOString().split('T')[0];
        const current = contributionsMap.get(dateStr) || 0;
        contributionsMap.set(dateStr, current + 1);
      }
    });
    
    // Convert to array format
    const contributions = Array.from(contributionsMap.entries())
      .map(([date, count]) => ({
        date,
        count: Math.min(count, 7), // Cap at 7 for display
      }))
      .sort((a, b) => a.date.localeCompare(b.date));
    
    return NextResponse.json(contributions);
  } catch (error) {
    console.error('Error fetching contributions:', error);
    // Return mock data as fallback
    const today = new Date();
    const contributions = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      contributions.push({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 8),
      });
    }
    return NextResponse.json(contributions);
  }
}

