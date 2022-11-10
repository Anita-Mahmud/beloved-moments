import React, { useContext } from 'react';
import logo from '../../../images/logo.png'
import { Navbar,Dropdown,Avatar, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
const Nav = () => {
  const {user,logOut} = useContext(AuthContext);
  //logout
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.error(error))
}
    return (
       <div className='max-w-screen-xl mx-auto'>
         <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand>
          <Link to='/'>
          <img
            src={logo}
            className="mr-3 h-28"
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
        <div className='md:flex items-center md:ml-96'>
          <Navbar.Link
            active={true}
            className='md:mr-10'
          >
          <Link to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link 
          href="/navbars"
          className='md:mr-10'
          >
           <Link to='/services'>Services</Link>
          </Navbar.Link>
          <Navbar.Link href="/navbars"  className='md:mr-10'>
         <Link to='/blog'>Blog</Link>
          </Navbar.Link>
      {
        user?.uid?
        <>
         <Navbar.Link href="/navbars"  className='md:mr-10'>
         <Link to='/'>My Reviews</Link>
          </Navbar.Link>
         <Navbar.Link href="/navbars"  className='md:mr-10'>
         <Link to='/'>Add Service</Link>
          </Navbar.Link>
          <Button className='md:mr-10' onClick={handleLogOut}>
     Logout
    </Button>
      </>:
<Button className='md:mr-10 '>
      <Link to='/login'>Login</Link>
    </Button>
      }
          
        
          
          
          </div>
        </Navbar.Collapse>
       
       
      </Navbar>
      </div>
    );
};

export default Nav;