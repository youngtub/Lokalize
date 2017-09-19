import React from 'react';
import Weather from './subComponents/Weather.jsx';
import Search from './subComponents/Search.jsx';
import MapWithADirectionsRenderer from './subComponents/Map.jsx';
// import Calendar from './subComponents/Calendar.jsx';
import ListEntry from './subComponents/ListEntry.jsx';
import { Container, Jumbotron } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
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
