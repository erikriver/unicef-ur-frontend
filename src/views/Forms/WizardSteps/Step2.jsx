import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Datetime from "react-datetime";

// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.jsx";
import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";

const style = {
  ...customSelectStyle,
  ...customCheckboxRadioSwitch,
  ...extendedFormsStyle
};

class Step2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
      <h4 className={classes.infoText}>Extra Data</h4>
      <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
        
                <InputLabel className={classes.label}>
                  Born Date
                </InputLabel>
                <br />
                <FormControl>
                  <Datetime
                    timeFormat={false}
                    inputProps={{ placeholder: "Born date" }}
                  />
                </FormControl>
          </GridItem>
          <GridItem xs={12} sm={7}>
          <CustomInput
            labelText="Parents?"
            id="parents"
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>
      </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(Step2);
