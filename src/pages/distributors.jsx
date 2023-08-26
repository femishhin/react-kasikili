
import React from 'react'; 
import { Link } from "react-router-dom";
import MainLayout from '../layout/Mainlayout';
import Card from 'react-bootstrap/Card'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function Distributors() {
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
              </div>
              <div className='col-md-6 col-lg-4'>
                <Form.Label htmlFor="basic-url">Date From:</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                  <span className="bi bi-calendar3"></span>
                  </InputGroup.Text>
                  <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
                <Form.Label htmlFor="basic-url">Date To :</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                    <span className="bi bi-calendar3"></span>
                  </InputGroup.Text>
                  <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
              </div>
              <div className='col-md-6 col-lg-4 text-end'>
                <div className='d-inline-block'>
                    <h6>TOTAL BALANCE - DISTRIBUTORS</h6>
                    <h1><span className="badge bg-success text-end d-block">200 000</span></h1>
                    <h6>NUMBER OF DISTRIBUTORS</h6>
                    <h1><span className="badge bg-success text-end d-block">120</span></h1>
                </div>
              </div>
              <div className='col-md-12 col-lg-12'>
              <Button className='me-3' variant="success" size="sm" type="submit"> Search</Button>
              <Button variant="primary" size="sm" type="submit"> Download Excel</Button>
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
                  <th scope="col">DISTRIBUTOR CODE</th>
                  <th scope="col">HISTORY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>02-FEB -22</td>
                  <td>86021566968</td>
                  <td>ENABLED</td>
                  <td>KHOMAS</td>
                  <td>7300</td>
                  <td>XK1025</td>
                  <td><Link className='btn btn-success btn-sm' to="/distributorinfo">View More</Link></td>
                </tr>
                <tr>
                  <td>02-FEB -22</td>
                  <td>86021566968</td>
                  <td>ENABLED</td>
                  <td>KHOMAS</td>
                  <td>7300</td>
                  <td>XK1025</td>
                  <td><Link className='btn btn-success btn-sm' to="/distributorinfo">View More</Link></td>
                </tr>
                <tr>
                  <td>02-FEB -22</td>
                  <td>86021566968</td>
                  <td>ENABLED</td>
                  <td>KHOMAS</td>
                  <td>7300</td>
                  <td>XK1025</td>
                  <td><Link className='btn btn-success btn-sm' to="/distributorinfo">View More</Link></td>
                </tr>
                <tr>
                  <td>02-FEB -22</td>
                  <td>86021566968</td>
                  <td>ENABLED</td>
                  <td>KHOMAS</td>
                  <td>7300</td>
                  <td>XK1025</td>
                  <td><Link className='btn btn-success btn-sm' to="/distributorinfo">View More</Link></td>
                </tr>
                <tr>
                  <td>02-FEB -22</td>
                  <td>86021566968</td>
                  <td>ENABLED</td>
                  <td>KHOMAS</td>
                  <td>7300</td>
                  <td>XK1025</td>
                  <td><Link className='btn btn-success btn-sm' to="/distributorinfo">View More</Link></td>
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

export default Distributors;
