import React from 'react';
import Weather from './subComponents/Weather.jsx';
import Search from './subComponents/Search.jsx';
import MapWithADirectionsRenderer from './subComponents/Map.jsx';
// import Calendar from './subComponents/Calendar.jsx';
import Myevents from './subComponents/Myevents.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 
        <Weather />,
        <MapWithADirectionsRenderer />,
       
      </div>
    )
  }
}

export default Home;
