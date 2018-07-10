import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextFields from './TextFields';
import PropTypes from 'prop-types';


var label;
export default class DialogExampleSimple extends React.Component {



    state = {
        open: false,
        value: 0,
        show: false
    };



    handleChange = (event, index, value) => {
        this.setState({ value });
        this.handledChangeForm(value);
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handledSubmit = () => {

        var serialize = require('form-serialize');
        var form = document.querySelector('#formText');
        var str = serialize(form);
        if (str==undefined||str==null||str.length<=0){
            console.log("str");
        }
        console.log(str);
    }
    handledChangeForm = (value) => {

        switch (value) {
            case 1:
                label=  "Get Url";
                break;
            case 2:
                label = "Name Div Click";
                break;
            case 3:
                label = "Name Div Text";
                break;
            case 4:
                label = "Start Sleep Time";
                break;
            case 5:
                label = "Take ScreenShot Name";
                break;
            default:
                this.setState({
                    show: this.show = false
                });
                label = "";
                break;
        }
        this.setState({
            show: this.show = true
        });

    };

    render() {        
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handledSubmit}
            />,
        ];
        return (

            <div>
                <div>
                    <FloatingActionButton onClick={this.handleOpen}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
                <div>
                    <Dialog
                        title="Dialog With Actions"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <form id="formText">
                            <SelectField floatingLabelText="Action" value={this.state.value} onChange={this.handleChange} >
                                <MenuItem value={1} primaryText="Send Url" />
                                <MenuItem value={2} primaryText="Press Click" />
                                <MenuItem value={3} primaryText="Send Text" />
                                <MenuItem value={4} primaryText="Send Sleep" />
                                <MenuItem value={5} primaryText="Take A ScreenShot" />
                            </SelectField>

                            <div>
                                {this.state.show ? <TextFields label={label} /> : null}
                            </div>
                        </form>
                    </Dialog>
                </div>
            </div>
        );
    }
}
