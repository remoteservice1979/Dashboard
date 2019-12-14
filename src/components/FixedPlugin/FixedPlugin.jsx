"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

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

var FixedPlugin =
/*#__PURE__*/
function (_Component) {
  _inherits(FixedPlugin, _Component);

  function FixedPlugin(props) {
    var _this;

    _classCallCheck(this, FixedPlugin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FixedPlugin).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      if (_this.state.classes === "dropdown show-dropdown") {
        _this.setState({
          classes: "dropdown show-dropdown show"
        });
      } else {
        _this.setState({
          classes: "dropdown show-dropdown"
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "activateMode", function (mode) {
      switch (mode) {
        case "light":
          document.body.classList.add("white-content");
          break;

        default:
          document.body.classList.remove("white-content");
          break;
      }
    });

    _this.state = {
      classes: "dropdown show-dropdown"
    };
    return _this;
  }

  _createClass(FixedPlugin, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: "fixed-plugin"
      }, _react.default.createElement("div", {
        className: this.state.classes
      }, _react.default.createElement("div", {
        onClick: this.handleClick
      }, _react.default.createElement("i", {
        className: "fa fa-cog fa-2x"
      })), _react.default.createElement("ul", {
        className: "dropdown-menu show"
      }, _react.default.createElement("li", {
        className: "header-title"
      }, "SIDEBAR BACKGROUND"), _react.default.createElement("li", {
        className: "adjustments-line"
      }, _react.default.createElement("div", {
        className: "badge-colors text-center"
      }, _react.default.createElement("span", {
        className: this.props.bgColor === "primary" ? "badge filter badge-primary active" : "badge filter badge-primary",
        "data-color": "primary",
        onClick: function onClick() {
          _this2.props.handleBgClick("primary");
        }
      }), " ", _react.default.createElement("span", {
        className: this.props.bgColor === "blue" ? "badge filter badge-info active" : "badge filter badge-info",
        "data-color": "blue",
        onClick: function onClick() {
          _this2.props.handleBgClick("blue");
        }
      }), " ", _react.default.createElement("span", {
        className: this.props.bgColor === "green" ? "badge filter badge-success active" : "badge filter badge-success",
        "data-color": "green",
        onClick: function onClick() {
          _this2.props.handleBgClick("green");
        }
      }), " ")), _react.default.createElement("li", {
        className: "adjustments-line text-center color-change"
      }, _react.default.createElement("span", {
        className: "color-label"
      }, "LIGHT MODE"), " ", _react.default.createElement("span", {
        className: "badge light-badge mr-2",
        onClick: function onClick() {
          return _this2.activateMode("light");
        }
      }), " ", _react.default.createElement("span", {
        className: "badge dark-badge ml-2",
        onClick: function onClick() {
          return _this2.activateMode("dark");
        }
      }), " ", _react.default.createElement("span", {
        className: "color-label"
      }, "DARK MODE"), " "), _react.default.createElement("li", {
        className: "button-container"
      }, _react.default.createElement(_reactstrap.Button, {
        href: "Maersk product/black-dashboard-react",
        color: "primary",
        block: true,
        className: "btn-round"
      }, "Download Now"), _react.default.createElement(_reactstrap.Button, {
        color: "default",
        block: true,
        className: "btn-round",
        outline: true,
        href: "https://demos.abc-go.com/black-dashboard-react/#/documentation/tutorial"
      }, "Documentation")), _react.default.createElement("li", {
        className: "header-title"
      }, "Want more components?"), _react.default.createElement("li", {
        className: "button-container"
      }, _react.default.createElement(_reactstrap.Button, {
        href: "Maersk product/black-dashboard-pro-react",
        className: "btn-round",
        disabled: true,
        block: true,
        color: "danger"
      }, "Get pro version")))));
    }
  }]);

  return FixedPlugin;
}(_react.Component);

var _default = FixedPlugin;
exports.default = _default;