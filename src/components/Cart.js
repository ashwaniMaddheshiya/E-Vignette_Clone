import React from 'react'
import Table from 'react-bootstrap/Table';
import {Container, Button} from 'react-bootstrap'
import {useLocation} from 'react-router-dom'

const Cart = () => {
    const location = useLocation();

  return (
    <>
    <Container className='mt-4' >
        <h2 className='text-center'>Your Cart</h2>
        <Table striped bordered hover>
        
        <tbody>
            <tr>
            <td>1</td>
            <td>Country(Valid in)</td>
            <td>{location.state.country}</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Vehicle</td>
            <td>{location.state.vehicle}</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Duration</td>
            <td>{location.state.duration}</td>
            </tr>
            <tr>
            <td>4</td>
            <td>Country of Registration</td>
            <td>{location.state.registerCountry}</td>
            </tr>
            <tr>
            <td>5</td>
            <td>Starting Date</td>
            <td>{location.state.startingDate}</td>
            </tr>
        
        </tbody>
        </Table>

        <div className="btns d-flex justify-content-around mb-5">
        <Button variant="primary">Download</Button>{' '}
        <Button variant="primary">Print</Button>{' '}
        </div>


    </Container>
    </>
  )
}

export default Cart