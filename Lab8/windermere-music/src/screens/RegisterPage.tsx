import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from './components/Footer';
import "./RegisterPage.css"; // Assuming you have a CSS file for styling

const RegisterPage = () => {
  // State for the form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentNumber: "",
    email: "",
    program: "",
    year: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    /*if (name === "email") {
      if (!validateEmail(value)) {
        console.error("Invalid email address");
        return;
      }
    }*/

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    //TO DO
  };

  return (
    <div className="register-page">
      <NavigationBar />
      <div className="register-container">
        <h2>Register here to join the music club</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="studentNumber"
            value={formData.studentNumber}
            onChange={handleChange}
            placeholder="Student Number"
            maxLength={9}
            pattern="\d{9}"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
          <input
            type="text"
            name="program"
            value={formData.program}
            onChange={handleChange}
            placeholder="Program"
          />
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Year"
          />
          <button className="submitButton" type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
    
  );
};

export default RegisterPage;
