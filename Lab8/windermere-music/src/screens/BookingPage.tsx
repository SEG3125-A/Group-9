import React, { ChangeEvent, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Modal from 'react-bootstrap/Modal';

const BookingPage = () => {

    const [bookingDate, setBookingDate] = useState<string>('');
    const [bookingTime, setBookingTime] = useState<string>('Select a time');
    const [bookingName, setBookingName] = useState<string>('');
    const [bookingEmail, setBookingEmail] = useState<string>('');
    const [isRoomValid, setIsRoomValid] = useState<boolean>(false);
    const [isTimeValid, setIsTimeValid] = useState<boolean>(false);
    const [bookingRoom, setBookingRoom] = useState<string>('Select a room');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [warning, setWarning] = useState("");

    const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedRoom = event.target.value;
        setBookingRoom(selectedRoom)
        
        if (selectedRoom == "Select a room"){
            setIsRoomValid(false);
        }else{
            setIsRoomValid(true);
        }
    }

    const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedTime = event.target.value;
        setBookingTime(selectedTime)
        
        if (selectedTime == "Select a time"){
            setIsTimeValid(false);
        }else{
            setIsTimeValid(true);
        }
    }

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBookingDate(event.target.value);
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {

        const nameInput = event.target.value;
        setBookingName(nameInput);
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {

        const emailInput = event.target.value;
        setBookingEmail(emailInput);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();

        //check if all fields valid
        if (isRoomValid && isTimeValid){
            //show modal
            setShowModal(true);
            setWarning("");
        }else{
            setWarning("Please select all the required fields.");
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <NavigationBar />
            <div>
                <Form className="h-100 form-wrapper" onSubmit={handleSubmit}>
                    <div className='title'>
                        <h2 className='text-center'>Book a room</h2>
                    </div>
                    {warning && (
                    <div className="alert alert-warning" role="alert">
                        {warning}
                    </div>
                    )}
                    <div className='mb-3'>
                        <div className='small-container'>
                            {/* Rooms to choose */}
                            <Form.Group className="mt-2 mb-4" style={{ width: '100%' }}>
                                <Form.Label>Room <span style={{color:"red"}}>*</span></Form.Label>
                                <Form.Select 
                                    id="selectRoom"
                                    aria-label="Choose a room:"
                                    value={bookingRoom}
                                    onChange={handleRoomChange}
                                >
                                    <option disabled>Select a room</option>
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
                                    <Form.Label>Date <span style={{color:"red"}}>*</span></Form.Label>
                                        <Form.Control
                                            required
                                            id="date"
                                            type="date"
                                            value={bookingDate}
                                            onChange={handleDateChange}
                                            min={new Date().toISOString().split('T')[0]} // Set minimum selectable date to today
                                        />
                                </Form.Group>

                                {/* Time */}
                                <Form.Group className="mt-2 mb-4" style={{ width: '50%' }} >
                                    <Form.Label>Time <span style={{color:"red"}}>*</span></Form.Label>
                                    <Form.Select 
                                        aria-label="Choose a time:" 
                                        id="selectTime"
                                        value={bookingTime}
                                        onChange={handleTimeChange}
                                    >
                                        <option disabled>Select a time</option>
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
                                    <Form.Label>Name <span style={{color:"red"}}>*</span></Form.Label>
                                    <Form.Control
                                        required
                                        id="name"
                                        type="text"
                                        placeholder="Bob Marley"
                                        value={bookingName}
                                        onChange={handleNameChange}
                                    />
                                </Form.Group>

                                {/* email */}
                                <Form.Group className="mt-2 mb-4" style={{ width: '50%' }}>
                                    <Form.Label>uOttawa email <span style={{color:"red"}}>*</span></Form.Label>
                                    <Form.Control
                                        required
                                        id="email"
                                        type="email"
                                        placeholder="name@uottawa.ca"
                                        value={bookingEmail}
                                        onChange={handleEmailChange}
                                    />
                                </Form.Group>

                            </div>
                        </div>
                    </div>


                    <div className='text-center'>
                        <Button className="btn btn-booking" type="submit" variant='secondary'>
                            Book
                        </Button>
                    </div>
                </Form>
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header>
                    <Modal.Title>Thank you for booking!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        A confirmation email has been sent to your uottawa email.
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
            <Footer />
        </>
    )
}

export default BookingPage;