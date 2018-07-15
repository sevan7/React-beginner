import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Box from './Box';

class App extends React.Component {
  render () {
    const title = 'React App';
    const subtitle = 'First React App';
    const footer = 'Footer Part';
    const Box1 = 'Box1';
    const Box2 = 'Box2';
  
    return (
      <div>
        <Header title = {title} subtitle = {subtitle}/>
        <Footer footer = {footer} />
        <div className = 'Box1'>  
          <Box  Box = {Box1}/>
        </div> 
        <div className= 'Box2'>
          <Box  Box = {Box2}/>
        </div>     
      </div>
    );
  }
}

export default App;
