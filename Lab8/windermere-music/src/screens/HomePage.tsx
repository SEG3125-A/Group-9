import React from 'react';
import { useNavigate } from "react-router-dom";
import NavigationBar from './components/NavigationBar';

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <NavigationBar />
            <h1>
                Welcome to the Windermere Music Club!
            </h1>

        </div>
    )

}

export default HomePage;