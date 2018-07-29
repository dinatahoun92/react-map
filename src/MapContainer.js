import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom';

var foursquare = require('react-foursquare')({
  clientID: 'T2NXZRKH0PH0Y0RTVAMOPKUUU35CNNOUHDH5UHR0QUXAM5QE',
  clientSecret: 'TBPLP5320XBMDYOH2HA4RHRSEVGL5WYC5L3O5O4OTYD4O1GZ'  
});
var params = {
  "ll": " 30.7945609,30.9968792",

};


export class MapContainer extends Component {

state = {
     locations: [
      {name: "spectra", 
       Location: {lat: 30.7945609, lng: 30.9968792}},
      {name: "stereo",
       Location: {lat: 30.7934103, lng: 31.0028939}},
      {name: "macdonalds",
       Location: {lat: 30.7904377, lng: 30.998936}},
      {name: "Tarboush",
         Location: {lat: 30.7945609, lng:31.0012534}},
      {name: "Pizza hut",
         Location: {lat: 30.7929998, lng: 30.9983131}}
    ],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
      error: null,
      isLoaded: false,
      items: []
  };
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  componentDidMount() {    
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ items: res.response.venues });
      });
  }

  render() {
   
 console.log(this.state.items)

    return (
        <div>
            
             <div>
        <div>Items:</div>
        { this.state.items.map(item=> {
                     if(30.795819996495517=== item.location.lat){
                     return( <div key={item.id}>{item.name}</div>
                     
                     )
                 }
                 }) }
    </div>
        
<Map
          google={this.props.google}
          className="MapWidth"
        zoom={16}
        initialCenter={{
            lat: 30.7945609,
            lng: 31.0012534
        }}
    >

   
      {this.state.locations.map(function(locs){
        
       return (<Marker onClick={this.onMarkerClick.bind(this)} key={locs.name} name={locs.name} position={locs.Location}/>)
     }.bind(this))}
  
        
    
     <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
    </Map>
        </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyCHVAaW8bMWP0RrjNtJlKxa98pDD0qUGkA"
})(MapContainer)
