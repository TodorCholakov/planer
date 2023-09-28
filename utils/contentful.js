

import { createClient } from 'contentful'
export const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })
 

  export async function fetchEntry(entryId) {
    try {
      const entry = await client.getEntry(entryId);
      return entry;
    } catch (error) {
      console.error('Error fetching entry:', error);
      return null;
    }
  }