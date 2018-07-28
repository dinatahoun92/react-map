import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
export class MapContainer extends Component {

state = {
     locations: [
      {name: "spectra", 
       Location: {lat: 30.7945609, lng: 30.9968792}},
      {name: "stereo",
       Location: {lat: 30.7934103, lng: 31.0028939}},
      {name: "macdonalds",
       Location: {lat: 30.7904377, lng: 30.998936}},
      {name: "Tarbous",
         Location: {lat: 30.7945609, lng:31.0012534}},
      {name: "Pizza hut",
         Location: {lat: 30.7929998, lng: 30.9983131}}
    ],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
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
         
  
  render() {

console.log(this.state.locations[0].name)
    return (
        
<Map
          google={this.props.google}
          className="MapWidth"
    zoom={16}
     initialCenter={{
            lat: 30.7945609,
            lng: 31.0012534
        }}
    >

   
      {this.state.locations.map(function(item){
        
       return (<Marker onClick={this.onMarkerClick.bind(this)} key={item.name} name={item.name} position={item.Location}/>)
     }.bind(this))}
  
        
    
     <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
    </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyCHVAaW8bMWP0RrjNtJlKxa98pDD0qUGkA"
})(MapContainer)
