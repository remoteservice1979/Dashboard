

import React from "react";

// reactstrap components
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import TreeMenu from 'react-simple-tree-menu';
import './main.css';
import { AgGridReact } from "@ag-grid-community/react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";


class Icons extends React.Component {
    constructor(){
        super();
       
        this.state = {
              modules: AllCommunityModules,
              displayMenu: false,
              monthName: "",
              companyDetail: "",
            };
       
        //  this.showDropdownMenu = this.showDropdownMenu.bind(this);
        //  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
       //   this.selectData = this.selectData.bind(this);
       this.showDetail = this.showDetail.bind(this);
  
       
       };
       
    showDetail(event) {
      
     //   alert(event.target.value);
     console.log(event.label);
     this.setState({
        companyDetail: "This Company " +  event.label 
     })
      
     var title = event.label;
     localStorage.setItem('titleValue', title);
     window.location.href ="map"; 
     this.update();
        //  this.setState({ displayMenu: true }, () => {
        // // // document.addEventListener('click', this.hideDropdownMenu);
        //  });
      }
   
  render() {
   
    
    return (
      <>
        <div className="content">
          <Row >
            <Col md="12" style={{ backgroundColor: "white" }}>
              <Card  style={{ backgroundColor: "dodgerblue" }}>
               
                <CardBody  className="all-icons">
                  <Row>
                  <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="6"
                      md="6"
                      sm="4"
                    >
                   
                   <TreeMenu
                        data={[
                            {
                            key: 'Brand',
                            label: 'MaerskLine',
                            nodes: [
                                {
                                key: 'Payer',
                                label: 'Payer',
                                nodes: [
                                    {
                                    key: 'Customer',
                                    label: 'Nike Cutomer',
                                    nodes: [],
                                    url: 'https://www.google.com/search?q=dog'
                                    },
                                    {
                                    key: 'Customer',
                                    label: 'consignee',
                                    nodes: [],
                                    url: 'https://www.google.com/search?q=fox'
                                    },
                                    {
                                    key: 'Customer',
                                    label: 'Customer',
                                    nodes: [
                                        {
                                            key: 'Customer',
                                            label: 'Wall Mart',
                                            nodes: [
                                                {
                                                    key: 'Customer',
                                                    label: 'Buyer Any',
                                                    nodes: [],
                                                    url: 'https://www.google.com/search?q=dog'
                                                    },

                                                
                                            ],
                                            url: 'https://www.google.com/search?q=dog'
                                            },


                                    ],
                                    url: 'https://www.google.com/search?q=wolf'
                                    }
                                ],
                                url: 'https://www.google.com/search?q=canidae'
                                }
                            ],
                            url: 'https://www.google.com/search?q=mammal'
                            },
                            {
                            key: 'SeaLand',
                            label: 'SeaLand',
                            nodes: [
                                {
                                key: 'Payer',
                                label: 'Payer',
                                nodes: [
                                    {
                                    key: 'Customer',
                                    label: 'Nike',
                                    url: 'https://www.google.com/search?q=lizard'
                                    },
                                    {
                                    key: 'Customer',
                                    label: 'Walmart',
                                    url: 'https://www.google.com/search?q=snake'
                                    },
                                    {
                                    key: 'Customer',
                                    label: 'Address Maker',
                                    url: 'https://www.google.com/search?q=gekko'
                                    }
                                ],
                                url: 'https://www.google.com/search?q=squamata'
                                }
                            ],
                            url: 'https://www.google.com/search?q=reptile'
                            }
                        ]}
                        debounceTime={125}
                        disableKeyboard={false}
                        hasSearch
                        onClickItem={this.showDetail}
                        resetOpenNodesOnDataUpdate={false}

                        />
                
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
