import React from 'react';
import axios from 'axios';
import Weather from './subComponents/Weather.jsx';
import Search from './subComponents/Search.jsx';
import MapWithADirectionsRenderer from './subComponents/Map.jsx';
// import Calendar from './subComponents/Calendar.jsx';
import ListEntry from './subComponents/ListEntry.jsx';
import { Container, Jumbotron, Table } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [{
        "username": "",
        "eventname": "Slices with Strangers",
        "dinner_type": "Pizza",
        "eventdate": "9/27/17",
        "eventlocation": "NYC",
        "capacity": null
    }]
    }
  }

  componentDidMount () {
    let username = this.props.username;
    console.log('component mounted', username)
    axios.get('/api/home', {params: {username}})
      .then((events) => {
        if(events.data.length) {
          this.setState({events: events.data});
          console.log('got events back', this.state.events)
        }
      })
      .catch((err) => {
        console.error('axios GET error: ', err);
      })
  }


  render() {
    return (
      <div>
        <Weather />,
        <Jumbotron>
          <MapWithADirectionsRenderer />,
        </Jumbotron>,
        <Table responsive>
          <thead>
            <tr>
              <th>Event</th>
              <th>Dinner Type</th>
              <th>Date of Event</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              { this.state.events.map((event) => ( <td>{event.eventname}</td> )) }
              { this.state.events.map((event) => ( <td>{event.dinner_type}</td> )) }
              { this.state.events.map((event) => ( <td>{event.eventdate}</td> )) }
              { this.state.events.map((event) => ( <td>{event.eventlocation}</td> )) }
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

{/* array with objects first map then for in set  */}
export default Home;

{/* <ListEntry entries={this.state.events} /> */}
