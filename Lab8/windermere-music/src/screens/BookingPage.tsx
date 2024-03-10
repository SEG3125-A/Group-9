import React from 'react';
import '../App.css';
import { useLocation, useNavigate } from "react-router-dom";


const BookingPage = () => {

    const navigate = useNavigate();

    return(
        <div>
            {/* Put navbar here */}
            <h1>
                Book A Room
            </h1>
            <div>
                I'll work on this later sobs
            </div>
            <div className='booking-wrapper'>
                
                <form>
                    <div className='room-wrapper'>
                        Rooms 
                        <select>
                            <option selected disabled value="none">Please select a room:</option>
                            <option value="ampi">Amphitheatre</option>
                            <option value="piano">Piano Room</option>
                            <option value="karaoke">Karaoke Room</option>
                            <option value="mp1">Music Practice Room 1</option>
                            <option value="mp2">Music Practice Room 2</option>
                        </select>
                    </div>
                    <div className='room-text-wrapper'>
                    <label>Date:
                        <input type="text" />
                    </label>
                    <label>Time:
                        <input type="text" />
                    </label>
                    <label>Name:
                        <input type="text" />
                    </label>
                    <label>Email:
                        <input type="text" />
                    </label>
                    </div>
                    <div className='room-button'>
                        <input type='submit' value="Book"/>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default BookingPage;