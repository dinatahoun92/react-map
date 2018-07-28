import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
export class MapContainer extends Component {
    constructor(props) {
    super(props);
    this.state = {};

    
         
  }
  render() {


    return (
<Map
          google={this.props.google}
          className="MapWidth"
    zoom={15}
     initialCenter={{
            lat: 30.7865086,
            lng: 31.0003757
        }}
    >
        <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'spectra'}
    position={{lat: 30.7945609, lng: 30.9968792}} />
  <Marker
    name={'stereo'}
    position={{lat: 30.7934103, lng: 31.0028939}} />
  <Marker />
    <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'macdonalds'}
    position={{lat: 30.7904377, lng: 30.998936}} />
  <Marker
    name={'Pizza hut'}
    position={{lat: 30.7929998, lng: 30.9983131}} />
  <Marker />
      <Marker
    name={'grannys'}
    position={{lat:30.7996472, lng: 31.0012534}} />
  <Marker />
    </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyCHVAaW8bMWP0RrjNtJlKxa98pDD0qUGkA"
})(MapContainer)
