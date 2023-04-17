import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import {FaFacebook,FaYoutube,FaDiscord, } from 'react-icons/fa';
import {FcPrivacy } from 'react-icons/fc';
const Course = () => {
    const courses=useLoaderData()
    
    return (
        <Container className='mt-5'>
            <Row>
                <Col lg='2' sm='12'>
                    <h4>All Course's Topic</h4>
                    {
                        courses.map(course => <p key={course.id}><Link  to={`/course/${course.id}`}>{course.name}</Link></p>)
                    }
                </Col>
                <Col lg='7' sm='12' >
                    <h4 className='text-center'>Discover Our Popular courses</h4>
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

export default Course;