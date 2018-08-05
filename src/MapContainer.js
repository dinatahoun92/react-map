import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom';


var that = this;

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
      this.props.locationList.filter(locs => {
    if(this.props.selectedLocations == locs.id){
    this.setState({markerColor: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"})

       }
       }
       )
}


  render() {
      var check = this.props.clickedList;
    return (
        <div role="application" className="mapContainer">
            
           
        
<Map
          google={this.props.google}
          className="MapWidth"
            zoom={16}
            initialCenter={{
            lat: 41.9028,
            lng: 12.4964,
            
        }}
    >
      {this.props.locationList.filter(locs => {
                           return(
                           locs.name.toLowerCase().indexOf(this.props.searchList) >= 0
                           )
                       }).map(function(locs){
       if(check==locs.id){
       return (<Marker  onClick={this.props.onMarkerClick} title ={locs.name} id={locs.id} key={locs.id} name={locs.location.formattedAddress} position={locs.location}
                   icon={{
    url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                              
  }}

                   />)
       }else{
              return (<Marker onClick={this.props.onMarkerClick} title ={locs.name} id={locs.id} key={locs.id} name={locs.location.formattedAddress} position={locs.location}
                   icon={{
    url:  "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                              
  }}

                   />)
       }
        
     }.bind(this))}
  
    
        
    
     <InfoWindow
          marker={this.props.activeMarker}
          visible={this.props.showingInfoWindow}>
            <div>
              <p className="header">{this.props.selectedPlace.name}</p>
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
