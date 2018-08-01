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
   constructor(props){
    super(props);
        
    this.state={
        items: [],
        search: '',
        inputChanged:false,
        selectedLocation:'',
        whenClicked: false,
        
      }
     this.onchange = this.onchange.bind(this);
   

  
}

  componentDidMount() {    
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ items: res.response.venues });
        this.setState({ items:this.state.items.slice(1, 8) });
      });
      
  }
 
   onchange = function(e){
       this.setState({search: e.target.value})
       console.log(this.state.search)
   }
  
      handleClick = (e, locs) => {
     this.setState({selectedLocation: locs.id})
    console.log(this.state.selectedLocation);
} 
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
           <div className="foursquare">
               Powerd by foursquare
           </div>
            <div className="sidebar open" id="sidenav">
                <h2>
                    Dina's Locations
                </h2>
                <input type="text" placeholder="type to filter" value={this.state.search} onChange={this.onchange}>
                </input>
                   <ul>
                   
                  {this.state.items.filter(locs => {
                           return(
                           locs.name.indexOf(this.state.search) >= 0
                           )
                       }).map(function(locs, index){
                    return (
              
                <li key={index} value={locs.name} 
                   onClick={((e) => this.handleClick(e, locs))}
                           
                           
                   >
                    {locs.name}
                </li>
                   
                
                        )
     },this)}
  </ul>
            </div>
            <div className="main-content" id="MapStyle">
                 <div className="top-bar close-width" id="top-bar">
                     <div className="outerLines" onClick={toggle}>
                <span className="lines" ></span>
                         </div>
                       
                         
            </div>
                <MapContainer locationList={this.state.items} searchInput={this.inputChanged} searchList={this.state.search} clickedList={this.state.selectedLocation} whenClicked={this.state.whenClicked}/>
            </div>
     </div>
    );
  }
}
export default App;

