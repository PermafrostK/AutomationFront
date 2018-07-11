import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Selectjs from './Select';


export default class DialogExampleSimple extends React.Component {

    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
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
                    <Dialog title="Dialog With Actions" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}                    >
                        <Selectjs/>
                    </Dialog>
                </div>
            </div>
        );
    }
}
