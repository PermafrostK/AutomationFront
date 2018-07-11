import React from 'react';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import PropTypes from 'prop-types';


export default class TextFieldExampleControlled extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired
    };
    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    render() {
        const { label } = this.props;
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <TextField
                        id="text-field-controlled"
                        onChange={this.handleChange}
                        floatingLabelText={label}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}