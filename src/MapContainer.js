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
          initialCenter={{
            lat: 30.7884700,
            lng: 31.0019200
          }}
          zoom={15}
 
    
    ></Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyCHVAaW8bMWP0RrjNtJlKxa98pDD0qUGkA"
})(MapContainer)
