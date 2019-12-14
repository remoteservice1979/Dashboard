/*!

=========================================================
* Maersk Dashboard React v1.0.0
=========================================================

* Product Page: Maersk product/black-dashboard-react
* Copyright 2019 Maersk  (https://www.abc-go.com)
* Licensed under MIT (https://github.com/abctimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded By Anil 

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Map from "views/Map.jsx";
import Notifications from "views/Notifications.jsx";
import Rtl from "views/Rtl.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";
import GridDrill from "views/richGridDeclarativeExample/RichGridDeclarativeExample.jsx";
import Main from "views/Main.jsx";
import Customer from "views/Customer.jsx";

var routes = [
  {
    path: "/icons",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "go-icons icon-chart-pie-36",
    component: Main,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Trend",
    rtlName: "الرموز",
    icon: "go-icons icon-atom",
    component: Customer,
    layout: "/admin"
  },

  {
    path: "/customer",
    name: "Cutomer",
    rtlName: "الرموز",
    icon: "go-icons icon-atom",
    component: Customer,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "GridDrill",
    rtlName: "خرائط",
    icon: "go-icons icon-pin",
    component: GridDrill,
    layout: "/admin"
  },

  

  {
    path: "/Maersk",
    name: "GridDrill",
    rtlName: "خرائط",
    icon: "go-icons icon-pin",
    component: GridDrill,
    layout: "/admin"
  },

  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "go-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "go-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "go-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "go-icons icon-align-center",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "go-icons icon-world",
    component: Rtl,
    layout: "/rtl"
  }
];
export default routes;
