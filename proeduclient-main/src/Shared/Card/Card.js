import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCard from '../ShowCard/ShowCard';

function SingleCard() {
    const blogs =useLoaderData()
  return (
   <div className='container blogsBox'>
        {
            blogs.map(blog=><ShowCard key={blog.id} blog={blog}></ShowCard>)
        }
   </div>
  );
}

export default SingleCard;