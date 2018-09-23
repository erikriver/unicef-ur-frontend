// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
// import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Notifications from '@material-ui/icons/Notifications';

// core components/views
import DashboardPage from 'views/Dashboard/Dashboard.jsx';
import NotificationsPage from 'views/Notifications/Notifications.jsx';
import ApplicantsList from '../views/Applicants/ApplicantsList.jsx';
import WizardView from 'views/Forms/WizardView.jsx';
import CheckerView from '../views/Checker/CheckerView';
import RegisterView from 'views/Registers/index.js';
import HomeView from '../views/Splash/HomeView';

const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Resume Dashboard',
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: '/applicants',
    sidebarName: 'Applicants',
    navbarName: 'Applicants',
    icon: LibraryBooks,
    component: ApplicantsList
  },
  {
    path: '/query',
    sidebarName: 'Query',
    navbarName: 'Query',
    icon: LibraryBooks,
    component: HomeView
  },
  {
    path: '/applicants/:id',
    component: WizardView
  },
  {
    path: '/wizard',
    sidebarName: 'Register',
    navbarName: 'Register',
    icon: LibraryBooks,
    component: WizardView
  },
  {
    path: '/traceroute',
    sidebarName: 'Traceroute',
    navbarName: 'Trace Route',
    icon: LibraryBooks,
    component: RegisterView
  },
  {
    path: '/checker',
    sidebarName: 'Checker',
    navbarName: 'Checker',
    icon: LibraryBooks,
    component: CheckerView
  }
];

export default dashboardRoutes;
