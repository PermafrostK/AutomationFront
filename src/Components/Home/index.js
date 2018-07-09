import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Modaladd from './Modal/ModalAdd';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

class Home extends Component {
    render() {
        return (
            <div className="Home">

                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Modaladd />
                </MuiThemeProvider>                
                <h1>Home Page</h1>
            </div>
        );
    }
}

export default Home;