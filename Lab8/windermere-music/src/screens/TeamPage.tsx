import React from 'react';
import '../App.css';
import { useLocation, useNavigate } from "react-router-dom";


const TeamPage = () => {

    const navigate = useNavigate();

    return(
        <div>
            <h1>
                 Welcome to the Team Page!
            </h1>
           
        </div>
    )

}

export default TeamPage;