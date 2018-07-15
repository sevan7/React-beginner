import React from 'react';
import './Box.css';

class Box extends React.Component {
    render () {
        return (
            <div className='Box'>
                <p>{this.props.Box}</p>
            </div>
    
        );

    } 

}

export default Box;