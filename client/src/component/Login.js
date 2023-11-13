import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Nav, Container, Row, Col, Button, Card, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login from "../images/login.svg"

const Login = () => {
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
      <Row className="justify-content-center shadow  bg-white rounded">
      <Col md={12} lg={6} className="mt-6 mt-lg-0">
          {/* Add your image component here */}
          <div>
            <img
              src={login}
              alt="Your Image"
              className="img-fluid"
            />
          </div>
          <div>
           
            <Nav.Link as={Link} to="/signup" className="text-center">I am not register yet.</Nav.Link>
          </div>

        </Col>
        <Col md={12} lg={6} className="mt-5">
          <Card >
            <Card.Body  >
              <Card.Title className="text-center">Login Form</Card.Title>
              <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
                <Form>
                  <div className="mb-1">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <Field type="email" id="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <Field type="password" id="password" name="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>
                  <div className="mb-1 text-center">
                    <Button type="submit" name='signup' id='signup' variant="primary">Login</Button>
                  </div>
                </Form>
              </Formik>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Login;
