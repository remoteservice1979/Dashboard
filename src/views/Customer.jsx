"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _reactRouterDom = require("react-router-dom");

var _reactSimpleTreeMenu = _interopRequireDefault(require("react-simple-tree-menu"));

require("./main.css");

var _Tables = _interopRequireDefault(require("../views/Tables"));

var _allModules = require("@ag-grid-community/all-modules");

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

var Icons =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Icons, _React$Component);

  function Icons() {
    var _this;

    _classCallCheck(this, Icons);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Icons).call(this));
    _this.state = {
      modules: _allModules.AllCommunityModules,
      displayMenu: false,
      monthName: "",
      companyDetail: "",
      Brand: "",
      Key: ""
    }; //  this.showDropdownMenu = this.showDropdownMenu.bind(this);
    //  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    //   this.selectData = this.selectData.bind(this);

    _this.showDetail = _this.showDetail.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Icons, [{
    key: "showDetail",
    value: function showDetail(event) {
      //   alert(event.target.value);
      // console.log(event.label);
      this.setState({
        companyDetail: "This Company " + event.label,
        Brand: event.label,
        Key: event.key
      });
      var title = event.label;
      localStorage.setItem('titleValue', title); // window.location.href ="map"; 
      //  this.setState({ displayMenu: true }, () => {
      // // // document.addEventListener('click', this.hideDropdownMenu);
      //  });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: "content"
      }, _react.default.createElement(_reactstrap.Row, null, _react.default.createElement(_reactstrap.Col, {
        md: "12",
        style: {
          backgroundColor: "white"
        }
      }, _react.default.createElement(_reactstrap.Card, {
        style: {
          backgroundColor: "dodgerblue"
        }
      }, _react.default.createElement(_reactstrap.CardBody, {
        className: "all-icons"
      }, _react.default.createElement(_reactstrap.Row, null, _react.default.createElement(_reactstrap.Col, {
        className: "font-icon-list col-xs-6 col-xs-6",
        lg: "6",
        md: "6",
        sm: "4"
      }, _react.default.createElement(_reactSimpleTreeMenu.default, {
        data: [{
          key: 'Brand',
          label: 'Maersk Line',
          nodes: [{
            key: 'PAYER_NAME',
            label: 'GREENCARRIER SHANGHAI LTD QINGDAO',
            nodes: [{
              key: 'Customer',
              label: 'Nike Cutomer',
              nodes: [],
              url: 'https://www.google.com/search?q=dog'
            }, {
              key: 'Customer',
              label: 'consignee',
              nodes: [],
              url: 'https://www.google.com/search?q=fox'
            }, {
              key: 'Customer',
              label: 'Customer',
              nodes: [{
                key: 'Customer',
                label: 'Wall Mart',
                nodes: [{
                  key: 'Customer',
                  label: 'Buyer Any',
                  nodes: [],
                  url: 'https://www.google.com/search?q=dog'
                }],
                url: 'https://www.google.com/search?q=dog'
              }],
              url: 'https://www.google.com/search?q=wolf'
            }],
            url: 'https://www.google.com/search?q=canidae'
          }],
          url: 'https://www.google.com/search?q=mammal'
        }, {
          key: 'Brand',
          label: 'SeaGo Line A/S',
          nodes: [{
            key: 'Payer',
            label: 'PAYER_NAME',
            nodes: [{
              key: 'Customer',
              label: 'GREENCARRIER SHANGHAI LTD QINGDAO',
              url: 'https://www.google.com/search?q=lizard'
            }, {
              key: 'Customer',
              label: 'Walmart',
              url: 'https://www.google.com/search?q=snake'
            }, {
              key: 'Customer',
              label: 'Address Maker',
              url: 'https://www.google.com/search?q=gekko'
            }],
            url: 'https://www.google.com/search?q=squamata'
          }],
          url: 'https://www.google.com/search?q=reptile'
        }],
        debounceTime: 125,
        disableKeyboard: false,
        hasSearch: true,
        onClickItem: this.showDetail,
        resetOpenNodesOnDataUpdate: false
      })), _react.default.createElement(_reactstrap.Col, {
        className: "font-icon-list col-xs-6 col-xs-6",
        lg: "6",
        md: "6",
        sm: "4"
      }, _react.default.createElement(_Tables.default, {
        Brand: this.state.Brand,
        Key: this.state.Key
      })))))))));
    }
  }]);

  return Icons;
}(_react.default.Component);

var _default = Icons;
exports.default = _default;