import React from 'react';
import TextField from 'material-ui/TextField';
import { orange500, blue500, redA100, green500 } from 'material-ui/styles/colors';



const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: redA100,
  },
  floatingLabelStyle: {
    color: green500 ,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

const TextFields = () => (
  <div>
    <TextField
      floatingLabelText={"Test"}
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    />
  </div>
);

export default TextFields;