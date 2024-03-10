import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import navbar from './screens/components/navbar';
import HomePage from './screens/HomePage';
import TeamPage from './screens/TeamPage';
import BookingPage from './screens/BookingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Booking" element={<BookingPage/>} />
        <Route path="/Team" element={<TeamPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
