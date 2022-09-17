import React from 'react'
import { Container } from 'react-bootstrap'
import './styles/Footer.css'
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <>

        
        <div className="footer border mt-4">
            <Container className=' container d-flex p-2'>
                <div className="left-section w-75  m-3 ">
                    <h4>VINTRICA</h4>
                    <div className='d-flex flex-wrap'>
                        vintrica is your popular toll portal for Europe’s motorways. Millions of motorists use the e-vignette every year. Motorists benefit from secure online registration of the motorway vignette. No queuing at the toll station.
                    </div>
                </div>
                <div className="mid-section w-25  m-3 ">
                    <h5>About Us</h5>
                    <Link to='/' className='text-dark'>Affiliate Partner Programme</Link><br/>
                    <Link to='/' className='text-dark'>Careers with vintrica</Link><br/>
                    <Link to='/' className='text-dark'>Flex service</Link>
                </div>
                <div className="right-section w-25  m-3">
                    <h5>Services</h5>
                    
                        <Link to='/' className='text-dark'>Help & Contact</Link><br/>
                        <Link to='/' className='text-dark'>My customer account</Link><br/>
                        <Link to='/' className='text-dark'>Search for an order</Link>
                   
                </div>
               
            </Container>
                
            <Container>
            <hr/>
                <div className="conditions m-2">
                        <Link to='/' className='m-2 text-dark'>Terms and conditions / Right to Cancellation</Link>
                        <Link to='/' className='m-2 text-dark '>Info for consumers</Link>
                        <Link to='/' className='m-2 text-dark'>Privacy notice</Link>
                        <Link to='/' className='m-2 text-dark'>Cookie Settings</Link>
                        <Link to='/' className='m-2 text-dark '>Comapny Info</Link>
                </div>
            </Container>
               
            
            </div>

            
        </>
    )
}

export default Footer