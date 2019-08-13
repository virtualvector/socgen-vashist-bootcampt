import React, { Component } from 'react';

class ListItem extends Component {
  
    render() {
        return (
           <li className="list-group-item">{this.props.text}</li> 
        );
    }
}

export default ListItem;