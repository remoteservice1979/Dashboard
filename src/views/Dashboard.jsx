"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactChartjs = require("react-chartjs-2");

var _reactRouterDom = require("react-router-dom");

var _RowDataFactory = _interopRequireDefault(require("../views/richGridDeclarativeExample/RowDataFactory"));

var _reactstrap = require("reactstrap");

var _charts = require("../variables/charts.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setBgChartData", function (names) {
      _this.setState({
        bigChartData: names
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setBrandData", function (name) {
      window.localStorage.removeItem("Brand");
      window.localStorage.removeItem("brandData"); //  if (name === ""){
      //   localStorage.setItem('Brand',"Maersk Line");
      //  }

      window.localStorage.setItem('Brand', name);
      window.localStorage.setItem("brandData", new _RowDataFactory.default().createBrandRowMonthWiseData(name));

      _this.setState({
        currentBrand: window.localStorage.getItem('Brand'),
        dataValue: new _RowDataFactory.default().createBrandRowMonthWiseData(name)
      }); //  var data = new RowDataFactory().createBrandRowMonthWiseData(name);
      //  console.log(data);

    });

    _this.state = {
      bigChartData: "data1",
      currentBrand: "Maersk Line",
      data: new _RowDataFactory.default().createBrandRowMonthWiseData('Maersk Line')
    };
    window.localStorage.setItem("brandData", new _RowDataFactory.default().createBrandRowMonthWiseData('Maersk Line'));
    return _this;
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: "content"
      }, this.state.currentBrand, _react.default.createElement(_reactstrap.Row, null, _react.default.createElement(_reactstrap.Col, {
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
        tag: "label",
        className: (0, _classnames.default)("btn-simple", {
          active: this.state.Brand === "Maersk Line"
        }),
        color: "info",
        id: "0",
        size: "sm",
        onClick: function onClick() {
          return _this2.setBgChartData("data1");
        }
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
        }),
        onClick: function onClick() {
          return _this2.setBgChartData("data2");
        }
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
        }),
        onClick: function onClick() {
          return _this2.setBgChartData("data3");
        }
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
      }))))))), _react.default.createElement(_reactstrap.CardBody, null, _react.default.createElement("div", {
        className: "chart-area-top "
      }, _react.default.createElement(_reactChartjs.Line, {
        data: _charts.chartExample1[this.state.bigChartData],
        options: _charts.chartExample1.options
      })))))), _react.default.createElement(_reactstrap.Row, null, _react.default.createElement(_reactstrap.Col, {
        lg: "4"
      }, _react.default.createElement(_reactstrap.Card, {
        className: "card-chart"
      }, _react.default.createElement(_reactstrap.CardHeader, null, _react.default.createElement("h5", {
        className: "card-category"
      }, "Total Shipments1"), _react.default.createElement(_reactstrap.CardTitle, {
        tag: "h3"
      }, _react.default.createElement("i", {
        className: "go-icons icon-bell-55 text-info"
      }), " ", "763,215")), _react.default.createElement(_reactstrap.CardBody, null, _react.default.createElement("div", {
        className: "chart-area"
      }, _react.default.createElement(_reactChartjs.Line, {
        data: _charts.chartExample2.data,
        options: _charts.chartExample2.options
      }), _react.default.createElement(_reactRouterDom.Link, {
        to: "/map"
      }, "Disbute Case Ration 30%"))))), _react.default.createElement(_reactstrap.Col, {
        lg: "4"
      }, _react.default.createElement(_reactstrap.Card, {
        className: "card-chart"
      }, _react.default.createElement(_reactstrap.CardHeader, null, _react.default.createElement("h5", {
        className: "card-category"
      }, "Daily Sales"), _react.default.createElement(_reactstrap.CardTitle, {
        tag: "h3"
      }, _react.default.createElement("i", {
        className: "go-icons icon-delivery-fast text-primary"
      }), " ", "3,500\u20AC")), _react.default.createElement(_reactstrap.CardBody, null, _react.default.createElement("div", {
        className: "chart-area"
      }, _react.default.createElement(_reactChartjs.Bar, {
        data: _charts.chartExample3.data,
        options: _charts.chartExample3.options
      }))))), _react.default.createElement(_reactstrap.Col, {
        lg: "4"
      }, _react.default.createElement(_reactstrap.Card, {
        className: "card-chart"
      }, _react.default.createElement(_reactstrap.CardHeader, null, _react.default.createElement("h5", {
        className: "card-category"
      }, "Completed Tasks"), _react.default.createElement(_reactstrap.CardTitle, {
        tag: "h3"
      }, _react.default.createElement("i", {
        className: "go-icons icon-send text-success"
      }), " 12,100K")), _react.default.createElement(_reactstrap.CardBody, null, _react.default.createElement("div", {
        className: "chart-area"
      }, _react.default.createElement(_reactChartjs.Line, {
        data: _charts.chartExample4.data,
        options: _charts.chartExample4.options
      })))))), _react.default.createElement(_reactstrap.Row, null, _react.default.createElement(_reactstrap.Col, {
        lg: "6",
        md: "12"
      }, _react.default.createElement(_reactstrap.Card, {
        className: "card-tasks"
      }, _react.default.createElement(_reactstrap.CardHeader, null, _react.default.createElement("h6", {
        className: "title d-inline"
      }, "Tasks(5)"), _react.default.createElement("p", {
        className: "card-category d-inline"
      }, " today"), _react.default.createElement(_reactstrap.UncontrolledDropdown, null, _react.default.createElement(_reactstrap.DropdownToggle, {
        caret: true,
        className: "btn-icon",
        color: "link",
        "data-toggle": "dropdown",
        type: "button"
      }, _react.default.createElement("i", {
        className: "go-icons icon-settings-gear-63"
      })), _react.default.createElement(_reactstrap.DropdownMenu, {
        "aria-labelledby": "dropdownMenuLink",
        right: true
      }, _react.default.createElement(_reactstrap.DropdownItem, {
        href: "#pablo",
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, "Action"), _react.default.createElement(_reactstrap.DropdownItem, {
        href: "#pablo",
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, "Another action"), _react.default.createElement(_reactstrap.DropdownItem, {
        href: "#pablo",
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, "Something else")))), _react.default.createElement(_reactstrap.CardBody, null, _react.default.createElement("div", {
        className: "table-full-width table-responsive"
      }, _react.default.createElement(_reactstrap.Table, null, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement(_reactstrap.FormGroup, {
        check: true
      }, _react.default.createElement(_reactstrap.Label, {
        check: true
      }, _react.default.createElement(_reactstrap.Input, {
        defaultValue: "",
        type: "checkbox"
      }), _react.default.createElement("span", {
        className: "form-check-sign"
      }, _react.default.createElement("span", {
        className: "check"
      }))))), _react.default.createElement("td", null, _react.default.createElement("p", {
        className: "title"
      }, "Update the Documentation"), _react.default.createElement("p", {
        className: "text-muted"
      }, "Dwuamish Head, Seattle, WA 8:47 AM")), _react.default.createElement("td", {
        className: "td-actions text-right"
      }, _react.default.createElement(_reactstrap.Button, {
        color: "link",
        id: "tooltip636901683",
        title: "",
        type: "button"
      }, _react.default.createElement("i", {
        className: "go-icons icon-pencil"
      })), _react.default.createElement(_reactstrap.UncontrolledTooltip, {
        delay: 0,
        target: "tooltip636901683",
        placement: "right"
      }, "Edit Task"))), _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement(_reactstrap.FormGroup, {
        check: true
      }, _react.default.createElement(_reactstrap.Label, {
        check: true
      }, _react.default.createElement(_reactstrap.Input, {
        defaultChecked: true,
        defaultValue: "",
        type: "checkbox"
      }), _react.default.createElement("span", {
        className: "form-check-sign"
      }, _react.default.createElement("span", {
        className: "check"
      }))))), _react.default.createElement("td", null, _react.default.createElement("p", {
        className: "title"
      }, "GDPR Compliance"), _react.default.createElement("p", {
        className: "text-muted"
      }, "The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.")), _react.default.createElement("td", {
        className: "td-actions text-right"
      }, _react.default.createElement(_reactstrap.Button, {
        color: "link",
        id: "tooltip457194718",
        title: "",
        type: "button"
      }, _react.default.createElement("i", {
        className: "go-icons icon-pencil"
      })), _react.default.createElement(_reactstrap.UncontrolledTooltip, {
        delay: 0,
        target: "tooltip457194718",
        placement: "right"
      }, "Edit Task"))), _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement(_reactstrap.FormGroup, {
        check: true
      }, _react.default.createElement(_reactstrap.Label, {
        check: true
      }, _react.default.createElement(_reactstrap.Input, {
        defaultValue: "",
        type: "checkbox"
      }), _react.default.createElement("span", {
        className: "form-check-sign"
      }, _react.default.createElement("span", {
        className: "check"
      }))))), _react.default.createElement("td", null, _react.default.createElement("p", {
        className: "title"
      }, "Solve the issues"), _react.default.createElement("p", {
        className: "text-muted"
      }, "Fifty percent of all respondents said they would be more likely to shop at a company")), _react.default.createElement("td", {
        className: "td-actions text-right"
      }, _react.default.createElement(_reactstrap.Button, {
        color: "link",
        id: "tooltip362404923",
        title: "",
        type: "button"
      }, _react.default.createElement("i", {
        className: "go-icons icon-pencil"
      })), _react.default.createElement(_reactstrap.UncontrolledTooltip, {
        delay: 0,
        target: "tooltip362404923",
        placement: "right"
      }, "Edit Task"))), _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement(_reactstrap.FormGroup, {
        check: true
      }, _react.default.createElement(_reactstrap.Label, {
        check: true
      }, _react.default.createElement(_reactstrap.Input, {
        defaultValue: "",
        type: "checkbox"
      }), _react.default.createElement("span", {
        className: "form-check-sign"
      }, _react.default.createElement("span", {
        className: "check"
      }))))), _react.default.createElement("td", null, _react.default.createElement("p", {
        className: "title"
      }, "Release v2.0.0"), _react.default.createElement("p", {
        className: "text-muted"
      }, "Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM")), _react.default.createElement("td", {
        className: "td-actions text-right"
      }, _react.default.createElement(_reactstrap.Button, {
        color: "link",
        id: "tooltip818217463",
        title: "",
        type: "button"
      }, _react.default.createElement("i", {
        className: "go-icons icon-pencil"
      })), _react.default.createElement(_reactstrap.UncontrolledTooltip, {
        delay: 0,
        target: "tooltip818217463",
        placement: "right"
      }, "Edit Task"))), _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement(_reactstrap.FormGroup, {
        check: true
      }, _react.default.createElement(_reactstrap.Label, {
        check: true
      }, _react.default.createElement(_reactstrap.Input, {
        defaultValue: "",
        type: "checkbox"
      }), _react.default.createElement("span", {
        className: "form-check-sign"
      }, _react.default.createElement("span", {
        className: "check"
      }))))), _react.default.createElement("td", null, _react.default.createElement("p", {
        className: "title"
      }, "Export the processed files"), _react.default.createElement("p", {
        className: "text-muted"
      }, "The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs.")), _react.default.createElement("td", {
        className: "td-actions text-right"
      }, _react.default.createElement(_reactstrap.Button, {
        color: "link",
        id: "tooltip831835125",
        title: "",
        type: "button"
      }, _react.default.createElement("i", {
        className: "go-icons icon-pencil"
      })), _react.default.createElement(_reactstrap.UncontrolledTooltip, {
        delay: 0,
        target: "tooltip831835125",
        placement: "right"
      }, "Edit Task"))), _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement(_reactstrap.FormGroup, {
        check: true
      }, _react.default.createElement(_reactstrap.Label, {
        check: true
      }, _react.default.createElement(_reactstrap.Input, {
        defaultValue: "",
        type: "checkbox"
      }), _react.default.createElement("span", {
        className: "form-check-sign"
      }, _react.default.createElement("span", {
        className: "check"
      }))))), _react.default.createElement("td", null, _react.default.createElement("p", {
        className: "title"
      }, "Arival at export process"), _react.default.createElement("p", {
        className: "text-muted"
      }, "Capitol Hill, Seattle, WA 12:34 AM")), _react.default.createElement("td", {
        className: "td-actions text-right"
      }, _react.default.createElement(_reactstrap.Button, {
        color: "link",
        id: "tooltip217595172",
        title: "",
        type: "button"
      }, _react.default.createElement("i", {
        className: "go-icons icon-pencil"
      })), _react.default.createElement(_reactstrap.UncontrolledTooltip, {
        delay: 0,
        target: "tooltip217595172",
        placement: "right"
      }, "Edit Task"))))))))), _react.default.createElement(_reactstrap.Col, {
        lg: "6",
        md: "12"
      }, _react.default.createElement(_reactstrap.Card, null, _react.default.createElement(_reactstrap.CardHeader, null, _react.default.createElement(_reactstrap.CardTitle, {
        tag: "h4"
      }, "Simple Table")), _react.default.createElement(_reactstrap.CardBody, null, _react.default.createElement(_reactstrap.Table, {
        className: "tablesorter",
        responsive: true
      }, _react.default.createElement("thead", {
        className: "text-primary"
      }, _react.default.createElement("tr", null, _react.default.createElement("th", null, "Name"), _react.default.createElement("th", null, "Country"), _react.default.createElement("th", null, "City"), _react.default.createElement("th", {
        className: "text-center"
      }, "Salary"))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, "Dakota Rice"), _react.default.createElement("td", null, "Niger"), _react.default.createElement("td", null, "Oud-Turnhout"), _react.default.createElement("td", {
        className: "text-center"
      }, "$36,738")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "Minerva Hooper"), _react.default.createElement("td", null, "Cura\xE7ao"), _react.default.createElement("td", null, "Sinaai-Waas"), _react.default.createElement("td", {
        className: "text-center"
      }, "$23,789")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "Sage Rodriguez"), _react.default.createElement("td", null, "Netherlands"), _react.default.createElement("td", null, "Baileux"), _react.default.createElement("td", {
        className: "text-center"
      }, "$56,142")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "Philip Chaney"), _react.default.createElement("td", null, "Korea, South"), _react.default.createElement("td", null, "Overland Park"), _react.default.createElement("td", {
        className: "text-center"
      }, "$38,735")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "Doris Greene"), _react.default.createElement("td", null, "Malawi"), _react.default.createElement("td", null, "Feldkirchen in K\xE4rnten"), _react.default.createElement("td", {
        className: "text-center"
      }, "$63,542")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "Mason Porter"), _react.default.createElement("td", null, "Chile"), _react.default.createElement("td", null, "Gloucester"), _react.default.createElement("td", {
        className: "text-center"
      }, "$78,615")), _react.default.createElement("tr", null, _react.default.createElement("td", null, "Jon Porter"), _react.default.createElement("td", null, "Portugal"), _react.default.createElement("td", null, "Gloucester"), _react.default.createElement("td", {
        className: "text-center"
      }, "$98,615"))))))))));
    }
  }]);

  return Dashboard;
}(_react.default.Component);

var _default = Dashboard;
exports.default = _default;