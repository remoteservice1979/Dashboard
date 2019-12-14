import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
const invoice  = require ('../data.js');


class Tables extends React.Component {
    constructor(){
        super();
        this.state = {
            
            brandName: ""
        };
    }

    render() {
        const columns = [
            {
              dataField: "COMPANY_CODE",
              text: "COMPANY CODE"
            },
            {
              dataField: "BRAND",
              text: "Product Name"
            },
            {
              dataField: "BUSINESS_AREA",
              text: "Product Price"
            }
          ];

      // var data =   this.props.Brand;

      var dataSel = invoice.filter(d => d.BRAND === this.props.Brand || d.PAYER_NAME === this.props.Brand );
        return (

            <div className="table-striped" style={{ height: 300, overflow: "auto", backgroundColor: "black" }}>
                <h3 >Invoice Details of {this.props.Brand} Type { this.props.Key}  </h3>
                <BootstrapTable  className="table-striped" style={{ height: 300, overflow: "auto", backgroundColor: "black" }}keyField="id" data={dataSel}  columns={columns} />
            </div>
      
        )
     }
}


export default Tables;

