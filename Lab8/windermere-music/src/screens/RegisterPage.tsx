import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';

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
  const [warning, setWarning] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);

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

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.studentNumber ||
      !formData.email ||
      !formData.program ||
      !formData.year
    ) {
      setWarning("Please fill all the required fields.");
    } else {
      setWarning("");
      console.log("Form submitted", formData);
      setShowModal(true);
    }
  };

  return (
    <>
      <NavigationBar />
      <Container className="mt-5">
        <h2 className="mb-4 text-center">
          Register here to join the music club
        </h2>
        {warning && (
          <div className="alert alert-warning warning-register" role="alert">
            {warning}
          </div>
        )}
        <Form onSubmit={handleSubmit} className="form-wrapper">
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>First Name <span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Last Name <span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Program <span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control
                required
                type="text"
                name="program"
                value={formData.program}
                onChange={handleChange}
                placeholder="Program"
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Year <span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control
                required
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="XXXX"
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Student Number <span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control
                required
                type="text"
                name="studentNumber"
                value={formData.studentNumber}
                onChange={handleChange}
                placeholder="XXXXXXXXX"
                maxLength={9}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>uOttawa email <span style={{color:"red"}}>*</span></Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@uottawa.ca"
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header>
            <Modal.Title>Thank you for registering!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                A confirmation email has been sent to your uottawa email.
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
      </Container>
      <Footer />
    </>
  );
};

export default RegisterPage;
