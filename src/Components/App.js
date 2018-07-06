//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//Data
import items from '../Data/Menu';

class App extends Component {
  static propTypes={
    
  }
  render() {
    return (
      <div className="App">
        <Header title="Automation Project" items={items}/>
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
