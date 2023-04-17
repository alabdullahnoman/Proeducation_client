import React from 'react';
import { Button } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className='container faqbox'>
            <label htmlFor="faq"> If you have any doubt.Please ask about that</label> <br />
            <textarea name="faq" id="faq" cols="80" rows="8"></textarea> <br />
            <Button variant="outline-success">Submit</Button>
        </div>
    );
};

export default FAQ;