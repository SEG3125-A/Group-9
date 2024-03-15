import React from 'react';
import { useNavigate } from "react-router-dom";
import NavigationBar from './components/NavigationBar';


const TeamPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <NavigationBar />
            <h1>
                Welcome to the Team Page!
            </h1>

        </div>
    )

}

export default TeamPage;