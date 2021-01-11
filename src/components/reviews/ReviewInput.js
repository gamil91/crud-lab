import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
    
  }

  handleOnChange = (e) => {
    this.setState({text:e.target.value})
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({text: ''})
  }

  render() {
    // debugger
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.text} onChange={this.handleOnChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
