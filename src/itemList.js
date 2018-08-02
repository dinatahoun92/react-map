import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ItemList extends Component {

    constructor(props){
    super(props);
        
    this.state={
         search: '',
    }
         this.onchange = this.onchange.bind(this);

    }
       onchange = function(e){
       this.setState({search: e.target.value})
       console.log(this.state.search);
           this.props.callback(e.target.value);

   }
  
      handleClick = (e, locs) => {
     this.setState({selectedLocation: locs.id})
    console.log(this.state.selectedLocation);
  
} 

     render() {

    return (
                    <div className="sidebar open" id="sidenav">
                <h2>
                    Dina's Locations
                </h2>
                <input type="text" placeholder="type to filter" value={this.state.search} onChange={this.onchange}>
                </input>
                   <ul>
                   
                  {this.props.locationList.filter(locs => {
                           return(
                           locs.name.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0
                           )
                       }).map(function(locs, index){
                    return (
              
                <li key={index} value={locs.name} 
                   onClick={((e) => this.handleClick(e, locs))}
                           
                           
                   >
                    {locs.name}
                </li>
                   
                
                        )
     },this)}
  </ul>
            </div>
        )
}
}

export default ItemList;