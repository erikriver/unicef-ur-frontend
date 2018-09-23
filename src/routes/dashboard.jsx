// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
// import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Notifications from '@material-ui/icons/Notifications';

// core components/views
import DashboardPage from 'views/Dashboard/Dashboard.jsx';
import NotificationsPage from 'views/Notifications/Notifications.jsx';
import ApplicantsList from '../views/Applicants/ApplicantsList';
import WizardView from 'views/Forms/WizardView.jsx';
import RegisterViewComponent from '../views/Registers';

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
    path: '/applicants/:id',
    component: WizardView
  },
  {
    path: '/notifications',
    sidebarName: 'Notificaciones',
    navbarName: 'Notificaciones',
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: '/wizard',
    sidebarName: 'Captura',
    navbarName: 'Captura',
    icon: LibraryBooks,
    component: WizardView
  },
  {
    path: '/registers',
    sidebarName: 'Registros',
    navbarName: 'Registros',
    icon: LibraryBooks,
    component: RegisterViewComponent
  },
  { redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect' }
];

export default dashboardRoutes;
