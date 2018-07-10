import React from 'react';
import TextField from 'material-ui/TextField';
import { orange500, blue500, redA100 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';


const styles = {
    errorStyle: {
        color: orange500,
    },
    underlineStyle: {
        borderColor: redA100,
    },
    floatingLabelStyle: {
        color: orange500,
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
};
export default class TextFields extends React.Component {

    static propTypes = {
        label: PropTypes.string.isRequired,

    };

    constructor(props) {
        super(props);

        this.state = {
            value: undefined,
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    render() {
        const { label } = this.props;
        return (
            <div>
                <TextField
                    floatingLabelText={label}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    onChange={this.handleChange}
                    name="input"
                />
            </div>
        );
    }
}