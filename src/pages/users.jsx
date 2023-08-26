
import React from 'react'; 
import { Link } from "react-router-dom";
import MainLayout from '../layout/Mainlayout';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function Users() {
  return (
    <MainLayout>
      <div>
        <Card className='mb-3'>
          <Card.Body>
            {/* <Card.Title>Search</Card.Title> */}
            <div className='row'>
              <div className='col-md-6 col-lg-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Search Criteria</Form.Label>
                  <Form.Control type="email" placeholder="" /> 
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Search Reference</Form.Label>
                  <Form.Control type="email" placeholder="" /> 
                </Form.Group>
                <div className="d-flex flex-column align-items-center">
                  <div><Button className='mb-3' variant="success" size="sm" type="submit"> Search</Button></div>
                  <div><Button variant="primary" size="sm" type="submit"> Download Excel</Button></div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4'>
                <Form.Label htmlFor="basic-url">Date From:</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                  <span className="bi bi-calendar4"></span>
                  </InputGroup.Text>
                  <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
                <Form.Label htmlFor="basic-url">Date To :</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                    <span className="bi bi-calendar4"></span>
                  </InputGroup.Text>
                  <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
                <div className='bg-light border p-3'>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                  <div className="row">
                    <div className='col-sm-6'><Button className='w-100 mb-3' variant="success" size="sm" type="submit"> MASS UPDATE</Button></div>
                    <div className='col-sm-6'><Button className='w-100 mb-3' variant="success" size="sm" type="submit">TICK UPDATE</Button></div>
                  </div>
                  <p className='mb-0'>35 SUCCESSFULL UPDATES !!</p>
                </div>
              </div>
              <div className='col-md-6 col-lg-4 text-end'>
                <div className='d-inline-block'>
                    <h6>TOTAL BALANCE - USERS</h6>
                    <h1><span className="badge bg-success text-end d-block">65 000</span></h1>
                    <h6>NUMBER OF REGISTERED USERS</h6>
                    <h1><span className="badge bg-success text-end d-block">2000</span></h1>
                    <h6>TOTAL CASH OUT REQUEST - N$</h6>
                    <h1><span className="badge bg-success text-end d-block">2880</span></h1>
                    <h6>TOTAL USER S CASHING OUT</h6>
                    <h1><span className="badge bg-success text-end d-block">32</span></h1>
                </div>
              </div> 
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
          {/* <Card.Title>Section title</Card.Title> */}
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">REG DATE</th>
                  <th scope="col">MOBILE NO.</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">REGION</th>
                  <th scope="col">BALANCE</th>
                  <th scope="col">REQUEST</th>
                  <th scope="col">AMOUNT</th>
                  <th scope="col">HISTORY</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>02-FEB -22</td>
                  <td>86021566968</td>
                  <td>ENABLED</td>
                  <td>KHOMAS</td>
                  <td>7300</td>
                  <td>-</td>
                  <td>1200</td>
                  <td><Link className='btn btn-success btn-sm' to="/userinfo">View More</Link></td>
                  <td>
                    <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="" />
                    </Form.Group>
                  </td>
                </tr>
                <tr>
                  <td>02-FEB -22</td>
                  <td>86021566968</td>
                  <td>ENABLED</td>
                  <td>KHOMAS</td>
                  <td>18 000</td>
                  <td>CASHOUT</td>
                  <td>-</td>
                  <td><Link className='btn btn-success btn-sm' to="/userinfo">View More</Link></td>
                  <td>
                    <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox1">
                      <Form.Check type="checkbox" label="" />
                    </Form.Group>
                  </td>
                </tr>
                <tr>
                  <td>02-FEB -22</td>
                  <td>86021566968</td>
                  <td>ENABLED</td>
                  <td>KHOMAS</td>
                  <td>18 000</td>
                  <td>CASHOUT</td>
                  <td>-</td>
                  <td><Link className='btn btn-success btn-sm' to="/userinfo">View More</Link></td>
                  <td>
                    <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox1">
                      <Form.Check type="checkbox" label="" />
                    </Form.Group>
                  </td>
                </tr>
                <tr>
                  <td>02-FEB -22</td>
                  <td>86021566968</td>
                  <td>ENABLED</td>
                  <td>KHOMAS</td>
                  <td>18 000</td>
                  <td>CASHOUT</td>
                  <td>-</td>
                  <td><Link className='btn btn-success btn-sm' to="/userinfo">View More</Link></td>
                  <td>
                    <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox1">
                      <Form.Check type="checkbox" label="" />
                    </Form.Group>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </Card.Body>
        </Card>
          
      </div>
    </MainLayout> 
  );
}

export default Users;
