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
        search:''
      }


}

  componentDidMount() {    
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ items: res.response.venues });
        this.setState({ items:this.state.items.slice(5, 11)});
         
      });
      
  }
 formItemList(params) {
  this.setState({
    search : params
  })
}
   
  render() {
      console.log(this.state.items);
    
         
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
<ItemList locationList={this.state.items} searchList={this.state.search} callback={this.formItemList.bind(this)}/>
            <div className="main-content" id="MapStyle">
                 <div className="top-bar close-width" id="top-bar">
                     <div className="outerLines" onClick={toggle}>
                <span className="lines" ></span>
                         </div>
                       
                         
            </div>
                <MapContainer locationList={this.state.items} searchInput={this.inputChanged} searchList={this.state.search} clickedList={this.state.selectedLocation} whenClicked={this.state.whenClicked} ref="mapContainer"/>
            </div>
     </div>
    );
  }
}
export default App;

