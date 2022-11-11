import React from 'react';
import { Footer } from 'flowbite-react';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
const PageFooter = () => {
    return (
        <Footer container={true} className="bg-slate-700 w-full ">
  <div className="w-full bg-slate-800 p-4">
    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
      <div  >
        {/* <Footer.Brand
        className="w-96"
          href="/"
          src={logo}
          alt="Logo"
         
        /> */}
        <Link to='/'>
          <img
            src={logo}
            className="mr-3 h-44"
            alt="Logo"
          />
          </Link>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
        
        <div className='text-white'>
          <Footer.Title title="Follow us" className='text-white' />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#" className='text-white'>
              Github
            </Footer.Link>
            <Footer.Link href="#" className='text-white'>
              Discord
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Legal" className='text-white'/>
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#" className='text-white'>
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#" className='text-white'>
              Terms & Conditions
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="contact" className='text-white'/>
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#" className='text-white'>
              Phone : 00000000000
            </Footer.Link>
            <Footer.Link href="#" className='text-white'>
             Email: beloved@moments.com
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </div>
    <Footer.Divider />
    <div className="w-full flex items-center justify-between text-white">
      <Footer.Copyright
      className='text-white'
        href="#"
        by="Beloved Moments™"
        year={2022}
      />
      
    </div>
  </div>
</Footer>
    );
};

export default PageFooter;