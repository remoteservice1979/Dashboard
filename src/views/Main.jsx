
import React from "react";

// reactstrap components
import { Card, CardBody, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import '../views/flip.css';

// var data = require ('../data.js');

class Icons extends React.Component {

  
  render() {
    
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
               
                <CardBody  className="all-icons">
                  <Row>
                  <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="6"
                      md="6"
                      sm="4"
                    >
                     <Link style={{Color : "black"}} to="/customer">
                        <div className="font-icon-detail">
                            <i className="tim-icons icon-bag-16" />

                            <p style={{ fontSize: "2.875em"}}>Booking</p>
                        </div>
                      </Link>
                  </Col>
                  <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="6"
                      md="6"
                      sm="4"
                    >

                    <Link style={{Color : "black"}} to="/customer">
                             <div className="font-icon-detail">
                               <i className="tim-icons icon-bag-16" />

                                     <p style={{ fontSize: "2.875em"}}>Documentation</p>
                             </div>
                      </Link> 
                  
                    </Col>
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="6"
                      md="6"
                      sm="4"
                    >
                      <Link style={{Color : "black"}} to="/customer">
                             <div className="font-icon-detail">
                               <i className="tim-icons icon-bag-16" />

                                     <p style={{ fontSize: "2.875em"}}>Service</p>
                             </div>
                      </Link>
                    </Col>
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="6"
                      md="6"
                      sm="4"
                    >
                    <Link style={{Color : "black"}} to="/customer">
                    <div className="font-icon-detail">
                      <i className="tim-icons icon-bag-16" />

                            <p style={{ fontSize: "2.875em"}}>Financial</p>
                    </div>
                    </Link>
                    </Col>

                  </Row>
               
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Icons;
