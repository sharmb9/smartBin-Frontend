import React, {Component} from 'react';
import Header from './components/Header'
import './App.css';
import About from './components/About';

class App extends Component{
  render(){
    return (
      <div className ="page">
        <Header></Header>
      </div>
    )
  }
}

export default App;