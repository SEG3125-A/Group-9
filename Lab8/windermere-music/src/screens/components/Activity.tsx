import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface ActivityInfoProps {
    name: string;
    description: string;
    image: string,
    imagePosition: string
}

const Activity: React.FC<ActivityInfoProps> = (props) => {

    const navigate = useNavigate();

    const navigateToBooking = () => {
        navigate('/booking');
    }

    return (
        <div className={`activity ${props.imagePosition}`}>
            <div className="content">
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    {props.name === 'Book a room' ?
                        <div className='d-flex justify-content-center'>
                            <Button onClick={navigateToBooking} variant='secondary'>Book a room here</Button>
                        </div>
                        :
                        <></>
                    }
                </div>
            </div>
            <div className="image">
                <img src={props.image} alt={props.name} height={300} />
            </div>
        </div>
    );
};

export default Activity;