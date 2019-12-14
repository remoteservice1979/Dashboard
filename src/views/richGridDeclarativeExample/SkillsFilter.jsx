"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _RefData = _interopRequireDefault(require("./RefData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// the skills filter component. this can be laid out much better in a 'React'
// way. there are design patterns you can apply to layout out your React classes.
// however, i'm not worried, as the intention here is to show you ag-Grid
// working with React, and that's all. i'm not looking for any awards for my
// React design skills.
var SkillsFilter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SkillsFilter, _React$Component);

  function SkillsFilter(props) {
    var _this;

    _classCallCheck(this, SkillsFilter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SkillsFilter).call(this, props));
    _this.state = {
      android: false,
      css: false,
      html5: false,
      mac: false,
      windows: false,
      wait: false
    };
    return _this;
  }

  _createClass(SkillsFilter, [{
    key: "getModel",
    value: function getModel() {
      return {
        android: this.state.android,
        css: this.state.css,
        html5: this.state.html5,
        mac: this.state.mac,
        windows: this.state.windows,
        wait: false
      };
    }
  }, {
    key: "setModel",
    value: function setModel(model) {
      this.setState({
        android: model ? model.android : null,
        css: model ? model.css : null,
        html5: model ? model.html5 : null,
        mac: model ? model.mac : null,
        windows: model ? model.windows : null,
        wait: model ? model.wait : null
      });
    } // called by agGrid

  }, {
    key: "doesFilterPass",
    value: function doesFilterPass(params) {
      var _this2 = this;

      var rowSkills = params.data.skills;
      var passed = true;

      _RefData.default.SAMPLE_DATA.forEach(function (skill) {
        if (_this2.state[skill]) {
          if (!rowSkills[skill]) {
            passed = false;
          }
        }
      });

      return passed;
    }
  }, {
    key: "getModelAsString",
    value: function getModelAsString() {
      return '';
    } // called by agGrid

  }, {
    key: "isFilterActive",
    value: function isFilterActive() {
      var somethingSelected = this.state.android || this.state.css || this.state.html5 || this.state.mac || this.state.windows;
      return somethingSelected;
    }
  }, {
    key: "onStatusChanged",
    value: function onStatusChanged(skill, event) {
      var newValue = event.target.checked;
      var newModel = {};
      newModel[skill] = newValue; // set the state, and once it is done, then call filterChangedCallback

      this.setState(newModel, this.props.filterChangedCallback);
    }
  }, {
    key: "helloFromSkillsFilter",
    value: function helloFromSkillsFilter() {
      alert("Hello From The Status Filter!");
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var skillsTemplates = [];

      _RefData.default.STATUS_NAMES.forEach(function (skill, index) {
        // const skillName = RefData.IT_SKILLS_NAMES[index];
        var template = _react.default.createElement("label", {
          key: skill,
          style: {
            border: '1px solid lightgrey',
            margin: 4,
            padding: 4,
            display: 'inline-block'
          }
        }, _react.default.createElement("span", null, _react.default.createElement("div", {
          style: {
            textAlign: 'center'
          }
        }, skill), _react.default.createElement("div", null, _react.default.createElement("input", {
          type: "checkbox",
          onClick: _this3.onStatusChanged.bind(_this3, skill)
        }), _react.default.createElement("span", null, " "))));

        skillsTemplates.push(template);
      });

      return _react.default.createElement("div", {
        style: {
          width: 380
        }
      }, _react.default.createElement("div", {
        style: {
          textAlign: 'center',
          background: 'lightgray',
          width: '100%',
          display: 'block',
          borderBottom: '1px solid grey'
        }
      }, _react.default.createElement("b", null, "Custom Status Filter")), skillsTemplates);
    } // these are other method that agGrid calls that we
    // could of implemented, but they are optional and
    // we have no use for them in this particular filter.
    //afterGuiAttached(params) {}
    //onNewRowsLoaded() {}
    //onAnyFilterChanged() {}

  }]);

  return SkillsFilter;
}(_react.default.Component);

exports.default = SkillsFilter;