import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    return (
        <div>
            <Navbar expand="lg" className='container navbar mt-4'>
                <Container fluid>
                    <Navbar.Brand><h1>Pro Edu</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                        <div className='text-center'>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav>
                                <Link to='/'>Home</Link>
                                <Link to='/course'>Courses</Link>
                                <Link to='/blog'>Blogs</Link>
                                <Link to='/faq'>FAQ</Link>
                                <Link to='/about'>About</Link>
                            </Nav>
                            </Navbar.Collapse>
                        </div>
                    <Form className="d-flex nav-button">
                        {
                            user && user?.uid ? <>
                            <Button onClick={logOut} variant="outline-info">Log Out</Button>
                            </>:
                            <>
                            <Link to='/signin'><Button variant="outline-info">Sign In</Button></Link>
                            <Link to='signup'> <Button variant="outline-info">Sign Up</Button></Link>
                            </>
                        }
                    </Form>
                </Container>
            </Navbar> 
        </div>
    );
};

export default Header;