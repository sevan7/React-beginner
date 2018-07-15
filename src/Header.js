import React from 'react';
import './Header.css';

class Header extends React.Component {
    render () {
        return (
            <div className='head'>
               <h1>{this.props.title}</h1>
               <p>{this.props.subtitle}</p>
            </div>
        );
    }
}

export default Header;