import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import logo from '../../images/icon.png';

export default function NavigationBar() {

    const navigate = useNavigate();

    const navigateToHomepage = () => {
        navigate('/');
    }

    return (
        <Navbar bg="light" expand="lg" style={{ padding: '0px 15px 0px 15px' }}>
            <Navbar.Brand href="">
                <img
                    src={logo}
                    alt='Windemere Music Club'
                    height={45}
                    onClick={navigateToHomepage}
                    style={{ cursor: 'pointer' }}
                /> 
            <span className='p-3' style={{fontFamily: 'Brush Script MT', fontSize: '35px'}}>Windermere</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ marginLeft: 'auto', fontSize: '18px' }}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="activities">Activities</Nav.Link>
                    <Nav.Link href="booking">Booking</Nav.Link>
                    <Nav.Link href="team">Team</Nav.Link>
                    <Nav.Link href="register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
