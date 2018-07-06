//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import logo from './img/logo.svg';
import './css/Header.css';


class Header extends Component {
    static propTypes = {
        Title: PropTypes.string.isRequired,
        Items: PropTypes.array.isRequired
    };

    render() {
        const { title, items } = this.props;
        return (
            <div className="Header">
                <div className="Logo">
                    <img src={logo} alt="logo" />
                    <h4>{title}</h4>
                    <ul className="Menu">
                    {items && items.map((item,key)=><li key={key}>{item.title}</li>)}

                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
