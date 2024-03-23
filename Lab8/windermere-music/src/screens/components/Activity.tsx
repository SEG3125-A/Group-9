import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ActivityInfoProps {
    name: string;
    description: string;
    image: string,
    imagePosition: string
}

const Activity: React.FC<ActivityInfoProps> = (props) => {

    const { t } = useTranslation();

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
                    {(props.name === 'Book a room' || props.name === 'Réserver une salle') ?
                        <div className='d-flex justify-content-center'>
                            <Button className='btn-booking' onClick={navigateToBooking} variant='secondary'>{t('activities.bookARoom.button')}</Button>
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