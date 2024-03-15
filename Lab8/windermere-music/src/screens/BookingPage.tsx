import React, { ChangeEvent, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useLocation, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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
        
    }

    return(
        <>
            {/* Put navbar here */}
            <div className='bookingform-wrapper'>
                <Form className="p-5 h-100" onSubmit={handleSubmit}>
                    <h1>
                        Book A Room
                    </h1>

                    {/* Rooms to choose */}
                    <Form.Group className="mt-2 mb-4" >
                        <Form.Label>Choose a room</Form.Label>
                        <Form.Select aria-label="Choose a room:" style={{width: "40%"}}>
                        <option>Select a room</option>
                        <option value="amphi">Amphitheatre</option>
                        <option value="piano">Piano room</option>
                        <option value="karaoke">Karaoke room</option>
                        <option value="mp1">Music practice room 1</option>
                        <option value="mp2">Music practice room 2</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Date  */}
                    <Form.Group className="mt-2 mb-4" >
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            required
                            id="date"
                            type="date"
                            // value={bookingDate} how to fix this
                            style={{width: "40%"}}
                        />
                    </Form.Group>

                    {/* Time */}
                    <Form.Group className="mt-2 mb-4" >
                        <Form.Label>Choose a time</Form.Label>
                        <Form.Select aria-label="Choose a room:" style={{width: "40%"}}>
                        <option>Select a room</option>
                        <option value="9">9:00-10:00</option>
                        <option value="10">10:00-11:00</option>
                        <option value="12">12:00-13:00</option>
                        <option value="13">13:00-14:00</option>
                        <option value="14">14:00-15:00</option>
                        <option value="15">15:00-16:00</option>
                        <option value="16">16:00-17:00</option>
                        </Form.Select>
                    </Form.Group>

                    {/* name */}
                    <Form.Group className="mt-2 mb-4">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control
                            required
                            id="name"
                            type="text"
                            placeholder="Bob Marley"
                            value={bookingName}
                            style={{width: "40%"}}
                            onChange={handleAndValidateName}
                        />
                    </Form.Group>

                    {/* email */}
                    <Form.Group className="mt-2 mb-4">
                        <Form.Label>Enter your email address</Form.Label>
                        <Form.Control
                            required
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            value={bookingEmail}
                            style={{width: "40%"}}
                            onChange={handleAndValidateEmail}
                        />
                    </Form.Group>
                    
                    <div>
                        <Button className="uottawa-btn" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )

}

export default BookingPage;


// TODO 
// flex for the fields - style
// validation for room field, if we chose a room
// gray out date and time for each separate room (like for bike)
// modal for book