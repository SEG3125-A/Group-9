import React from 'react';
import '../App.css';
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    return(
        <div>
            <h1>
                 Welcome to the Windermere Music Club!
            </h1>
           
        </div>
    )

}

export default HomePage;