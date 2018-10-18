import React, { Component } from 'react';
import Navbar from './components/pages/Nav/nav';
import Title from './components/pages/Title/title';
import './App.css';

class App extends Component {
  render() {
    return (
      <React-Fragment>
      <Navbar />
      <Title />
     
      </React-Fragment>
    );
  }
}

export default App;
