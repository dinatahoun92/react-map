import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
export class MapContainer extends Component {

state = {
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
        <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'spectra'}
    onClick={this.onMarkerClick}
    position={{lat: 30.7945609, lng: 30.9968792}} />
  <Marker
    name={'stereo'}
     onClick={this.onMarkerClick}
    position={{lat: 30.7934103, lng: 31.0028939}} />
  <Marker />
    <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'macdonalds'}
     onClick={this.onMarkerClick}
    position={{lat: 30.7904377, lng: 30.998936}} />
     <Marker
     name={'arabia cafe'}
     onClick={this.onMarkerClick}
    position={{lat:30.7945609, lng: 31.0012534}} />
  <Marker />
  <Marker
    name={'Pizza hut'}
     onClick={this.onMarkerClick}
    position={{lat: 30.7929998, lng: 30.9983131}} />
  <Marker />
     
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
