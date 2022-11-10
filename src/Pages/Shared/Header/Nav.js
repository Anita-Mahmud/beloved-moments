import React from 'react';
import logo from '../../../images/logo.png'
import { Navbar,Dropdown,Avatar, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
       <div className='relative max-w-screen-xl mx-auto'>
         <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand>
          <Link to='/'>
          <img
            src={logo}
            className="mr-3 h-44"
            alt="Logo"
          />
          </Link>
          
         
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
          >
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
        <div className='md:ml-96 md:flex items-center'>
          <Navbar.Link
            active={true}
            className='md:text-lg md:mr-10'
          >
          <Link to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link 
          href="/navbars"
          className='md:text-lg md:mr-10'
          >
           <Link to='/services'>Services</Link>
          </Navbar.Link>
          <Navbar.Link href="/navbars"  className='md:text-lg md:mr-10'>
         <Link to='/blog'>Blog</Link>
          </Navbar.Link>
          
          <Button className='md:text-lg md:mr-10 '>
      <Link to='/login'>Login</Link>
    </Button>
        
          
          
          </div>
        </Navbar.Collapse>
       
       
      </Navbar>
      </div>
    );
};

export default Nav;