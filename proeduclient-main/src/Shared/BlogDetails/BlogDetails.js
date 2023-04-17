import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const singleBlog =useLoaderData()
    const{ques,ans}=singleBlog
    return (
        <div>
            <Card>
                <Card.Header as="h5">Blog</Card.Header>
                <Card.Body>
                    <Card.Title>{ques}</Card.Title>
                    <Card.Text>
                    {ans}
                    </Card.Text>
                   
                </Card.Body>
            </Card>
        </div>
    );
};

export default BlogDetails;