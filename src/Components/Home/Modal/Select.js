import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { render } from 'react-dom';
import TextF from './TextFields';


//const element = (<TextF />);
var label;
var label2;
export default class Select extends React.Component {
    state = {
        value: undefined
    };

    handleChange = (event, index, value) => {
        this.setState({ value });
        this.handleChangeInput(value);
    }

    handleChangeInput = (value) => {
        switch (value) {
            case 1:
                label = "Get Url";
                break;
            case 2:
                label = "Name Div Click";
                break;
            case 3:
                label = "Name Div Text";
                label2 = "Value 2 Send";
                render(<TextF label={label2} />, document.getElementById('TextField2'));
                break;
            case 4:
                label = "Start Sleep Time";
                break;
            case 5:
                label = "Take ScreenShot Name";
                break;
            default:

            break;

        }
        render(<TextF label={label} />, document.getElementById('TextField'));

    }

    render() {
        return (
            <div>
                <SelectField floatingLabelText="Action" value={this.state.value} onChange={this.handleChange} >
                    <MenuItem value={1} primaryText="Send Url" />
                    <MenuItem value={2} primaryText="Press Click" />
                    <MenuItem value={3} primaryText="Send Text" />
                    <MenuItem value={4} primaryText="Send Sleep" />
                    <MenuItem value={5} primaryText="Take A ScreenShot" />
                </SelectField>
                <div id="TextField"></div>
                <div id="TextField2"></div>
            </div>
        );
    }
}


