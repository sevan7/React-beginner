import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className='foot'>
                <div id='footText'>            
                    <p>{this.props.footer}</p>
                </div>
            </div>

        );
    }



}

export default Footer ;