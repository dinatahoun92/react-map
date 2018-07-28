import React, { Component } from 'react';
import './App.css';
import {GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer'

class App extends Component {
  render() {
      var toggle = ()=> {
          document.getElementById("sidenav").classList.toggle("close");
          document.getElementById("sidenav").classList.toggle("open");
        document.getElementById("top-bar").classList.toggle("open-width");
         document.getElementById("top-bar").classList.toggle("close-width");
          document.getElementById("MapStyle").classList.toggle("MapWidth-full");
         document.getElementById("MapStyle").classList.toggle("MapWidth");
      }
    return (
     <div className="container">
           
            <div className="sidebar open" id="sidenav">
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
            <div className="main-content" id="MapStyle">
                 <div className="top-bar close-width" id="top-bar">
                     <div className="outerLines" onClick={toggle}>
                <span className="lines" ></span>
                         </div>
            </div>
                <MapContainer/>
            </div>
     </div>
    );
  }
}
export default App;

