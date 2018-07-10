import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextFields from './TextFields';
import Grid from '@material-ui/core/Grid';


var test;

export default class DialogExampleSimple extends React.Component {

    state = {
        open: false,
        value: 0,
        show: false
    };

    handleChange = (event, index, value) => {
        this.setState({ value });
        console.log(value);
        this.handledChangeForm(value);
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handledChangeForm = (value) => {
        // test = '6666969';
        // this.setState({ test: test });
        switch (value) {

            case 1:
                this.setState({
                    show: this.show = true
                });
                break;
            case 2:
                this.setState({
                    show: !this.state.show
                });

            default:

                break;
        }

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
                        <Grid item xs={12} sm={6}>
                            <SelectField floatingLabelText="Action" value={this.state.value} onChange={this.handleChange} >
                                <MenuItem value={1} primaryText="Never" />
                                <MenuItem value={2} primaryText="Every Night" />
                                <MenuItem value={3} primaryText="Weeknights" />
                                <MenuItem value={'ruiz'} primaryText="Weekends" />
                                <MenuItem value={666} primaryText="Weekly" />
                            </SelectField>
                        </Grid>
                        <div>
                            <Grid item xs={12} sm={6}>
                                {this.state.show ? <TextFields/> : null}
                            </Grid>
                        </div>

                    </Dialog>
                </div>
            </div>
        );
    }
}
