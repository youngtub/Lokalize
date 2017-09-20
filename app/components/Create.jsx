import React from 'react';
import Host from './subComponents/Host.jsx';
import ListEntryCreate from './subComponents/ListEntryCreate.jsx';
import { Container, Jumbotron } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      venue: ''
    }
    this.restaurantsCallback = this.restaurantsCallback.bind(this);
    this.selectRestaurantCallback = this.selectRestaurantCallback.bind(this);
  }

  restaurantsCallback(restaurantArray) {
    this.setState({
      restaurants: restaurantArray
    })
  }

  selectRestaurantCallback(venue) {
    this.setState({
      venue: venue
    })
  }

  render() {
    return (
      <div>
        <Jumbotron>
        </Jumbotron>,
        <Host callbackFromCreate={this.restaurantsCallback}/>
        <ListEntryCreate entries = {this.state.restaurants} selectCallback={this.selectRestaurantCallback}/>
      </div>
    )
  }
}

export default Home;
