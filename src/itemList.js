import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ItemList extends Component {

    constructor(props){
    super(props);
        
    this.state={
         search: '',
        selectedAddress:'click on places list on sidebar to get address',
        selectedLocation:''
    }
         this.onchange = this.onchange.bind(this);

    }
    //get value of input
       onchange = function(e){
       this.setState({search: e.target.value})
       console.log(this.state.search);
           this.props.callback(e.target.value);

   }
  
       //get id of clicked location
      handleClick = (e, locs) => {
     this.setState({selectedLocation: locs.id}, () => {
  this.props.getClickedLocations(this.state.selectedLocation);
    });
          
    this.setState({selectedAddress: locs.location.formattedAddress}, () => {
    this.props.getLocAddress(this.state.selectedAddress);

    },this);
  
          
} 
        
 
    render() {
     
    return (
                    <div className="sidebar open" id="sidenav">
                <h2>
                    Dina's Locations
                </h2>
                <input  aria-label="Search" type="text" placeholder="type to filter" value={this.state.search} onChange={this.onchange}>
                </input>
                   <ul>
                   
                  {this.props.locationList.filter(locs => {
                           return(
                           locs.name.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0
                           )
                       }).map(function(locs, index){
                    return (
              <a href="#" key={index}>
                <li key={index} value={locs.name} 
                   onClick={((e) => this.handleClick(e, locs))}
                           
                           
                   >
                           
                    {locs.name}
                               
                </li>
                   </a>
                
                        )
     },this)}
  </ul>
            </div>
        )
}
}

export default ItemList;