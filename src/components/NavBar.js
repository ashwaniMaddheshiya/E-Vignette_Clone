import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const NavBar = () => {
  return (
    <>
         <Navbar bg="dark" variant="dark" expand="lg">

        <Navbar.Brand  className='p-2 '>VINTRICA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">HOMEPAGE</Nav.Link>
            <Nav.Link to="/">HOW IT WORKS</Nav.Link>
            <Nav.Link to="/">FAQS</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
       

          <div className="right-end text-white d-flex p-2">
            <span className='d-inline m-2 mt-0'>EUR</span>
            <span className='d-inline m-2 mt-0'>|</span>
            <span className='d-inline m-2 mt-0'>Country</span>
            <span className='d-inline m-2 mt-0'>Cart</span>
          </div>
            
        </Navbar.Collapse>
      
    </Navbar>
    </>
  )
}

export default NavBar