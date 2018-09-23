import React from 'react';

// @material-ui/icons
import BugReport from '@material-ui/icons/Warning';
import Code from '@material-ui/icons/Error';
import Cloud from '@material-ui/icons/Event';
import AddIcon from '@material-ui/icons/Add';

// core components
import Tabs from 'components/CustomTabs/CustomTabs.jsx';
import TasksList from './TasksList';
import Button from '@material-ui/core/Button/Button';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import WizardView from '../Forms/WizardView';

const styles = theme => ({
  root: {
    position: 'relative'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class ApplicantsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      server: [],
      checked: [],
      toWizard: false
    };
  }

  componentDidMount() {
    const data = [
      {
        id: '1',
        firstname: 'Dakota',
        lastname: 'Rice',
        country: 'Niger',
        status: 'pending'
      },
      {
        id: '2',
        firstname: 'Minerva',
        lastname: 'Hooper',
        country: 'Curaçao',
        status: 'pending'
      },
      {
        id: '3',
        firstname: 'Sage',
        lastname: 'Rice',
        country: 'Netherlands',
        status: 'accepted'
      },
      {
        id: '4',
        firstname: 'Philip',
        lastname: 'Rice',
        country: 'Korea, South',
        status: 'pending'
      },
      {
        id: '5',
        firstname: 'Doris',
        lastname: 'Rice',
        country: 'Malawi',
        status: 'pending'
      },
      {
        id: '6',
        firstname: 'Mason',
        lastname: 'Rice',
        country: 'Chile',
        status: 'rejected'
      },
      {
        id: '7',
        firstname: 'Dakota',
        lastname: 'Rice',
        country: 'Niger',
        status: 'rejected'
      },
      {
        id: '8',
        firstname: 'Minerva',
        lastname: 'Hooper',
        country: 'Curaçao',
        status: 'accepted'
      },
      {
        id: '9',
        firstname: 'Sage',
        lastname: 'Rice',
        country: 'Netherlands',
        status: 'rejected'
      },
      {
        id: '10',
        firstname: 'Philip',
        lastname: 'Rice',
        country: 'Korea, South',
        status: 'accepted'
      },
      {
        id: '11',
        firstname: 'Doris',
        lastname: 'Rice',
        country: 'Malawi',
        status: 'accepted'
      },
      {
        id: '12',
        firstname: 'Mason',
        lastname: 'Rice',
        country: 'Chile',
        status: 'accepted'
      }
    ];

    this.setState({ data });
  }

  handleClick = () => () => {
    this.setState(() => ({
      toWizard: true
    }));
  };

  render() {
    if (this.state.toWizard === true) {
      return <Redirect to="/wizard" component={WizardView} />;
    }

    let { classes } = this.props;

    return (
      <div>
        <Tabs
          title="Applicants:"
          headerColor="primary"
          tabs={[
            {
              tabName: 'Pendings',
              tabIcon: BugReport,
              tabContent: <TasksList status="pending" tasks={this.state.data} />
            },
            {
              tabName: 'Rejected',
              tabIcon: Code,
              tabContent: (
                <TasksList status="rejected" tasks={this.state.data} />
              )
            },
            {
              tabName: 'Accepted',
              tabIcon: Cloud,
              tabContent: (
                <TasksList status="accepted" tasks={this.state.data} />
              )
            }
          ]}
        />
        <Button
          onClick={this.handleClick()}
          variant="fab"
          color="primary"
          aria-label="Add"
          className={classes.fab}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ApplicantsList);
