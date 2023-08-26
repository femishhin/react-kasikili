
import React from 'react';
import FullLayout from '../layout/Fulllayout';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'; 
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Login() {
  return (
    <FullLayout>
      <div className='pt-5'>
      <main className="form-signin w-100 m-auto">
        <Card>
        <Card.Body>
              <form> 
                 <h1  className="me-0 px-3">
                    <span data-feather="home" className="align-text-bottom"></span>
                    KASIKILI
                </h1> 
                <h4 className="h6 mb-3 fw-normal">Login to manage payouts </h4>
                <FloatingLabel controlId="floatingInput" label="Email address"  className="mb-3">
                  <Form.Control type="email" placeholder="Mobile" />
                </FloatingLabel >
                <FloatingLabel controlId="floatingEmail" label="Email"  className="mb-3">
                  <Form.Control type="email" placeholder="Email Address" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password"  className="mb-3">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <Link className="btn btn-primary mb-3 w-100" to="/dashboard">   Submit </Link>
                <p className='text-center mb-0'>Forgot your password? <Link to="#"><strong>Click Here.</strong> </Link></p>
              </form>
            </Card.Body>
          </Card>
        </main>

      </div>
    </FullLayout>
  );
}

export default Login;
