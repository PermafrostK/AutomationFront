import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Modaladd from './Modal/ModalAdd';

class Home extends Component {
    render() {
        return (
            <div className="Home">

                <MuiThemeProvider>
                    
                    <Modaladd />
                </MuiThemeProvider>                
                <h1>Home Page</h1>
            </div>
        );
    }
}

export default Home;