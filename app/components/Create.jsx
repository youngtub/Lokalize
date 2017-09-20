import React from 'react';
import Host from './subComponents/Host.jsx';
import ListEntryCreate from './subComponents/ListEntryCreate.jsx';
import { Container, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
<<<<<<< HEAD

=======
>>>>>>> merge conflicts fixed


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
<<<<<<< HEAD
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
=======
      venue: '',
      address: ''
    }
    this.restaurantsCallback = this.restaurantsCallback.bind(this);
    this.selectRestaurantCallback = this.selectRestaurantCallback.bind(this);
    this.submitEvent = this.submitEvent.bind(this);
>>>>>>> merge conflicts fixed
  }

  restaurantsCallback(restaurantArray) {
    this.setState({
      restaurants: restaurantArray
    })
  }

<<<<<<< HEAD
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
=======
  selectRestaurantCallback(venue, address) {
>>>>>>> merge conflicts fixed
    this.setState({
      venue: venue,
      address: address
    })
  }

  submitEvent(name, type, date) {
    console.log('ABOUT TO SEND POST REQUEST');
    console.log('Parameters', name, type, date, this.state.venue, this.state.address);
<<<<<<< HEAD
    axios.post('/api/form', {
      name: name,
      dinnerType: type,
      date: date,
      location: this.state.venue,
      address: [40.7504864, 73.97640100000001],
      capacity: 10
    })
    .then( (response) => {
      // console.log('Event sent to back end');
      console.log(response);
    })
>>>>>>> working on selecting venue
=======

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
>>>>>>> working
  }

  render() {
    return (
      <div>
        <Jumbotron>
        </Jumbotron>,
<<<<<<< HEAD
<<<<<<< HEAD
        <Host getAllRestaurantsFromQuery={this.restaurantsCallback} submitEventCallback={this.submitEvent}/>
=======
        <Host callbackFromCreate={this.restaurantsCallback}/>
>>>>>>> working on selecting venue
=======
        <Host getAllRestaurantsFromQuery={this.restaurantsCallback} submitEventCallback={this.submitEvent}/>
>>>>>>> merge conflicts fixed
        <ListEntryCreate entries = {this.state.restaurants} selectCallback={this.selectRestaurantCallback}/>
      </div>
    )
  }
}

export default Home;
