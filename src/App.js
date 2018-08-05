import React, { Component } from 'react';
import './App.css';
import {GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer'
import ReactDOM from 'react-dom';
import ItemList from './itemList'

var foursquare = require('react-foursquare')({
  clientID: 'T2NXZRKH0PH0Y0RTVAMOPKUUU35CNNOUHDH5UHR0QUXAM5QE',
  clientSecret: 'TBPLP5320XBMDYOH2HA4RHRSEVGL5WYC5L3O5O4OTYD4O1GZ'  
});
var params = {
  "ll": "41.9028,12.4964",

};
var that = this;
class App extends Component {
   constructor(props){
    super(props);
        
    this.state={
        items: [],
        inputChanged:false,
        selectedLocation:'',
        whenClicked: false,
        search:'',
        onListClicked:'',
        markerColor: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
         showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        infoDiv:"click on location list on sidebar to get the address",
        selectedAddress:'click on places list on sidebar to get address'
      }


}

  componentDidMount() {    
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ items: res.response.venues });
        this.setState({ items:this.state.items.slice(6, 11)});
         
      });
      
  }
 formItemList(params) {
  this.setState({
    search : params
  })
}
   getClickedLocations(params) {
  this.setState({
    selectedLocation : params
  })
}
    fromMapContainer(params) {
  this.setState({
    onListClicked : params
  })
}
    changeMarkerColor(){
     this.setState({ markerColor: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"});
    }
        onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

getLocAddress(params) {
  this.setState({
    selectedAddress : params
  })
}
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
    
  };
  render() {
      console.log(document.getElementsByClassName("gmnoprint") +"clasname")
    console.log("Selectedaddrss"+this.state.selectedAddress)
         
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
<ItemList getClickedLocations={this.getClickedLocations.bind(this)} locationList={this.state.items} searchList={this.state.search} callback={this.formItemList.bind(this)} onListClicked={this.state.onListClicked} changeMarkerColor={this.changeMarkerColor.bind(this)} getLocAddress={this.getLocAddress.bind(this)}/>
            <div className="main-content" id="MapStyle">
                 <div className="top-bar close-width" id="top-bar">
                     <div className="outerLines" onClick={toggle}>
                <span className="lines" ></span>
                         </div>
                       
                         
            </div>
               <div className="infoDiv">
                   <p>
                       {this.state.selectedAddress}
                   </p>
               </div>
                <MapContainer locationList={this.state.items} searchInput={this.inputChanged} searchList={this.state.search} clickedList={this.state.selectedLocation} whenClicked={this.state.whenClicked} ref="mapContainer" onSelectClick={this.fromMapContainer.bind(this)} markerColor={this.state.markerColor}
                showingInfoWindow={this.state.showingInfoWindow} activeMarker={this.state.activeMarker} selectedPlace ={this.state.selectedPlace} onMarkerClick={this.onMarkerClick.bind(this)} onMapClicked ={this.onMapClicked.bind(this)}/>
            </div>
     </div>
    );
  }
}
export default App;

