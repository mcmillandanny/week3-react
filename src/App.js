import React, { Component } from 'react';
import './App.css';
import PersonList from './Components/PersonList';
import PersonInput from './Components/PersonInput';



const Header = ({links}) => (
  <header className="header">
    <img className="logo" src="https://placeimg.com/80/80/animals" alt="crap" /> 
      <h1 className="h1-header">Fake Data.com</h1> 
        <nav>
          <ul>
            {links.map(link => {
              return (
                <li>
                </li>
              )
            })}
          </ul>  
        </nav> 
  </header>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PersonInput />
        <PersonList />
      </div>
    );
  }
}

export default App;
