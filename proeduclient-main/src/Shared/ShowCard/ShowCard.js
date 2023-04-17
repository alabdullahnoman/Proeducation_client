import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowCard = ({blog}) => {
    const {id,ques,ans}=blog
    return (
        <>
      {[
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Blog</Card.Header>
          <Card.Body>
            <Card.Title> {ques} </Card.Title>
            <Card.Text>
              {ans.length > 250?<p>{ans.slice(0,250)+"..."} <Link to={`/blog/${id}`}>Read more</Link></p>:
             <p>{ans}</p>}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
    );
};

export default ShowCard;