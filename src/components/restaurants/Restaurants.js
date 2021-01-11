import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  renderRestaurants = () => this.props.restaurants.map(r => {return <Restaurant restaurant={r} key={r.id} deleteRestaurant={this.props.deleteRestaurant}/>})
  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;