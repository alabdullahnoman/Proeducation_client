import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import img1 from '../../Image/cover/cover-1.png'
import img2 from '../../Image/cover/cover-2.jpg'
import img3 from '../../Image/cover/cover-3.jpg'
import { Link } from 'react-router-dom';
import './Carousel.css'

function Carousal() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className='d-none d-lg-block'>
          <h3>Get Started Digital<br/>Learning</h3>
          <p>It is a long established fact that a reader will be distracted by the readable
               <br/> content of a page when looking at its layout</p>
               <button type="button" className="btn text-white btn-info px-4 py-2"><Link to='/course'>Get Started</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption className='d-none d-lg-block'>
          <h3>Get Started Digital<br/>Learning</h3>
          <p>It is a long established fact that a reader will be distracted by the readable
            <br/> content of a page when looking at its layout</p>
            <button type="button" className="btn text-white btn-info px-4 py-2"><Link to='/course'>Get Started</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption className='d-none d-lg-block'>
          <h3>Get Started Digital<br/>Learning</h3>
          <p>
          It is a long established fact that a reader will be distracted by the readable
            <br/> content of a page when looking at its layout
          </p>
          <button type="button" className="btn text-white btn-info px-4 py-2"><Link to='/course'>Get Started</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;