import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
     <div className="container">
           
            <div className="sidebar">
                <h2>
                    Dina's Locations
                </h2>
                <input type="text" placeholder="type to filter">
                </input>
                <ul>
                <li>
                    Pizza hut
                </li>
                    <li>
                    Macdonalds 
                    </li>
                    <li>
                    stereo
                    </li>
                    <li>
                    spectra
                    </li>
                    <li>
                    Tarboush
                    </li>
                </ul>
            </div>
            <div className="main-content">
                 <div className="top-bar">
                <span className="lines"></span>
            </div>
            </div>
     </div>
    );
  }
}

export default App;
