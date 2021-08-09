import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import React from 'react';

class App extends React.Component{
  state = {
    count : 0
  };
  add = () => {
    this.setState(current =>({count : current.count+1}));
  };
  minus = () => {
    this.setState(current => ({count :  current.count-1}));
  };//This(add minus) is javascript code, not react
  // We don't write {this.add()} or {this.minus()} because we call the functions immediately
  render(){
    return(<div>
     <h1>The number is {this.state.count}</h1>
     <button onClick={this.add}>Add</button>
     <button onClick={this.minus}>Minus</button>
     </div>
    );
  }
}

export default App;
