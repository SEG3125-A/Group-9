import React, { ChangeEvent, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Container from 'react-bootstrap';

const BookingPage = () => {

    const [bookingDate, setBookingDate] = useState<Date | string>('');
    const [bookingTime, setBookingTime] = useState<string>('');
    const [bookingName, setBookingName] = useState<string>('');
    const [bookingEmail, setBookingEmail] = useState<string>('');
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

    const navigate = useNavigate();

    const handleAndValidateEmail = (event: ChangeEvent<HTMLInputElement>) => {
        
        const emailInput = event.target.value;
        setBookingEmail(emailInput);
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(emailInput));
      }

    const handleAndValidateName = (event: ChangeEvent<HTMLInputElement>) => {
        
        const nameInput = event.target.value;
        setBookingName(nameInput);
    }

    const handleSubmit = () =>{
        //TODO
    }

    return(
        <>
            <NavigationBar />
            <div>
                <Form className="h-100 form-wrapper" onSubmit={handleSubmit}>
                    <div className='title'>
                        <h2 className='text-center'>Book a room</h2>
                    </div>

                    <div className='mb-3'>
                        <div className='small-container'>
                            {/* Rooms to choose */}
                            <Form.Group className="mt-2 mb-4" style={{ width: '100%' }}>
                                <Form.Label>Room</Form.Label>
                                <Form.Select aria-label="Choose a room:">
                                <option>Select a room</option>
                                <option value="amphi">Amphitheatre</option>
                                <option value="piano">Piano room</option>
                                <option value="karaoke">Karaoke room</option>
                                <option value="mp1">Music practice room 1</option>
                                <option value="mp2">Music practice room 2</option>
                                </Form.Select>
                            </Form.Group>

                        </div>
                    
                        <div>
                            <div className='small-container'>
                                {/* Date  */}
                                <Form.Group className="mt-2 mb-4" style={{ width: '50%' }} >
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control
                                        required
                                        id="date"
                                        type="date"
                                        // value={bookingDate} how to fix this
                                    />
                                </Form.Group>

                                {/* Time */}
                                <Form.Group className="mt-2 mb-4" style={{ width: '50%' }} >
                                    <Form.Label>Time</Form.Label>
                                    <Form.Select aria-label="Choose a time:" >
                                    <option>Select a time</option>
                                    <option value="9">9:00-10:00</option>
                                    <option value="10">10:00-11:00</option>
                                    <option value="12">12:00-13:00</option>
                                    <option value="13">13:00-14:00</option>
                                    <option value="14">14:00-15:00</option>
                                    <option value="15">15:00-16:00</option>
                                    <option value="16">16:00-17:00</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className='small-container'>
                                {/* name */}
                                <Form.Group className="mt-2 mb-4" style={{ width: '50%' }}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        required
                                        id="name"
                                        type="text"
                                        placeholder="Bob Marley"
                                        value={bookingName}
                                        onChange={handleAndValidateName}
                                    />
                                </Form.Group>

                                {/* email */}
                                <Form.Group className="mt-2 mb-4" style={{ width: '50%' }}>
                                    <Form.Label>uOttawa email address</Form.Label>
                                    <Form.Control
                                        required
                                        id="email"
                                        type="email"
                                        placeholder="name@uottawa.ca"
                                        value={bookingEmail}
                                        onChange={handleAndValidateEmail}
                                    />
                                </Form.Group>

                            </div>
                        </div>
                    </div>
                   
                    
                    <div style={{textAlign:"center"}}>
                        <Button className="btn btn-secondary btn-booking" type="submit">
                            Book
                        </Button>
                    </div>
                </Form>
            </div>
            <Footer />
        </>
    )
}

export default BookingPage;


// TODO 
// flex for the fields - style
// validation for room field, if we chose a room
// gray out date and time for each separate room (like for bike)
// modal for book