import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ButtonFloat from './ButtonFloat';

export default class DialogExampleSimple extends React.Component {

    state = {
        open: false,
        value: 1
    };

    handleChange = (event, index, value) => {
        this.setState({ value });
        console.log(value);
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handledSubmit = () => {
        console.log(this.state.value);
    };

    render() {
        <ButtonFloat />
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
                        <SelectField floatingLabelText="Frequency" value={this.state.value} onChange={this.handleChange} >
                            <MenuItem value={1} primaryText="Never" />
                            <MenuItem value={2} primaryText="Every Night" />
                            <MenuItem value={3} primaryText="Weeknights" />
                            <MenuItem value={'ruiz'} primaryText="Weekends" />
                            <MenuItem value={666} primaryText="Weekly" />
                        </SelectField>
                    </Dialog>
                </div>
            </div>
        );
    }
}
