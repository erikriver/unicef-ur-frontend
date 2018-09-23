import React from "react";

// @material-ui/icons
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

// core components
import Tabs from "components/CustomTabs/CustomTabs.jsx";
import TasksList from "./TasksList";

class ApplicantsList extends React.Component {

  state = {
    data: [],
    server: [],
    checked: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const data = [
      {id:"1", firstname:"Dakota", lastname:"Rice", country:"Niger", status: "pending"},
      {id:"2", firstname:"Minerva", lastname:"Hooper", country:"Curaçao", status: "pending"},
      {id:"3", firstname:"Sage", lastname:"Rice", country:"Netherlands", status: "accepted"},
      {id:"4", firstname:"Philip", lastname:"Rice", country:"Korea, South", status: "pending"},
      {id:"5", firstname:"Doris", lastname:"Rice", country:"Malawi", status: "pending"},
      {id:"6", firstname:"Mason", lastname:"Rice", country:"Chile", status: "rejected"},
      {id:"7", firstname:"Dakota", lastname:"Rice", country:"Niger", status: "rejected"},
      {id:"8", firstname:"Minerva", lastname:"Hooper", country:"Curaçao", status: "accepted"},
      {id:"9", firstname:"Sage", lastname:"Rice", country:"Netherlands", status: "rejected"},
      {id:"10", firstname:"Philip", lastname:"Rice", country:"Korea, South", status: "accepted"},
      {id:"11", firstname:"Doris", lastname:"Rice", country:"Malawi", status: "accepted"},
      {id:"12", firstname:"Mason", lastname:"Rice", country:"Chile", status: "accepted"}
    ];

    this.setState({ data });
  }

  render() {
    return (
      <Tabs
        title="Applicants:"
        headerColor="primary"
        tabs={[
          {
            tabName: "Pendings",
            tabIcon: BugReport,
            tabContent: (
              <TasksList
                checkedIndexes={[0, 3]}
                tasksIndexes={[0, 1, 2, 3]}
                status="pending"
                tasks={this.state.data}
              />
            )
          },
          {
            tabName: "Rejected",
            tabIcon: Code,
            tabContent: (
              <TasksList
                checkedIndexes={[0]}
                tasksIndexes={[0, 1]}
                status="rejected"
                tasks={this.state.data}
              />
            )
          },
          {
            tabName: "Accepted",
            tabIcon: Cloud,
            tabContent: (
              <TasksList
                checkedIndexes={[1]}
                tasksIndexes={[0]}
                status="accepted"
                tasks={this.state.data}
              />
            )
          }
        ]}
      />
    );
  }
}

export default ApplicantsList;