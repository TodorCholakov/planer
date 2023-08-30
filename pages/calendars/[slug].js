

import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { createClient } from 'contentful'



    const client = createClient({
        space: 'h72rq8wmk3g6',
        accessToken: 'uYg2IezXHk8e_8eZrfxggB3orFG4PUeb-g_GGtQ3bCY'
      })
  
    
const BlogPost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch slugs from Contentful
  const response = await client.getEntries({
    content_type: 'images'
  });

  const paths = response.items.map(item => ({ params: { slug: item.fields.slug } }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // Fetch data for the specific slug
  
  const response = await client.getEntries({
    content_type: 'images',
    'fields.slug': params.slug
  });

  const post = response.items[0].fields;

  return {
    props: {
      post
    }
  };
}

export default BlogPost;