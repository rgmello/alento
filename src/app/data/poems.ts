import { createClient } from '../../lib/supabase/client';
import { createClient as createServerClient } from '../../lib/supabase/server';

export interface Poem {
  id: string;
  title: string;
  author: string;
  content: string;
  year?: string;
  type?: string;
  created_at?: string;
}

// We will no longer export static arrays. Everything must be fetched asynchronously.
// In App Router, we'll generally do this directly in Server Components or via Supabase client.
// Here we will keep some helper functions to wrap the Supabase queries to keep logic clean.

export async function getRandomPoem(): Promise<Poem | null> {
  const supabase = createClient();
  const { data, error } = await supabase.from('poems').select('*');
  if (error || !data || data.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex] as Poem;
}

export async function getPoemById(id: string): Promise<Poem | null> {
  const supabase = createClient();
  const { data, error } = await supabase.from('poems').select('*').eq('id', id).single();
  if (error || !data) return null;
  return data as Poem;
}

export async function searchPoems(query: string): Promise<Poem[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('poems')
    .select('*')
    .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
    .order('title', { ascending: true });
    
  if (error || !data) return [];
  return data as Poem[];
}

export async function getAuthors(): Promise<string[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from('poems').select('author');
  if (error || !data) return [];
  
  const authors = new Set<string>(data.map((p) => p.author));
  return Array.from(authors).sort();
}

export async function getPoemsByAuthor(author: string): Promise<Poem[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from('poems').select('*').eq('author', author).order('title', { ascending: true });
  if (error || !data) return [];
  return data as Poem[];
}

export async function getShuffledPoemIds(): Promise<string[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from('poems').select('id');
  if (error || !data) return [];
  
  const ids = data.map(p => p.id);
  // Fisher-Yates shuffle
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids;
}
