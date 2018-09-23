import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle.jsx';

import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import Accessibility from '@material-ui/icons/Accessibility';
// core components
import GridItem from 'components/Grid/GridItem.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import Danger from 'components/Typography/Danger.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import { Redirect } from 'react-router-dom';
import WizardView from '../Forms/WizardView';
import CheckerView from '../Checker/CheckerView';

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toWizard: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => ({
      toWizard: true,
      goTo: 1
    }));
  }

  render() {
    if (this.state.toWizard === true) {
      return <Redirect to="/checker" component={CheckerView} />;
    }

    const { classes } = this.props;
    return (
      <GridContainer className={classes.background}>
        <GridItem xs={12} sm={12} md={12} onClick={this.handleClick}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon />
              </CardIcon>
              <h3 className={classes.cardTitle}>Personal Info</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon />
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} onClick={this.handleClick}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon />
              </CardIcon>
              <p className={classes.cardCategory} />
              <h3 className={classes.cardTitle}>Medical Info</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon />
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} onClick={this.handleClick}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon />
              </CardIcon>
              <h3 className={classes.cardTitle}>Cultural Info</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon />
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

HomeView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(HomeView);
