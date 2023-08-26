
import React from 'react'; 
import MainLayout from '../layout/Mainlayout';
import Card from 'react-bootstrap/Card'; 

function Distributors() {
  return (
    <MainLayout>
      <div>
        <Card className='mb-3'>
          <Card.Body>
            <div className='row'>
              <div className='col-md-12 col-lg-8'>
                <dl className="row">
                  <dt className="col-sm-3">FULL NAME</dt>
                  <dd className="col-sm-9">LUKAS KONDJENI</dd>
                </dl>
                <dl className="row">
                  <dt className="col-sm-3">MOBILE</dt>
                  <dd className="col-sm-9">081 808 2569</dd>
                </dl>
                <dl className="row">
                  <dt className="col-sm-3">CODE</dt>
                  <dd className="col-sm-9">XG45896</dd>
                </dl>
                <dl className="row">
                  <dt className="col-sm-3">EMAIL</dt>
                  <dd className="col-sm-9">LUKAS@GMAIL.COM</dd>
                </dl>
                <dl className="row">
                  <dt className="col-sm-3">REGION</dt>
                  <dd className="col-sm-9">KHOMAS</dd>
                </dl>
              </div>
              <div className='col-md-6 col-lg-4 text-center'>
                <div className='d-inline-block'>
                    <h6>BALANCE</h6>
                    <h1><span className="badge bg-success d-block">18 000</span></h1> 
                </div>
              </div> 
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
          <Card.Title>HISTORY <small className='fs14'> (Last fifteen (15) transactions only)</small></Card.Title>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col"> DATE</th>
                  <th scope="col">AMOUNTS ( N$) </th>
                  <th scope="col">RECIPIENT</th>
                  <th scope="col">ACTIVITY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>02-FEB -22</td>
                  <td>10 000</td>
                  <td>ADMIN</td>
                  <td>TOP UP</td> 
                </tr>
                <tr>
                  <td>02-FEB -22</td>
                  <td>600</td>
                  <td>0815226936</td>
                  <td>TRANSFER</td> 
                </tr>
                <tr>
                  <td>02-FEB -22</td>
                  <td>1 000</td>
                  <td>0815226936</td>
                  <td>TRANSFER</td> 
                </tr>
                <tr>
                  <td>02-FEB -22</td>
                  <td>900</td>
                  <td>0815226936</td>
                  <td>TRANSFER</td> 
                </tr>
                <tr>
                  <td>02-FEB -22</td>
                  <td>1 500</td>
                  <td>0815226936</td>
                  <td>TRANSFER</td> 
                </tr>
                <tr>
                  <td>02-FEB -22</td>
                  <td>300</td>
                  <td>0815226936</td>
                  <td>TRANSFER</td> 
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
