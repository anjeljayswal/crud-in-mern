import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Nav,Container, Row, Col, Button, Card,NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import signup from "../images/signup.avif"

const Signup = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // You can handle the form submission logic here
    console.log('Form submitted:', values);

    // Reset form after submission
    setSubmitting(false);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center shadow  mb-5 bg-white rounded">
        <Col md={12} lg={6}>
          <Card >
            <Card.Body>
              <Card.Title className="text-center">Registration Form</Card.Title>
              <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
                <Form>
                  <div className="mb-1">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <Field type="text" id="name" name="name" className="form-control" autocomplete="off" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <Field type="email" id="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="phone" className="form-label">Phone No.</label>
                    <Field type="number" id="phone" name="phone" className="form-control" />
                    <ErrorMessage name="phone" component="div" className="text-danger" />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="work" className="form-label">Work</label>
                    <Field type="text" id="work" name="work" className="form-control" />
                    <ErrorMessage name="work" component="div" className="text-danger" />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <Field type="password" id="password" name="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="cpassword" className="form-label">Confirm Password:</label>
                    <Field type="password" id="password" name="cpassword" className="form-control" />
                    <ErrorMessage name="cpassword" component="div" className="text-danger" />
                  </div>

                  

                  <div className="mb-1 text-center">
                    <Button type="submit"name='signup' id='signup' variant="primary">Register</Button>
                  </div>
                </Form>
              </Formik>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} className="mt-3 mt-lg-0">
          {/* Add your image component here */}
          <div>
          <img
            src={signup}
            alt="Your Image"
            className="img-fluid"
          />
          </div>
          <div>
          {/* <NavLink  to="/login" className="text-center" >I am already register</NavLink> */}
          <Nav.Link as={Link} to="/login" className="text-center">I am already register</Nav.Link>
          </div>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
