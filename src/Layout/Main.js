
import React from 'react';
import { Outlet } from 'react-router-dom';
import PageFooter from '../Pages/Shared/Footer/Footer';
import Footer from '../Pages/Shared/Footer/Footer';
import Nav from '../Pages/Shared/Header/Nav';

const Main = () => {
    return (
        <div className=''>
            <Nav></Nav>
            <Outlet></Outlet>
            <PageFooter></PageFooter>
        </div>
    );
};

export default Main;