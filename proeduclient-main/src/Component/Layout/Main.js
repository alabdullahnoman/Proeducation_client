import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import'./Main.css'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <div className='foot'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;