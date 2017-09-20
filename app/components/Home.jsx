import React from 'react';
import axios from 'axios';
import Weather from './subComponents/Weather.jsx';
import Search from './subComponents/Search.jsx';
import MapWithADirectionsRenderer from './subComponents/Map.jsx';
// import Calendar from './subComponents/Calendar.jsx';
import ListEntry from './subComponents/ListEntry.jsx';
import { Container, Jumbotron } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      events: []
    }
  }
  //call to server to database to retrieve the events
  getEvents() {
    let username = this.state.username;
    return axios.get('/home')
      .then((response) => {
        this.setState({events})
      })
  }
  render() {
    return (
      <div>
        <Weather />,
        <Jumbotron>
          <MapWithADirectionsRenderer />,
        </Jumbotron>,
        <ListEntry entries={['thing1', 'thing2', 'thing3']} />
      </div>
    )
  }
}

export default Home;
