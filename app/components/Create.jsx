import React from 'react';
import Host from './subComponents/Host.jsx';
import ListEntry from './subComponents/ListEntry.jsx';
import { Container, Jumbotron } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
    this.restaurantsCallback = this.restaurantsCallback.bind(this)
  }

  restaurantsCallback(restaurantArray) {
    console.log('IN CREATE ARRAY', restaurantArray);
    this.setState({
      restaurants: restaurantArray
    }, () => console.log('STATE IN CREATE', this.state.restaurants))
  }

  render() {
    return (
      <div>
        <Jumbotron>
        </Jumbotron>,
        <Host callbackFromCreate={this.restaurantsCallback}/>
        <ListEntry entries = {this.state.restaurants} />
      </div>
    )
  }
}

export default Home;
