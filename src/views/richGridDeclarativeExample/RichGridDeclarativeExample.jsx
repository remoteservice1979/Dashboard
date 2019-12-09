import React, {Component} from "react";
import {AgGridColumn, AgGridReact} from "@ag-grid-community/react";
import RowDataFactory from "./RowDataFactory";
import DateComponent from "./DateComponent.jsx";
import StatusCellRenderer from './StatusCellRenderer.jsx';
import NameCellEditor from './NameCellEditor.jsx';
import ProficiencyCellRenderer from './ProficiencyCellRenderer.jsx';
import RefData from './RefData';
import SkillsFilter from './SkillsFilter.jsx';
import ProficiencyFilter from './ProficiencyFilter.jsx';
import HeaderGroupComponent from './HeaderGroupComponent.jsx';
import SortableHeaderComponent from './SortableHeaderComponent.jsx';
import classNames from "classnames";
import Dropdown from './Month.jsx';

import "./RichGridDeclarativeExample.css";

import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col
  

 
  } from "reactstrap";

//   import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// for community features
// import {AllCommunityModules} from "@ag-grid-community/all-modules";

// for enterprise features
import {AllModules} from "@ag-grid-enterprise/all-modules";

export default class RichGridDeclarativeExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quickFilterText: null,
            sideBar: false,
            rowData: new RowDataFactory().createRowData(),
            chartData : new RowDataFactory().createEmailRowData(),
            emailData : new RowDataFactory().createEmailRowData(),
            rowCount: null,
            chart: false,
            monthName: "Jan",
            icons: {
                columnRemoveFromGroup: '<i class="fa fa-times"/>',
                filter: '<i class="fa fa-filter"/>',
                sortAscending: '<i class="fa fa-long-arrow-alt-down"/>',
                sortDescending: '<i class="fa fa-long-arrow-alt-up"/>',
                groupExpanded: '<i class="far fa-minus-square"/>',
                groupContracted: '<i class="far fa-plus-square"/>'
            }
        };
        // this.selectData = this.selectData.bind(this);
    }

    /* Grid Events we're listening to */
    onGridReady = (params) => {
        this.api = params.api;
        this.columnApi = params.columnApi;

       this.calculateRowCount();
    };

    setBrandData = name => {
        window.localStorage.removeItem("Brand");
        window.localStorage.removeItem("brandData");
       //  if (name === ""){
       //   localStorage.setItem('Brand',"Maersk Line");
       //  }
        window.localStorage.setItem('Brand',name);
     //   window.localStorage.setItem("brandData", new RowDataFactory().createBrandRowMonthWiseData(name));
     // rowData: new RowDataFactory().createRowData(),
        this.setState({
         currentBrand : window.localStorage.getItem('Brand'),
         rowData: new RowDataFactory().createRowData()
   
       });
   
     //  var data = new RowDataFactory().createBrandRowMonthWiseData(name);
     //  console.log(data);
     }
     
    onDispute =() => {
        // this.setState({
        //     rowData: new RowDataFactory().createRowData()
        // });
        // var rowDatas = this.state.chartData;
        this.setState({
            rowData: this.state.chartData
        })
        this.setState({
            chart: true 
        })
        var columnDefs = [
            { field: "CaseNumber", width: 150, chartDataType: 'category' },
            { field: "type", chartDataType: 'series', sort: 'desc' },
        ];

        // this.api.rowData = this.state.chartData;
        this.api.enableRangeSelection = true;
        this.api.enableCharts = true;
        this.api.columnDefs = columnDefs;
       
        var params = {
         
            cellRange: {
                columns: ['CaseNumber','Times_Case_Reassigned__c'],
              
            },
           // rowData: rowDatas,
            chartType: 'groupedBar',
            processChartOptions: function(params) {
                var opts = params.options;
                opts.title = { text: "Disbute Case Ratio" };
    
                if (opts.xAxis) {
                    opts.xAxis.label.rotation = 30;
                }
    
                opts.seriesDefaults.tooltip.renderer = function(params) {
                    var titleStyle = params.color ? ' style="color: white; background-color:' + params.color + '"' : '';
                    var title = params.title ? '<div class="title"' + titleStyle + '>' + params.title + '</div>' : '';
                    var value = params.datum[params.yKey].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    return title + '<div class="content" style="text-align: center">' + value + '</div>';
                };
    
                return opts;
            }
        };
    
        this.api.createRangeChart(params);
    }

    selectData(e) {
        var monthVal =  e.target.innerText;
        this.setState({
            monthName: e.target.innerText
        })
    
        localStorage.setItem("titleValue",monthVal );
      }

    //   handleOnChange(e) {
    //     this.setState({
    //       selectValue: e.target.value
    //     });
    //   }

    onEmail =() => {
        // this.setState({
        //     rowData: new RowDataFactory().createRowData()
        // });
        // var rowDatas = this.state.chartData;
        this.setState({
            rowData: this.state.emailData
        })
        this.setState({
            chart: true 
        })
        var columnDefs = [
            { field: "CaseNumber", width: 150, chartDataType: 'category' },
            { field: "type", chartDataType: 'series', sort: 'desc' },
        ];

        // this.api.rowData = this.state.chartData;
        this.api.enableRangeSelection = true;
        this.api.enableCharts = true;
        this.api.columnDefs = columnDefs;
       
        var params = {
         
            cellRange: {
                columns: ['CaseNumber','Times_Case_Reassigned__c'],
              
            },
           // rowData: rowDatas,
            chartType: 'groupedBar',
            processChartOptions: function(params) {
                var opts = params.options;
                opts.title = { text: "Disbute Case Ratio" };
    
                if (opts.xAxis) {
                    opts.xAxis.label.rotation = 30;
                }
    
                opts.seriesDefaults.tooltip.renderer = function(params) {
                    var titleStyle = params.color ? ' style="color: white; background-color:' + params.color + '"' : '';
                    var title = params.title ? '<div class="title"' + titleStyle + '>' + params.title + '</div>' : '';
                    var value = params.datum[params.yKey].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    return title + '<div class="content" style="text-align: center">' + value + '</div>';
                };
    
                return opts;
            }
        };
    
        this.api.createRangeChart(params);
    }

    
    onCellClicked = (event) => {
        console.log('onCellClicked: ' + event.data.name + ', col ' + event.colIndex);
    };

    onRowSelected = (event) => {
        console.log('onRowSelected: ' + event.node.data.name);
    };

    /* Demo related methods */
    onToggleSidebar = (event) => {
        this.setState({sideBar: event.target.checked});
    };

    deselectAll() {
        this.api.deselectAll();
    }

    onQuickFilterText = (event) => {
        this.setState({quickFilterText: event.target.value});
    };

    onRefreshData = () => {
        this.setState({
            rowData: new RowDataFactory().createRowData()
        });
    };

    invokeSkillsFilterMethod = () => {
        let skillsFilter = this.api.getFilterInstance('skills');
        let componentInstance = skillsFilter.getFrameworkComponentInstance();
        componentInstance.helloFromSkillsFilter();
    };

    dobFilter = () => {
        let dateFilterComponent = this.api.getFilterInstance('dob');
        dateFilterComponent.setModel({
            type: 'equals',
            dateFrom: '2000-01-01'
        });

        // as the date filter is a React component, and its using setState internally, we need
        // to allow time for the state to be set (as setState is an async operation)
        // simply wait for the next tick
        setTimeout(() => {
            this.api.onFilterChanged();
        });
    };

    calculateRowCount = () => {
        if (this.api && this.state.rowData) {
            const model = this.api.getModel();
            const totalRows = this.state.rowData.length;
            const processedRows = model.getRowCount();
            this.setState({
                rowCount: processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString()
            });
        }
    };

    static countryCellRenderer(params) {
        if (params.value) {
            return `<img border='0' width='15' height='10' style='margin-bottom: 2px' src='http://flags.fmcdn.net/data/flags/mini/${RefData.COUNTRY_CODES[params.value]}.png'> ${params.value}`;
        } else {
            return null;
        }
    }

    static dateCellRenderer(params) {
        return RichGridDeclarativeExample.pad(params.value.getDate(), 2) + '/' +
            RichGridDeclarativeExample.pad(params.value.getMonth() + 1, 2) + '/' +
            params.value.getFullYear();
    }

    static pad(num, totalStringSize) {
        let asString = num + "";
        while (asString.length < totalStringSize) asString = "0" + asString;
        return asString;
    }

    render() {
        return (
            <div style={{  
              

              }}>
                
                <div style={{display: "inline-block", width: "100%"}}>
                    <div style={{float: "left",  marginRight: 25}}>
                        <b>Data information: </b>{ this.state.rowCount }
                    </div>
                </div>
        <div style={{  marginTop: 58, float: "left", width: "100%",  overflow: "initial",  position: "absolute" }} >
  
         <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Total Shipments</h5>
                      <CardTitle tag="h2">Performance</CardTitle>
                     
                    </Col>
                   
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.Brand === "Maersk Line" 
                          })}
                          color="info"
                          id="0"
                          size="sm"
                        //   onClick={() => this.setBgChartData("data1")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span 
                          
                          className="d-none d-sm-block d-md-block d-lg-block d-xl-block"
                          onClick={() => this.setBrandData("Maersk Line")}
                          >
                            Maersk Line
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.Brand === "Sea and Land"  
                          })}
                        //   onClick={() => this.setBgChartData("data2")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span  onClick={() => this.setBrandData("Sea and Land")}  className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Sea and Land
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.Brand === "Safmarine" 
                          })}
                        //   onClick={() => this.setBgChartData("data3")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span onClick={() => this.setBrandData("Safmarine")}  className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Safmarine
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                
              </Card>
            </Col>
          </Row>
        </div>   
          
                <div style={{marginTop: 0}}>
                    <div>
                        <span>
                            Grid API:
                            <button style={{float: "right", marginTop:20 }}onClick={() => {
                                this.api.selectAll()
                            }} className="btn btn-primary">Select All</button>
                            <button style={{float: "right", marginTop:20 }} onClick={() => {
                                this.api.deselectAll()
                            }} className="btn btn-primary">Clear Selection</button>
                           
                            <button style={{float: "right", marginTop:20 }} onClick={this.onRefreshData} className="btn btn-primary">Refresh Data</button>
                
                        </span>
                        {/* <span style={{float: "right"}}>
                            Column API:
                            <button onClick={() => {
                                this.columnApi.setColumnVisible('country', false)
                            }} className="btn btn-primary">Hide Country Column</button>
                            <button onClick={() => {
                                this.columnApi.setColumnVisible('country', true)
                            }} className="btn btn-primary">Show Country Column</button>
                        </span> */}
                    </div>
                    <div style={{display: "inline-block", width: "100%", marginTop: 10, marginBottom: 10}}>
                       
                        {/* // <div style={{float: "right"}}>
                        //     Filter API:
                        //     <button onClick={this.invokeSkillsFilterMethod}
                        //             className="btn btn-primary">Invoke Skills Filter Method
                        //     </button>
                        //     <button onClick={this.dobFilter} className="btn btn-primary">DOB equals to 01/01/2000
                        //     </button>
                        // </div> */}
                    </div> 
                    <div style={{display: "inline-block", width: "100%", marginTop: 10, marginBottom: 10}}>
                        <div style={{float: "center"}}>
                            <label htmlFor="sideBarToggle">Show Side Bar&nbsp;</label>
                            <input type="checkbox" id="sideBarToggle" onChange={this.onToggleSidebar} style={{marginRight: 5}}/>
                        </div>
                        <div style={{float: "right", marginLeft: 1027,  marginTop: 12}}>
                          
                         <div class="form-group">
                            <label for="usr">Name:</label>
                            <input placeholder="Type text to filter..." onChange={this.onQuickFilterText}  type="text" class="form-control" id="usr"/>
                        </div>    
                    {/* <InputGroup className="search-bar">
                        <Button
                            color="link"
                            data-target="#searchModal"
                            data-toggle="modal"
                            id="search-button"
                            onClick={this.toggleModalSearch}
                        >
                            <i className="tim-icons icon-zoom-split" />
                            <span className="d-lg-none d-md-block"  onChange={this.onQuickFilterText}>Search</span>
                        </Button>
                     </InputGroup> */}
                        
                        
                        </div>
                    </div>
                    <div class="button-bar">
                        <button  className="btn btn-primary" style={{marginLeft: 251}} onClick={this.onDispute}>KPI For Dispute Case Ratio</button>
                        <button  className="btn btn-primary" style={{marginRight: 200}} onClick={this.onEmail}>KPI for Email case Ratio</button>
                        
                   
                    </div>
                    <div style={{ float: "right"}}>
                    <Dropdown style={{height: 400}} selectData={this.selectData.bind(this)} monthName= {this.state.monthName}/>
                    </div>
                    <div style={{height: 400, width: 1085, padding: '20px', marginRight: 25, marginLeft: 235 }} className="ag-theme-balham">
                        <AgGridReact
                            // listening for events
                            onGridReady={this.onGridReady}
                            onRowSelected={this.onRowSelected}
                            onCellClicked={this.onCellClicked}
                            onModelUpdated={this.calculateRowCount}

                            // binding to simple properties
                            sideBar={this.state.sideBar}
                            quickFilterText={this.state.quickFilterText}

                            // binding to an object property
                            icons={this.state.icons}

                            // binding to array properties
                            rowData={this.state.rowData} 
                            enableRangeSelection = {true}
                            enableCharts = {true}
                            // register all modules (row model, csv/excel, row grouping etc)
                            modules={AllModules}

                            // no binding, just providing hard coded strings for the properties
                            // boolean properties will default to true if provided (ie suppressRowClickSelection => suppressRowClickSelection="true")
                            suppressRowClickSelection
                            rowSelection="multiple"
                            groupHeaders

                            // setting grid wide date component
                            dateComponentFramework={DateComponent}

                            // setting default column properties
                            defaultColDef={{
                                resizable: true,
                                sortable: true,
                                filter: true,
                                headerComponentFramework: SortableHeaderComponent,
                                headerComponentParams: {
                                    menuIcon: 'fa-bars'
                                },
                                // enableRangeSelection: true,
                                // enableCharts: true
                            }}>
                            <AgGridColumn headerName="#" width={30}
                                          checkboxSelection sortable={false} suppressMenu filter={false} pinned>
                            </AgGridColumn>
                            <AgGridColumn headerName="Ships" headerGroupComponentFramework={HeaderGroupComponent}>
                                <AgGridColumn field="CaseNumber" width={150}
                                              cellEditorFramework={NameCellEditor}
                                              enableRowGroup enablePivot pinned editable/>
                                <AgGridColumn field="CreateDate" width={250}
                                              cellEditorFramework={NameCellEditor}
                                              enableRowGroup enablePivot pinned editable/>
                         
                                 </AgGridColumn>

                                 <AgGridColumn field="LinerBrand_c" width={500} filter="text"/> 
                            <AgGridColumn headerName="">
                                <AgGridColumn field="Status " width={200} enableRowGroup enablePivot sortable={false}
                                              cellRendererFramework={StatusCellRenderer}
                                              filterFramework={SkillsFilter}/>
                                 
                                <AgGridColumn field="AgeInBusinessHours" width={250} filter="text"/>
                                <AgGridColumn field="CountEmailsFromContact_c" width={500} filter="text"/>

                                <AgGridColumn field="proficiency" width={150} filter="text"/>
                                <AgGridColumn field="type" width={150} filter="text"/>
                                <AgGridColumn field="SubType_c" width={500} filter="text"/> 

                                <AgGridColumn field="CaseChannel" width={150} filter="text"/>
                                <AgGridColumn field="Department" width={150} filter="text"/>
                                <AgGridColumn field="LinerBrand_c" width={500} filter="text"/> 

                                <AgGridColumn field="Customer_Follow_Up_Notes__c" width={150} filter="text"/>
                                <AgGridColumn field="Reason_For_Case__c" width={150} filter="text"/>
                                <AgGridColumn field="Priority" width={500} filter="text"/>

                                <AgGridColumn field="Times_Case_Reassigned__c" width={150} filter="text"/>
                                <AgGridColumn field="OwnerId" width={150} filter="text"/>
                                <AgGridColumn field="CUSTOMER_DESC" width={500} filter="text"/>
                            </AgGridColumn>
                            
                            
                        </AgGridReact>
                    </div>
                </div>
            </div>
        );
    }
}
