import React from 'react';
import logo from '../../../images/logo.png'
import { Navbar,Dropdown,Avatar } from 'flowbite-react';
const Nav = () => {
    return (
       <div className=''>
         <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src={logo}
            className="mr-3 h-44"
            alt="Logo"
          />
         
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
        <div className='ml-96 md:flex'>
          <Navbar.Link
            href="/navbars"
            active={true}
            className='md:text-lg md:mr-10'
          >
            Home
          </Navbar.Link>
          <Navbar.Link 
          href="/navbars"
          className='md:text-lg md:mr-10'
          >
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars"  className='md:text-lg md:mr-10'>
            Services
          </Navbar.Link>
          <Navbar.Link href="/navbars"  className='md:text-lg md:mr-10'>
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/navbars"  className='md:text-lg md:mr-10'>
            Contact
          </Navbar.Link>
          </div>
        </Navbar.Collapse>
       
      </Navbar>
      </div>
    );
};

export default Nav;