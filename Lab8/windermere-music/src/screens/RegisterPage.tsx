import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS

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
      <div className="container mt-5">
        <h2 className="mb-4">Register here to join the music club</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="studentNumber"
              value={formData.studentNumber}
              onChange={handleChange}
              placeholder="Student Number"
              maxLength={9}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="program"
              value={formData.program}
              onChange={handleChange}
              placeholder="Program"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Year"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
