import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      brand: "Kia",
      model: "Forte",
      color: "Black",
      year: "2020"
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render(){
    return(
      <div>
        <h1>The brand of my car is {this.state.brand}.</h1>
        <h2>The color of my car is {this.state.color}.</h2>
        <h3>The model of my car is {this.state.model}.</h3>
        <h4>The year of my car is {this.state.year}.</h4>
        <button type = "button" onClick = {this.changeColor}>
          Change Color!
        </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
ReactDOM.render(<Car />, document.getElementById('root'));
export default App;
