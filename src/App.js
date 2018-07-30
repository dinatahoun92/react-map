import React, { Component } from 'react';
import './App.css';
import {GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer'
import ReactDOM from 'react-dom';

var foursquare = require('react-foursquare')({
  clientID: 'T2NXZRKH0PH0Y0RTVAMOPKUUU35CNNOUHDH5UHR0QUXAM5QE',
  clientSecret: 'TBPLP5320XBMDYOH2HA4RHRSEVGL5WYC5L3O5O4OTYD4O1GZ'  
});
var params = {
  "ll": "41.9028,12.4964",

};

class App extends Component {
    state = {
        items: []
    };
  componentDidMount() {    
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ items: res.response.venues });
      });
  }
  render() {
         var newItems = this.state.items.slice(1, 7);
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
                  {newItems.map(function(locs){
                    return (
                <ul>
                <li>
                    {locs.name}
                </li>
                   
                </ul>
                        )
     })}
  
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

