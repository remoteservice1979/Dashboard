"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@ag-grid-community/react");

var _RowDataFactory = _interopRequireDefault(require("./RowDataFactory"));

var _DateComponent = _interopRequireDefault(require("./DateComponent.jsx"));

var _StatusCellRenderer = _interopRequireDefault(require("./StatusCellRenderer.jsx"));

var _NameCellEditor = _interopRequireDefault(require("./NameCellEditor.jsx"));

var _ProficiencyCellRenderer = _interopRequireDefault(require("./ProficiencyCellRenderer.jsx"));

var _RefData = _interopRequireDefault(require("./RefData"));

var _SkillsFilter = _interopRequireDefault(require("./SkillsFilter.jsx"));

var _ProficiencyFilter = _interopRequireDefault(require("./ProficiencyFilter.jsx"));

var _HeaderGroupComponent = _interopRequireDefault(require("./HeaderGroupComponent.jsx"));

var _SortableHeaderComponent = _interopRequireDefault(require("./SortableHeaderComponent.jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Month = _interopRequireDefault(require("./Month.jsx"));

require("./RichGridDeclarativeExample.css");

var _reactstrap = require("reactstrap");

var _allModules = require("@ag-grid-enterprise/all-modules");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RichGridDeclarativeExample =
/*#__PURE__*/
function (_Component) {
  _inherits(RichGridDeclarativeExample, _Component);

  function RichGridDeclarativeExample(props) {
    var _this;

    _classCallCheck(this, RichGridDeclarativeExample);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RichGridDeclarativeExample).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onGridReady", function (params) {
      _this.api = params.api;
      _this.columnApi = params.columnApi;

      _this.calculateRowCount();
    });

    _defineProperty(_assertThisInitialized(_this), "setBrandData", function (name) {
      window.localStorage.removeItem("Brand");
      window.localStorage.removeItem("brandData"); //  if (name === ""){
      //   localStorage.setItem('Brand',"Maersk Line");
      //  }

      window.localStorage.setItem('Brand', name);
      var Month = localStorage.getItem('titleValue'); //   window.localStorage.setItem("brandData", new RowDataFactory().createBrandRowMonthWiseData(name));
      // rowData: new RowDataFactory().createRowData(),

      _this.setState({
        currentBrand: window.localStorage.getItem('Brand'),
        rowData: new _RowDataFactory.default().createRowMonthWiseData(Month)
      }); //  var data = new RowDataFactory().createBrandRowMonthWiseData(name);
      //  console.log(data);

    });

    _defineProperty(_assertThisInitialized(_this), "onDispute", function () {
      // this.setState({
      //     rowData: new RowDataFactory().createRowData()
      // });
      // var rowDatas = this.state.chartData;
      _this.setState({
        rowData: _this.state.chartData
      });

      _this.setState({
        chart: true
      });

      var columnDefs = [{
        field: "CaseNumber",
        width: 150,
        chartDataType: 'category'
      }, {
        field: "type",
        chartDataType: 'series',
        sort: 'desc'
      }]; // this.api.rowData = this.state.chartData;

      _this.api.enableRangeSelection = true;
      _this.api.enableCharts = true;
      _this.api.columnDefs = columnDefs;
      var params = {
        cellRange: {
          columns: ['CaseNumber', 'Times_Case_Reassigned__c']
        },
        // rowData: rowDatas,
        chartType: 'groupedBar',
        processChartOptions: function processChartOptions(params) {
          var opts = params.options;
          opts.title = {
            text: "Disbute Case Ratio"
          };

          if (opts.xAxis) {
            opts.xAxis.label.rotation = 30;
          }

          opts.seriesDefaults.tooltip.renderer = function (params) {
            var titleStyle = params.color ? ' style="color: white; background-color:' + params.color + '"' : '';
            var title = params.title ? '<div class="title"' + titleStyle + '>' + params.title + '</div>' : '';
            var value = params.datum[params.yKey].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            return title + '<div class="content" style="text-align: center">' + value + '</div>';
          };

          return opts;
        }
      };

      _this.api.createRangeChart(params);
    });

    _defineProperty(_assertThisInitialized(_this), "onEmail", function () {
      // this.setState({
      //     rowData: new RowDataFactory().createRowData()
      // });
      // var rowDatas = this.state.chartData;
      _this.setState({
        rowData: _this.state.emailData
      });

      _this.setState({
        chart: true
      });

      var columnDefs = [{
        field: "CaseNumber",
        width: 150,
        chartDataType: 'category'
      }, {
        field: "type",
        chartDataType: 'series',
        sort: 'desc'
      }]; // this.api.rowData = this.state.chartData;

      _this.api.enableRangeSelection = true;
      _this.api.enableCharts = true;
      _this.api.columnDefs = columnDefs;
      var params = {
        cellRange: {
          columns: ['CaseNumber', 'Times_Case_Reassigned__c']
        },
        // rowData: rowDatas,
        chartType: 'groupedBar',
        processChartOptions: function processChartOptions(params) {
          var opts = params.options;
          opts.title = {
            text: "Disbute Case Ratio"
          };

          if (opts.xAxis) {
            opts.xAxis.label.rotation = 30;
          }

          opts.seriesDefaults.tooltip.renderer = function (params) {
            var titleStyle = params.color ? ' style="color: white; background-color:' + params.color + '"' : '';
            var title = params.title ? '<div class="title"' + titleStyle + '>' + params.title + '</div>' : '';
            var value = params.datum[params.yKey].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            return title + '<div class="content" style="text-align: center">' + value + '</div>';
          };

          return opts;
        }
      };

      _this.api.createRangeChart(params);
    });

    _defineProperty(_assertThisInitialized(_this), "onCellClicked", function (event) {
      console.log('onCellClicked: ' + event.data.name + ', col ' + event.colIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onRowSelected", function (event) {
      console.log('onRowSelected: ' + event.node.data.name);
    });

    _defineProperty(_assertThisInitialized(_this), "onToggleSidebar", function (event) {
      _this.setState({
        sideBar: event.target.checked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onQuickFilterText", function (event) {
      _this.setState({
        quickFilterText: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onRefreshData", function () {
      _this.setState({
        rowData: new _RowDataFactory.default().createRowData()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "invokeSkillsFilterMethod", function () {
      var skillsFilter = _this.api.getFilterInstance('skills');

      var componentInstance = skillsFilter.getFrameworkComponentInstance();
      componentInstance.helloFromSkillsFilter();
    });

    _defineProperty(_assertThisInitialized(_this), "dobFilter", function () {
      var dateFilterComponent = _this.api.getFilterInstance('dob');

      dateFilterComponent.setModel({
        type: 'equals',
        dateFrom: '2000-01-01'
      }); // as the date filter is a React component, and its using setState internally, we need
      // to allow time for the state to be set (as setState is an async operation)
      // simply wait for the next tick

      setTimeout(function () {
        _this.api.onFilterChanged();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "calculateRowCount", function () {
      if (_this.api && _this.state.rowData) {
        var model = _this.api.getModel();

        var totalRows = _this.state.rowData.length;
        var processedRows = model.getRowCount();

        _this.setState({
          rowCount: processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString()
        });
      }
    });

    _this.state = {
      quickFilterText: null,
      sideBar: false,
      rowData: new _RowDataFactory.default().createRowData(),
      chartData: new _RowDataFactory.default().createEmailRowData(),
      emailData: new _RowDataFactory.default().createEmailRowData(),
      rowCount: null,
      chart: false,
      monthName: "Feb",
      icons: {
        columnRemoveFromGroup: '<i class="fa fa-times"/>',
        filter: '<i class="fa fa-filter"/>',
        sortAscending: '<i class="fa fa-long-arrow-alt-down"/>',
        sortDescending: '<i class="fa fa-long-arrow-alt-up"/>',
        groupExpanded: '<i class="far fa-minus-square"/>',
        groupContracted: '<i class="far fa-plus-square"/>'
      }
    }; // this.selectData = this.selectData.bind(this);

    return _this;
  }
  /* Grid Events we're listening to */


  _createClass(RichGridDeclarativeExample, [{
    key: "selectData",
    value: function selectData(e) {
      var monthVal = e.target.innerText;
      localStorage.removeItem("titleValue");
      localStorage.setItem("titleValue", monthVal);
      this.setState({
        monthName: e.target.innerText,
        rowData: new _RowDataFactory.default().createRowMonthWiseData(monthVal)
      });
    } //   handleOnChange(e) {
    //     this.setState({
    //       selectValue: e.target.value
    //     });
    //   }

  }, {
    key: "deselectAll",
    value: function deselectAll() {
      this.api.deselectAll();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        style: {}
      }, _react.default.createElement("div", {
        style: {
          display: "inline-block",
          width: "100%"
        }
      }, _react.default.createElement("div", {
        style: {
          float: "left",
          marginRight: 25
        }
      }, _react.default.createElement("b", null, "Data information: "), this.state.rowCount)), _react.default.createElement("div", {
        style: {
          marginTop: 58,
          float: "left",
          width: "100%",
          overflow: "initial",
          position: "absolute"
        }
      }, _react.default.createElement(_reactstrap.Row, null, _react.default.createElement(_reactstrap.Col, {
        xs: "12"
      }, _react.default.createElement(_reactstrap.Card, {
        className: "card-chart"
      }, _react.default.createElement(_reactstrap.CardHeader, null, _react.default.createElement(_reactstrap.Row, null, _react.default.createElement(_reactstrap.Col, {
        className: "text-left",
        sm: "6"
      }, _react.default.createElement("h5", {
        className: "card-category"
      }, "Total Shipments"), _react.default.createElement(_reactstrap.CardTitle, {
        tag: "h2"
      }, "Performance")), _react.default.createElement(_reactstrap.Col, {
        sm: "6"
      }, _react.default.createElement(_reactstrap.ButtonGroup, {
        className: "btn-group-toggle float-right",
        "data-toggle": "buttons"
      }, _react.default.createElement(_reactstrap.Button, {
        color: "info",
        id: "1",
        size: "sm",
        tag: "label",
        className: (0, _classnames.default)("btn-simple", {
          active: this.state.Brand === "All"
        }) //   onClick={() => this.setBgChartData("data2")}

      }, _react.default.createElement("input", {
        className: "d-none",
        name: "options",
        type: "radio"
      }), _react.default.createElement("span", {
        onClick: function onClick() {
          return _this2.setBrandData("All");
        },
        className: "d-none d-sm-block d-md-block d-lg-block d-xl-block"
      }, "All"), _react.default.createElement("span", {
        className: "d-block d-sm-none"
      }, _react.default.createElement("i", {
        className: "go-icons icon-gift-2"
      }))), _react.default.createElement(_reactstrap.Button, {
        tag: "label",
        className: (0, _classnames.default)("btn-simple", {
          active: this.state.Brand === "Maersk Line"
        }),
        color: "info",
        id: "0",
        size: "sm" //   onClick={() => this.setBgChartData("data1")}

      }, _react.default.createElement("input", {
        defaultChecked: true,
        className: "d-none",
        name: "options",
        type: "radio"
      }), _react.default.createElement("span", {
        className: "d-none d-sm-block d-md-block d-lg-block d-xl-block",
        onClick: function onClick() {
          return _this2.setBrandData("Maersk Line");
        }
      }, "Maersk Line"), _react.default.createElement("span", {
        className: "d-block d-sm-none"
      }, _react.default.createElement("i", {
        className: "go-icons icon-single-02"
      }))), _react.default.createElement(_reactstrap.Button, {
        color: "info",
        id: "1",
        size: "sm",
        tag: "label",
        className: (0, _classnames.default)("btn-simple", {
          active: this.state.Brand === "Sea and Land"
        }) //   onClick={() => this.setBgChartData("data2")}

      }, _react.default.createElement("input", {
        className: "d-none",
        name: "options",
        type: "radio"
      }), _react.default.createElement("span", {
        onClick: function onClick() {
          return _this2.setBrandData("Sea and Land");
        },
        className: "d-none d-sm-block d-md-block d-lg-block d-xl-block"
      }, "Sea and Land"), _react.default.createElement("span", {
        className: "d-block d-sm-none"
      }, _react.default.createElement("i", {
        className: "go-icons icon-gift-2"
      }))), _react.default.createElement(_reactstrap.Button, {
        color: "info",
        id: "2",
        size: "sm",
        tag: "label",
        className: (0, _classnames.default)("btn-simple", {
          active: this.state.Brand === "Safmarine"
        }) //   onClick={() => this.setBgChartData("data3")}

      }, _react.default.createElement("input", {
        className: "d-none",
        name: "options",
        type: "radio"
      }), _react.default.createElement("span", {
        onClick: function onClick() {
          return _this2.setBrandData("Safmarine");
        },
        className: "d-none d-sm-block d-md-block d-lg-block d-xl-block"
      }, "Safmarine"), _react.default.createElement("span", {
        className: "d-block d-sm-none"
      }, _react.default.createElement("i", {
        className: "go-icons icon-tap-02"
      }))))))))))), _react.default.createElement("div", {
        style: {
          marginTop: 0
        }
      }, _react.default.createElement("div", null, _react.default.createElement("span", null, "Grid API:", _react.default.createElement("button", {
        style: {
          float: "right",
          marginTop: 20
        },
        onClick: function onClick() {
          _this2.api.selectAll();
        },
        className: "btn btn-primary"
      }, "Select All"), _react.default.createElement("button", {
        style: {
          float: "right",
          marginTop: 20
        },
        onClick: function onClick() {
          _this2.api.deselectAll();
        },
        className: "btn btn-primary"
      }, "Clear Selection"), _react.default.createElement("button", {
        style: {
          float: "right",
          marginTop: 20
        },
        onClick: this.onRefreshData,
        className: "btn btn-primary"
      }, "Refresh Data"))), _react.default.createElement("div", {
        style: {
          display: "inline-block",
          width: "100%",
          marginTop: 10,
          marginBottom: 10
        }
      }), _react.default.createElement("div", {
        style: {
          display: "inline-block",
          width: "100%",
          marginTop: 10,
          marginBottom: 10
        }
      }, _react.default.createElement("div", {
        style: {
          float: "center"
        }
      }, _react.default.createElement("label", {
        htmlFor: "sideBarToggle"
      }, "Show Side Bar\xA0"), _react.default.createElement("input", {
        type: "checkbox",
        id: "sideBarToggle",
        onChange: this.onToggleSidebar,
        style: {
          marginRight: 5
        }
      })), _react.default.createElement("div", {
        style: {
          float: "right",
          marginLeft: 1027,
          marginTop: 12
        }
      }, _react.default.createElement("div", {
        class: "form-group"
      }, _react.default.createElement("label", {
        for: "usr"
      }, "Name:"), _react.default.createElement("input", {
        placeholder: "Type text to filter...",
        onChange: this.onQuickFilterText,
        type: "text",
        class: "form-control",
        id: "usr"
      })))), _react.default.createElement("div", {
        class: "button-bar"
      }, _react.default.createElement("button", {
        className: "btn btn-primary",
        style: {
          marginLeft: 251
        },
        onClick: this.onDispute
      }, "KPI For Dispute Case Ratio"), _react.default.createElement("button", {
        className: "btn btn-primary",
        style: {
          marginRight: 200
        },
        onClick: this.onEmail
      }, "KPI for Email case Ratio")), _react.default.createElement("div", {
        style: {
          float: "right"
        }
      }, _react.default.createElement(_Month.default, {
        style: {
          height: 400
        },
        selectData: this.selectData.bind(this),
        monthName: this.state.monthName
      })), _react.default.createElement("div", {
        style: {
          height: 400,
          width: 1085,
          padding: '20px',
          marginRight: 25,
          marginLeft: 235
        },
        className: "ag-theme-balham"
      }, _react.default.createElement(_react2.AgGridReact // listening for events
      , {
        onGridReady: this.onGridReady,
        onRowSelected: this.onRowSelected,
        onCellClicked: this.onCellClicked,
        onModelUpdated: this.calculateRowCount // binding to simple properties
        ,
        sideBar: this.state.sideBar,
        quickFilterText: this.state.quickFilterText // binding to an object property
        ,
        icons: this.state.icons // binding to array properties
        ,
        rowData: this.state.rowData,
        enableRangeSelection: true,
        enableCharts: true // register all modules (row model, csv/excel, row grouping etc)
        ,
        modules: _allModules.AllModules // no binding, just providing hard coded strings for the properties
        // boolean properties will default to true if provided (ie suppressRowClickSelection => suppressRowClickSelection="true")
        ,
        suppressRowClickSelection: true,
        rowSelection: "multiple",
        groupHeaders: true // setting grid wide date component
        ,
        dateComponentFramework: _DateComponent.default // setting default column properties
        ,
        defaultColDef: {
          resizable: true,
          sortable: true,
          filter: true,
          headerComponentFramework: _SortableHeaderComponent.default,
          headerComponentParams: {
            menuIcon: 'fa-bars'
          } // enableRangeSelection: true,
          // enableCharts: true

        }
      }, _react.default.createElement(_react2.AgGridColumn, {
        headerName: "#",
        width: 30,
        checkboxSelection: true,
        sortable: false,
        suppressMenu: true,
        filter: false,
        pinned: true
      }), _react.default.createElement(_react2.AgGridColumn, {
        headerName: "Ships",
        headerGroupComponentFramework: _HeaderGroupComponent.default
      }, _react.default.createElement(_react2.AgGridColumn, {
        field: "CaseNumber",
        width: 150,
        cellEditorFramework: _NameCellEditor.default,
        enableRowGroup: true,
        enablePivot: true,
        pinned: true,
        editable: true
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "CreateDate",
        width: 250,
        cellEditorFramework: _NameCellEditor.default,
        enableRowGroup: true,
        enablePivot: true,
        pinned: true,
        editable: true
      })), _react.default.createElement(_react2.AgGridColumn, {
        field: "LinerBrand_c",
        width: 500,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        headerName: ""
      }, _react.default.createElement(_react2.AgGridColumn, {
        field: "Status ",
        width: 200,
        enableRowGroup: true,
        enablePivot: true,
        sortable: false,
        cellRendererFramework: _StatusCellRenderer.default,
        filterFramework: _SkillsFilter.default
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "AgeInBusinessHours",
        width: 250,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "CountEmailsFromContact_c",
        width: 500,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "proficiency",
        width: 150,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "type",
        width: 150,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "SubType_c",
        width: 500,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "CaseChannel",
        width: 150,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "Department",
        width: 150,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "LinerBrand_c",
        width: 500,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "Customer_Follow_Up_Notes__c",
        width: 150,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "Reason_For_Case__c",
        width: 150,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "Priority",
        width: 500,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "Times_Case_Reassigned__c",
        width: 150,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "OwnerId",
        width: 150,
        filter: "text"
      }), _react.default.createElement(_react2.AgGridColumn, {
        field: "CUSTOMER_DESC",
        width: 500,
        filter: "text"
      }))))));
    }
  }], [{
    key: "countryCellRenderer",
    value: function countryCellRenderer(params) {
      if (params.value) {
        return "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='http://flags.fmcdn.net/data/flags/mini/".concat(_RefData.default.COUNTRY_CODES[params.value], ".png'> ").concat(params.value);
      } else {
        return null;
      }
    }
  }, {
    key: "dateCellRenderer",
    value: function dateCellRenderer(params) {
      return RichGridDeclarativeExample.pad(params.value.getDate(), 2) + '/' + RichGridDeclarativeExample.pad(params.value.getMonth() + 1, 2) + '/' + params.value.getFullYear();
    }
  }, {
    key: "pad",
    value: function pad(num, totalStringSize) {
      var asString = num + "";

      while (asString.length < totalStringSize) {
        asString = "0" + asString;
      }

      return asString;
    }
  }]);

  return RichGridDeclarativeExample;
}(_react.Component);

exports.default = RichGridDeclarativeExample;