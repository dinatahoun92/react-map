import React, { Component } from 'react';
import './App.css';
import {GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer'
import ReactDOM from 'react-dom';
import ItemList from './itemList'



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
      componentDidMount = () => {
    this.getLocation()
   
  }
      
// Fetching Foursquare API
  getLocation = () => {
    fetch('https://api.foursquare.com/v2/venues/search?query=&ll=41.9028,12.4964&limit=10&client_id&client_secretO&v=20180720&oauth_token=ETMR1KX3COLMBGTTN1YAEMA1W2QADJB4E4COOYFHGEIE5ROD&v=20180805')
    .then(res => res.json())
    .then(items => {
        this.setState({ items: items.response.venues.slice(5, 11) });
      })
    .catch((error) => {
      alert('sorry,there is an error in fetcging data from foursquare api  ')
      
    })
      
          function handleErrors(response) {
    if (!response.ok) {
      //console.log('response status Text',  response)
        throw Error(response.statusText);
    }
    return response;
  }
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
                     
                     <a href="#" aria-role="button" className="outerLines" onClick={toggle} aria-role="button">
                    
                <span className="lines" ></span>
                       
                     </a>
                         
            </div>
               <div className="infoDiv">
                   <p>
                       {this.state.selectedAddress}
                   </p>
               </div>
                
                {(navigator.onLine) && <MapContainer locationList={this.state.items} searchInput={this.inputChanged} searchList={this.state.search} clickedList={this.state.selectedLocation} whenClicked={this.state.whenClicked} ref="mapContainer" onSelectClick={this.fromMapContainer.bind(this)} markerColor={this.state.markerColor}
                showingInfoWindow={this.state.showingInfoWindow} activeMarker={this.state.activeMarker} selectedPlace ={this.state.selectedPlace} onMarkerClick={this.onMarkerClick.bind(this)} onMapClicked ={this.onMapClicked.bind(this)}/>}
                 { (!navigator.onLine) && 
            (<div>
              <p className="offline">There is an Error in google maps api.. so it can't be displayed at this moment</p>
              
            </div>)

          }
            </div>
     </div>
    );
  }
}
export default App;

