import React from 'react';
import { FaYoutube,FaTwitter,FaInstagram,FaFacebook } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-4'>
             <footer className="bg-black text-white text-center pt-2" id="foot">
                <h1 >Pro Edu</h1>
                <p className="text-secondary " >Copyright © 2022 Ed-tech company<br/>All rights reserved</p>
                <p className="text-secondary " >Privacy Ploicy | Terms of use</p>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaYoutube/>
            </footer>
        </div>
    );
};

export default Footer;