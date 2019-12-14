"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RefData = _interopRequireDefault(require("./RefData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dateFormat = require('dateformat');

var RowDataFactory =
/*#__PURE__*/
function () {
  function RowDataFactory() {
    _classCallCheck(this, RowDataFactory);
  }

  _createClass(RowDataFactory, [{
    key: "createAllRowData",
    value: function createAllRowData() {
      var rowData = [];
      var getMonth = localStorage.getItem("titleValue");

      for (var i = 0; i < 10000; i++) {
        var countryData = _RefData.default.SAMPLE_DATA[i % _RefData.default.SAMPLE_DATA.length];
        var month = dateFormat(countryData.createddate, "mmm").toUpperCase();
        ; // console.log(getMonth);

        if (month == getMonth) rowData.push({
          CaseNumber: countryData.CaseNumber,
          CreateDate: this.dateFormat(countryData.createddate),
          AgeInBusinessHours: countryData.Age_In_Business_Hours__c,
          CountEmailsFromContact_c: countryData.Count_Emails_From_Contact__c,
          years: countryData.Priority,
          proficiency: countryData.Priority,
          type: countryData.Type,
          SubType_c: countryData.Sub_Type__c,
          CaseChannel: countryData.Case_Channel__c,
          Department: countryData.Department__c,
          LinerBrand_c: countryData.Liner_Brand__c,
          Customer_Follow_Up_Notes__c: countryData.Customer_Follow_Up_Notes__c,
          Reason_For_Case__c: countryData.Reason_For_Case__c,
          Priority: countryData.Priority,
          Times_Case_Reassigned__c: countryData.Times_Case_Reassigned__c,
          OwnerId: countryData.OwnerId,
          CUSTOMER_DESC: countryData.CUSTOMER_DESC,
          status: countryData.Status
        });
      }

      return rowData;
    }
  }, {
    key: "createRowData",
    value: function createRowData() {
      var rowData = []; // var getMonth = localStorage.getItem("titleValue");
      // var getBrand = localStorage.getItem("Brand");

      for (var i = 0; i < 10000; i++) {
        var countryData = _RefData.default.SAMPLE_DATA[i % _RefData.default.SAMPLE_DATA.length]; //   var dateFormat = require('dateformat');
        //   var month = dateFormat(countryData.createddate, "mmm").toUpperCase();;
        // // console.log(getMonth);
        //   if(month == getMonth && countryData.Liner_Brand__c === getBrand )

        rowData.push({
          CaseNumber: countryData.CaseNumber,
          CreateDate: this.dateFormat(countryData.createddate),
          AgeInBusinessHours: countryData.Age_In_Business_Hours__c,
          CountEmailsFromContact_c: countryData.Count_Emails_From_Contact__c,
          years: countryData.Priority,
          proficiency: countryData.Priority,
          type: countryData.Type,
          SubType_c: countryData.Sub_Type__c,
          CaseChannel: countryData.Case_Channel__c,
          Department: countryData.Department__c,
          LinerBrand_c: countryData.Liner_Brand__c,
          Customer_Follow_Up_Notes__c: countryData.Customer_Follow_Up_Notes__c,
          Reason_For_Case__c: countryData.Reason_For_Case__c,
          Priority: countryData.Priority,
          Times_Case_Reassigned__c: countryData.Times_Case_Reassigned__c,
          OwnerId: countryData.OwnerId,
          CUSTOMER_DESC: countryData.CUSTOMER_DESC,
          status: countryData.Status
        });
      }

      return rowData;
    }
  }, {
    key: "createRowMonthWiseData",
    value: function createRowMonthWiseData(Month) {
      var rowData = []; // var getMonth = localStorage.getItem("titleValue");

      var getBrand = localStorage.getItem("Brand");
      var getMonth = Month; // var getBrand = Brand;

      for (var i = 0; i < 10000; i++) {
        var countryData = _RefData.default.SAMPLE_DATA[i % _RefData.default.SAMPLE_DATA.length];

        var dateFormat = require('dateformat');

        var month = dateFormat(countryData.createddate, "mmm"); // console.log(getMonth);

        if (month == getMonth && countryData.Liner_Brand__c === getBrand || getBrand === 'All') rowData.push({
          CaseNumber: countryData.CaseNumber,
          CreateDate: this.dateFormat(countryData.createddate),
          AgeInBusinessHours: countryData.Age_In_Business_Hours__c,
          CountEmailsFromContact_c: countryData.Count_Emails_From_Contact__c,
          years: countryData.Priority,
          proficiency: countryData.Priority,
          type: countryData.Type,
          SubType_c: countryData.Sub_Type__c,
          CaseChannel: countryData.Case_Channel__c,
          Department: countryData.Department__c,
          LinerBrand_c: countryData.Liner_Brand__c,
          Customer_Follow_Up_Notes__c: countryData.Customer_Follow_Up_Notes__c,
          Reason_For_Case__c: countryData.Reason_For_Case__c,
          Priority: countryData.Priority,
          Times_Case_Reassigned__c: countryData.Times_Case_Reassigned__c,
          OwnerId: countryData.OwnerId,
          CUSTOMER_DESC: countryData.CUSTOMER_DESC,
          status: countryData.Status
        });
      }

      return rowData;
    }
  }, {
    key: "createBrandRowMonthWiseData",
    value: function createBrandRowMonthWiseData(brand, month) {
      // const rowData = [];
      // const MareskLine = [];
      // const SeaLand = [];
      var Month = [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120];

      var dateFormat = require('dateformat');

      for (var i = 0; i < 100; i++) {
        var countryData = _RefData.default.SAMPLE_DATA[i % _RefData.default.SAMPLE_DATA.length];
        var month = dateFormat(countryData.createddate, "mmm");

        if (countryData.Liner_Brand__c === brand) {
          if (month == "Jan") {
            Month[0] = Month[0] + 1;
          }

          if (month == "Feb") {
            Month[1] = Month[1] + 1;
          }

          if (month == "Mar") {
            Month[2] = Month[2] + 1;
          }

          if (month == "Apr") {
            Month[3] = Month[3] + 1;
          }

          if (month == "May") {
            Month[4] = Month[4] + 1;
          }

          if (month == "Jun") {
            Month[5] = Month[5] + 1;
          }

          if (month == "Jul") {
            Month[6] = Month[6] + 1;
          }

          if (month == "Aug") {
            Month[7] = Month[7] + 1;
          }

          if (month == "Sep") {
            Month[8] = Month[8] + 1;
          }

          if (month == "Oct") {
            Month[9] = Month[9] + 1;
          }

          if (month == "Nov") {
            Month[9] = Month[9] + 1;
          }

          if (month == "Dec") {
            Month[10] = Month[10] + 1;
          } // "Jan",
          // "Feb",
          // "Mar",
          // "Apr",
          // "May",
          // "Jun",
          // "Jul",
          // "Aug",
          // "Sep",
          // "Nov",
          // "Dec"

        }
      }

      return Month;
    } // }

  }, {
    key: "createEmailRowData",
    value: function createEmailRowData() {
      var rowData = [];

      for (var i = 0; i < 100; i++) {
        var countryData = _RefData.default.SAMPLE_DATA[i % _RefData.default.SAMPLE_DATA.length];

        if (countryData.Count_Emails_From_Contact__c > 0) {
          rowData.push({
            CaseNumber: countryData.CaseNumber,
            CreateDate: this.dateFormat(countryData.createddate),
            AgeInBusinessHours: countryData.Age_In_Business_Hours__c,
            CountEmailsFromContact_c: countryData.Count_Emails_From_Contact__c,
            years: countryData.Priority,
            proficiency: countryData.Priority,
            type: countryData.Type,
            SubType_c: countryData.Sub_Type__c,
            CaseChannel: countryData.Case_Channel__c,
            Department: countryData.Department__c,
            LinerBrand_c: countryData.Liner_Brand__c,
            Customer_Follow_Up_Notes__c: countryData.Customer_Follow_Up_Notes__c,
            Reason_For_Case__c: countryData.Reason_For_Case__c,
            Priority: countryData.Priority,
            Times_Case_Reassigned__c: countryData.Times_Case_Reassigned__c,
            OwnerId: countryData.OwnerId,
            CUSTOMER_DESC: countryData.CUSTOMER_DESC,
            status: countryData.Status
          });
        }
      }

      return rowData;
    }
  }, {
    key: "createRandomPhoneNumber",
    value: function createRandomPhoneNumber() {
      var result = '+';

      for (var i = 0; i < 12; i++) {
        result += Math.round(Math.random() * 10);

        if (i === 2 || i === 5 || i === 8) {
          result += ' ';
        }
      }

      return result;
    }
  }, {
    key: "dateFormat",
    value: function dateFormat(data) {
      var dateFormat = require('dateformat');

      return dateFormat(data, "mmmm, dd , yyyy, h:MM:ss TT");
    }
  }]);

  return RowDataFactory;
}();

exports.default = RowDataFactory;