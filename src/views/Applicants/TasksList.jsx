import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

import { Redirect } from "react-router-dom";

// core components
import tasksStyle from "assets/jss/material-dashboard-react/components/tasksStyle.jsx";
import WizardView from "../Forms/WizardView";

class TasksList extends React.Component {

  state = {
    id: null,
    toWizard: false,
    checked: this.props.checkedIndexes || []
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  handleEdit = person => () => {
   this.setState(() => ({
      toWizard: true,
      id: person.id
    }));
  };

  render() {

    if (this.state.toWizard === true) {
      let {id} = this.state.id;

      return <Redirect to={`/applicants/${id}`} component={WizardView} />
    }

    const { classes, status, tasks } = this.props;
    const filtereds = tasks.filter(person => (person.status === status));

    return (
      <Table className={classes.table}>
        <TableBody>
          {
            filtereds.map(person => (
              <TableRow key={person.id} className={classes.tableRow}>
                <TableCell className={classes.tableCell}>
                  <Checkbox
                    checked={this.state.checked.indexOf(person.id) !== -1}
                    tabIndex={-1}
                    onClick={this.handleToggle(person.id)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.root
                    }}
                  />
                </TableCell>
                <TableCell className={classes.tableCell}>{person.firstname}</TableCell>
                <TableCell className={classes.tableCell}>{person.lastname}</TableCell>
                <TableCell className={classes.tableCell}>{person.country}</TableCell>
                <TableCell className={classes.tableCell}>{person.status}</TableCell>
                <TableCell className={classes.tableActions}>
                  <Tooltip
                    id="tooltip-top"
                    title="Edit"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <IconButton
                      onClick={this.handleEdit(person)}
                      aria-label="Edit"
                      className={classes.tableActionButton}
                    >
                      <Edit
                        className={
                          classes.tableActionButtonIcon + " " + classes.edit
                        }
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top-start"
                    title="Remove"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <IconButton
                      aria-label="Close"
                      className={classes.tableActionButton}
                    >
                      <Close
                        className={
                          classes.tableActionButtonIcon + " " + classes.close
                        }
                      />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    );
  }
}

TasksList.propTypes = {
  status:  PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(Object).isRequired
};

export default withStyles(tasksStyle)(TasksList);
