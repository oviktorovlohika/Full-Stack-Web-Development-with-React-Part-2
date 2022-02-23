import React, { useState } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
   const [isNavOpen, setIsNavOpen] = useState(false);

   const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
   }

  return (
   <>
      <Navbar dark expand="md">
         <div className="container">
            <NavbarToggler onClick={toggleNav} />
            <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
            <Collapse isOpen={isNavOpen} navbar>
               <Nav navbar>
                  <NavItem>
                     <Link className="nav-link"  to='/'><span className="fa fa-home fa-lg"></span> Home</Link>
                  </NavItem>
                  <NavItem>
                     <Link className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About Us</Link>
                  </NavItem>
                  <NavItem>
                     <Link className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</Link>
                  </NavItem>
                  <NavItem>
                     <Link className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact Us</Link>
                  </NavItem>
               </Nav>
            </Collapse>
         </div>
      </Navbar>
   </> 
  )
}

export default Navigation;
