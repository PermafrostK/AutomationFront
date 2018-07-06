//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';


//Assets
import './css/BackGroundImage.css';

//Components
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

//Data
import items from '../../Data/Menu';

class BackGroundImage extends Component {
    static propTypes = {
        prebody: PropTypes.object.isRequired
    };
    render() {

        const { prebody } = this.props;
        return (

            <div id="BackGroundImage">
                <Header title="Automation Project" items={items} />
                <Content body={prebody} />
                <Footer />
                <div id="BackGroundImage-Overlay">
                </div>
            </div>
        );
    }
}

export default BackGroundImage;
