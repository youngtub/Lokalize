import React from 'react';
import Host from './subComponents/Host.jsx';
import ListEntryCreate from './subComponents/ListEntryCreate.jsx';
import { Container, Jumbotron } from 'react-bootstrap';
import axios from 'axios';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
<<<<<<< HEAD
      venue: '',
      address: ''
    }
    this.restaurantsCallback = this.restaurantsCallback.bind(this);
    this.selectRestaurantCallback = this.selectRestaurantCallback.bind(this);
    this.submitEvent = this.submitEvent.bind(this);
=======
      venue: ''
    }
    this.restaurantsCallback = this.restaurantsCallback.bind(this);
    this.selectRestaurantCallback = this.selectRestaurantCallback.bind(this);
>>>>>>> working on selecting venue
  }

  restaurantsCallback(restaurantArray) {
    this.setState({
      restaurants: restaurantArray
    })
  }

<<<<<<< HEAD
  selectRestaurantCallback(venue, address) {
    this.setState({
      venue: venue,
      address: address
    })
  }

  submitEvent(name, type, date) {
    console.log('ABOUT TO SEND POST REQUEST');
    console.log('Parameters', name, type, date, this.state.venue, this.state.address, this.props.userid);

      axios.post('/api/form', {
        name: name,
        dinnerType: type,
        date: date, 
        location: this.state.venue,
        address: this.state.address,
        capacity: 10,
        userid: this.props.userid
      })
      .then( (response) => {
        // console.log('Event sent to back end');
        console.log(response);
      })
=======
  selectRestaurantCallback(venue) {
    this.setState({
      venue: venue
    })
>>>>>>> working on selecting venue
  }

  render() {
    return (
      <div>
        <Jumbotron>
        </Jumbotron>,
<<<<<<< HEAD
        <Host getAllRestaurantsFromQuery={this.restaurantsCallback} submitEventCallback={this.submitEvent}/>
=======
        <Host callbackFromCreate={this.restaurantsCallback}/>
>>>>>>> working on selecting venue
        <ListEntryCreate entries = {this.state.restaurants} selectCallback={this.selectRestaurantCallback}/>
      </div>
    )
  }
}

export default Home;
