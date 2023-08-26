
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
              <div className='col-md-6 col-lg-4'>
                 AGENT CODE: <strong className='text-primary'> XP48585 </strong>
              </div>
              <div className='col-md-6 col-lg-4'>
                 AGENT NAME: <strong className='text-primary'> LLEWELLYN MOTINGA </strong>
              </div>
              <div className='col-md-6 col-lg-4'>
                 AGENT BRANCH <strong className='text-primary'> KEETMANSHOOP </strong>
              </div>
            </div>
          </Card.Body>
        </Card>
       
            <div className='row'>
              <div className='col-md-6 col-xl-3'>
                 <Card className='mb-3'>
                  <Card.Body>
                    <h5><u>CREDIT GENERATION</u></h5>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>TYPE AMOUNT</Form.Label>
                      <Form.Control type="email" placeholder="" /> 
                    </Form.Group>
                    <Button className='w-100 mb-3' variant="primary" size="sm" type="submit"> GENERATE</Button>
                    <hr />
                    <h5><u>AVAILABLE CREDITS</u></h5>
                    <h1><span className="badge bg-success d-block">15 000 000</span></h1>
                  </Card.Body>
                </Card>
                <Card className='mb-3'>
                  <Card.Body>
                    <h5><u>CREDIT TRANSFERS</u></h5>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>DISTRIBUTOR MOBILE / CODE</Form.Label>
                      <Form.Control type="email" placeholder="" /> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>TYPE AMOUNT </Form.Label>
                      <Form.Control type="email" placeholder="" /> 
                    </Form.Group>
                    <Button className='w-100' variant="primary" size="sm" type="submit"> TRANSFER</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className='col-md-6 col-xl-3'>
                <Card className='mb-3'>
                    <Card.Body>
                      <h5><u>CREATE DISTRIBUTOR </u></h5>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>MOBILE NUMBER</Form.Label>
                        <Form.Control type="email" placeholder="" /> 
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>EMAIL </Form.Label>
                        <Form.Control type="email" placeholder="" /> 
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>SURNAME </Form.Label>
                        <Form.Control type="email" placeholder="" /> 
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>NAME </Form.Label>
                        <Form.Control type="email" placeholder="" /> 
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>REGION </Form.Label>
                        <Form.Control type="email" placeholder="" /> 
                      </Form.Group>
                      <Button className='w-100' variant="primary" size="sm" type="submit"> CREATE</Button>
                    </Card.Body>
                  </Card>
              </div>
              <div className='col-md-6 col-xl-3'>
                <Card className='mb-3'>
                    <Card.Body>
                      <h5><u>DISTRIBUTOR BLOCK</u></h5>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>MOBILE NUMBER</Form.Label>
                        <Form.Control type="email" placeholder="" /> 
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ENABLE / DISABLE </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option></option>
                          <option value="1">ENABLE</option>
                          <option value="2">DISABLE</option> 
                        </Form.Select>
                      </Form.Group> 
                      <Button className='w-100' variant="primary" size="sm" type="submit"> PROCESS</Button>
                    </Card.Body>
                  </Card>
                  <Card className='mb-3'>
                    <Card.Body>
                      <h5><u>GAME STATUS</u></h5> 
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ENABLE / DISABLE </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option></option>
                          <option value="1">ENABLE</option>
                          <option value="2">DISABLE</option> 
                        </Form.Select>
                      </Form.Group> 
                      <Button className='w-100' variant="primary" size="sm" type="submit"> PROCESS</Button>
                    </Card.Body>
                  </Card>
                  <Card className='mb-3'>
                  <Card.Body> 
                    <p className='text-center fw-bold'>TOTAL BALANCE - DISTRIBUTORS</p>
                    <h1><span className="badge bg-success d-block">200 000</span></h1>
                  </Card.Body>
                </Card>
              </div>
              <div className='col-md-6 col-xl-3'>
                <Card className='mb-3'>
                    <Card.Body>
                      <h5><u>USER BLOCK</u></h5>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>MOBILE NUMBER</Form.Label>
                        <Form.Control type="email" placeholder="" /> 
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ENABLE / DISABLE </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option></option>
                          <option value="1">ENABLE</option>
                          <option value="2">DISABLE</option> 
                        </Form.Select>
                      </Form.Group> 
                      <Button className='w-100' variant="primary" size="sm" type="submit"> PROCESS</Button>
                    </Card.Body>
                  </Card>
                  <Card className='mb-3'>
                    <Card.Body>
                      <h5><u>SET PROBABILTY </u></h5> 
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ENABLE / DISABLE </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option></option>
                          <option value="1">ENABLE</option>
                          <option value="2">DISABLE</option> 
                        </Form.Select>
                      </Form.Group> 
                      <Button className='w-100' variant="primary" size="sm" type="submit"> PROCESS</Button>
                    </Card.Body>
                  </Card>
                  <Card className='mb-3'>
                  <Card.Body> 
                    <p className='text-center fw-bold'>TOTAL BALANCE - USERS</p>
                    <h1><span className="badge bg-success d-block">80 000</span></h1>
                  </Card.Body>
                </Card>
              </div>
            </div> 
      </div>
    </MainLayout> 
  );
}

export default AppManagement;
