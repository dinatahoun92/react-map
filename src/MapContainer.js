import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom';

var foursquare = require('react-foursquare')({
  clientID: 'T2NXZRKH0PH0Y0RTVAMOPKUUU35CNNOUHDH5UHR0QUXAM5QE',
  clientSecret: 'TBPLP5320XBMDYOH2HA4RHRSEVGL5WYC5L3O5O4OTYD4O1GZ'  
});
var params = {
  "ll": "41.9028,12.4964",

};


export class MapContainer extends Component {

    constructor(props){
    super(props);
        
    this.state={
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
      error: null,
      isLoaded: false,
      items: [],
     
    }
        
}

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
   var newItems = this.state.items.slice(1, 8);


    return (
        <div>
            
           
        
<Map
          google={this.props.google}
          className="MapWidth"
            zoom={16}
            initialCenter={{
            lat: 41.9028,
            lng: 12.4964
        }}
    >

   
      {newItems.map(function(locs){
        
       return (<Marker onClick={this.onMarkerClick.bind(this)} key={locs.id} name={locs.location.formattedAddress} position={locs.location} animation={this.props.google.maps.Animation.DROP}/>)
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
