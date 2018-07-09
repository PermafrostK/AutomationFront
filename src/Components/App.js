//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components

import BackGroundImage from './Global/BackGroundImage';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const {children} = this.props; 
    return (
      <div className="App">
        <BackGroundImage prebody= {children}/>
      </div>
    );
  }
}

export default App; 
