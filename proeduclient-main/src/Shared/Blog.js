import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import {FaFacebook,FaYoutube,FaDiscord, } from 'react-icons/fa';
import {FcPrivacy } from 'react-icons/fc';
import { Outlet } from 'react-router-dom';

const Blog = () => {
    return (
       <Container>
        <Row>
            <Col lg='9' sm='12'>
                <Outlet></Outlet>
            </Col>
            <Col lg='3' sm='12'>
            <p>Find Us on</p>
                    <>
                    <ListGroup>
                            <ListGroup.Item className='mb-2 border border-1 rounded-2'><FaFacebook/> Facebook</ListGroup.Item>
                            <ListGroup.Item className='mb-2 border border-1 rounded-2'><FaYoutube/> Youtube</ListGroup.Item>
                            <ListGroup.Item className='mb-2 border border-1 rounded-2'><FaDiscord/> Discord</ListGroup.Item>
                            <ListGroup.Item className='mb-2 border border-1 rounded-2'><FcPrivacy/> Privacy Policy</ListGroup.Item>
                        </ListGroup>
                    </>
            </Col>
        </Row>
       </Container>
    );
};

export default Blog;