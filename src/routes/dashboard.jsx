// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import OrdersList from "views/Orders/OrdersList.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Resume Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/orders",
    sidebarName: "Orders",
    navbarName: "Orders",
    icon: LibraryBooks,
    component: OrdersList
  },
  {
    path: "/notifications",
    sidebarName: "Notificaciones",
    navbarName: "Notificaciones",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
