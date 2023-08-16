import { createClient } from 'contentful-management';

const client = createClient({
  accessToken: 'uYg2IezXHk8e_8eZrfxggB3orFG4PUeb-g_GGtQ3bCY',
});
async function createContentEntry() {
  try {
    // Get your space and environment
    const space = await client.getSpace('h72rq8wmk3g6');
    const environment = await space.getEnvironment('master');
    
    // Replace 'CONTENT_TYPE_ID' with your actual content type ID
    const contentType = await environment.getContentType('any');
    
    // Create a new entry with desired field values
    const newEntry = await environment.createEntry(contentType.sys.id, {
      fields: {
        title: {
          'en-US': 'New Content Title',
        },
        description: {
          'en-US': 'This is the description of the content.',
        },
        // Add more fields here as needed
      },
    });
    
    console.log('New entry created:', newEntry);
  } catch (error) {
    console.error('Error creating entry:', error);
  }
}

createContentEntry();
export default function Contact() {

  return (
    <div className="flex justify-center">

    </div>
  )
}

