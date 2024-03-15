import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './screens/HomePage';
import TeamPage from './screens/TeamPage';
import BookingPage from './screens/BookingPage';
import ActivitesPage from './screens/ActivitiesPage';
import RegisterPage from './screens/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<ActivitesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
