
import React from 'react'; 
import MainLayout from '../layout/Mainlayout';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 

function AppManagement() {
  return (
    <MainLayout>
      <div>
        <Card className='mb-3'>
          <Card.Body>
            <div className='row'>
              <div className='col-md-6'>
                ADMIN NAME: <strong className='text-primary'> LLEWELLYN MOTINGA  </strong>
              </div> 
              <div className='col-md-6'>
                TAB ACCESS <strong className='text-primary'> USER ; DISTRIBUTOR ; APP MANAGEMNET  </strong>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className='mb-3'>
          <Card.Body>
            <Card.Title>PROFILE SETTINGS</Card.Title>
            <dl className="row">
              <dt className="col-sm-3">NAME</dt>
              <dd className="col-sm-9">LLEWELLYN</dd>
            </dl>
            <dl className="row">
              <dt className="col-sm-3">SURNAME</dt>
              <dd className="col-sm-9">MOTINGA</dd>
            </dl>
            <dl className="row">
              <dt className="col-sm-3">EMAIL ADDRESS</dt>
              <dd className="col-sm-9">llewellyn@mwaikange.com</dd>
            </dl>
            <dl className="row">
              <dt className="col-sm-3">MOBILE NUMBER</dt>
              <dd className="col-sm-9 mb-0">+264 81 808 3704</dd>
            </dl>
          </Card.Body>
        </Card>
        <div className='row'>
          <div className='col-md-6 col-xl-4'>
              <Card className='mb-3'>
                <Card.Body>
                  <Form.Group className="mb-3" controlId="formBasicEmail"> 
                    <Form.Control type="email" placeholder="Old Password" /> 
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail"> 
                    <Form.Control type="email" placeholder="New Password" /> 
                  </Form.Group>
                  <Button className='w-100 mb-3' variant="primary" size="sm" type="submit"> CHANGE PASSWORD</Button> 
                </Card.Body>
              </Card>
          </div>
          <div className='col-md-6 col-xl-8'>
              <Card className='mb-3'>
                <Card.Body>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <Form.Group className="mb-3" controlId="formBasicEmail"> 
                        <Form.Control type="email" placeholder="NAME" /> 
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail"> 
                        <Form.Control type="email" placeholder="SURNAME" /> 
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail"> 
                        <Form.Control type="email" placeholder="EMAIL" /> 
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail"> 
                        <Form.Control type="email" placeholder="MOBILE NUMBER" /> 
                      </Form.Group>
                    </div>
                    <div className='col-lg-6'>
                      <h5 className="mb-3"><u>LEVEL ( TAB) ACCESS</u></h5>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="USER TAB" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="DISTRIBUTOR TAB" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="APP MANAGEMENT" />
                      </Form.Group>
                      <Button className='w-100 mb-3' variant="primary" size="sm" type="submit"> CREATE ADMIN</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
          </div>
        </div> 
      </div>
    </MainLayout> 
  );
}

export default AppManagement;
