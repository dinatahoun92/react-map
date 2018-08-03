import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom';




export class MapContainer extends Component {

    constructor(props){
    super(props);
        
    this.state={
    error: null,
    isLoaded: false,
    
  
     
    }
  this.onSelectClick = this.onSelectClick.bind(this);
}
 



onSelectClick=()=>{
    console.log("hey");
      this.props.locationList.filter(locs => {
    if(this.props.selectedLocations == locs.id){
    this.setState({markerColor: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"})

       }
       }
       )
}


  render() {
console.log(this.props.clickedList + "list")
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
      {this.props.locationList.filter(locs => {
                           return(
                           locs.name.toLowerCase().indexOf(this.props.searchList) >= 0
                           )
                       }).map(function(locs){
       return (<Marker onClick={this.props.onMarkerClick} key={locs.id} name={locs.location.formattedAddress} position={locs.location}
                   icon={{
    url:  this.props.markerColor
                              
  }}

                   />)
     }.bind(this))}
  
        
    
     <InfoWindow
          marker={this.props.activeMarker}
          visible={this.props.showingInfoWindow}>
            <div>
              <h1>{this.props.selectedPlace.name}</h1>
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
