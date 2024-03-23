import React, { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from 'react-i18next';

const RegisterPage = () => {

  const { t, i18n } = useTranslation();

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
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    // Update warning message when language changes
    if (submitted) {
      setWarning(t('studentNumWarning'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "studentNumber" && value.length > 9) {
      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      year: value,
    }));
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const studentNumberStr = formData.studentNumber.toString();
    if (studentNumberStr && studentNumberStr.length !== 9) {
      setWarning(t('studentNumWarning'));
      setSubmitted(true);
      return;
    }
    else {
      setWarning("");
      setShowModal(true);
      setSubmitted(true);
    }
  };

  return (
    <>
      <NavigationBar />
      <Container className="mt-5 page">
        <h2 className="mb-4 text-center"> <i className="fas fa-user-plus m-2"></i>
          {t('register.title')}
        </h2>
        {warning && (
          <div className="alert alert-warning warning-register" role="alert">
            {warning}
          </div>
        )}
        <Form onSubmit={handleSubmit} className="form-wrapper">
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>
                {t('register.inputFirstName')} <span style={{ color: "red" }}>*</span>
              </Form.Label>
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
              <Form.Label>
                {t('register.inputLastName')} <span style={{ color: "red" }}>*</span>
              </Form.Label>
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
              <Form.Label>
                {t('register.inputProgram')} <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                required
                type="text"
                name="program"
                value={formData.program}
                onChange={handleChange}
                placeholder={t('register.inputProgram')}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>
                {t('register.yearSelection.title')} <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Select
                required
                name="year"
                value={formData.year}
                onChange={handleYearChange}
              >
                <option value="">{t('register.yearSelection.select')}</option>
                <option value="first year">{t('register.yearSelection.firstYear')}</option>
                <option value="second year">{t('register.yearSelection.secondYear')}</option>
                <option value="third year">{t('register.yearSelection.thirdYear')}</option>
                <option value="fourth year">{t('register.yearSelection.fourthYear')}</option>
                <option value="fifth year">{t('register.yearSelection.fifthYear')}</option>
                <option value="master's">{t('register.yearSelection.master')}</option>
                <option value="phd">{t('register.yearSelection.phd')}</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>
                {t('register.inputStudentNum')} <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                required
                type="number"
                name="studentNumber"
                value={formData.studentNumber}
                onChange={handleChange}
                placeholder="XXXXXXXXX"
                maxLength={9}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>
              {t('register.inputEmail')} <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abcde058@uottawa.ca"
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="secondary" type="submit">
              {t('register.submitButton')}
            </Button>
          </div>
        </Form>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header>
            <Modal.Title>{t('modal.registerTitle')}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {t('modal.message')}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              {t('modal.close')}
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Footer />
    </>
  );
};

export default RegisterPage;
