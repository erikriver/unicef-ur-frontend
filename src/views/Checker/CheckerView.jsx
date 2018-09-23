import React from "react";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Email from "@material-ui/icons/Email";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PictureUpload from "components/CustomUpload/PictureUpload.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import defaultImage from "assets/img/default-avatar.png";

const style = {
  separatorSection: {
    marginBottom: "30px"
  },
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  inputAdornment: {
    position: "relative"
  }
};

class CheckerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      firstnameState: "",
      lastname: "",
      lastnameState: "",
      email: "",
      emailState: "",
      imagePreviewUrl: defaultImage
    };
  }

  sendState() {
    return this.state;
  }

  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12}>
            <h4 className={classes.infoText}>
              Verify identity
            </h4>
          </GridItem>
          <GridItem xs={6} sm={6} >
            <CustomInput
              success={this.state.firstnameState === "success"}
              error={this.state.firstnameState === "error"}
              labelText={
                <span>
                Code...
              </span>
              }
              id="search"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: event => this.change(event, "search", "length", 3),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    className={classes.inputAdornment}
                  >
                    <Face className={classes.inputAdornmentIcon} />
                  </InputAdornment>
                )
              }}
            />
          </GridItem>
        </GridContainer>

        <div className={classes.separatorSection}/>

        <GridContainer justify="center">
          <GridItem xs={12} sm={4}>
            <img
              src={this.state.imagePreviewUrl}
              className="picture-src"
              alt="..."
            />
          </GridItem>
          <GridItem xs={12} sm={6}>
            <FormControl fullWidth className={classes.selectFormControl}>
              <InputLabel className={classes.selectLabel}>
                Full Name
              </InputLabel>
            </FormControl>
            <FormControl fullWidth className={classes.selectFormControl}>
              <InputLabel className={classes.selectLabel}>
                Country
              </InputLabel>
            </FormControl>
            <FormControl fullWidth className={classes.selectFormControl}>
              <InputLabel className={classes.selectLabel}>
                Sex
              </InputLabel>
            </FormControl>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(CheckerView);
