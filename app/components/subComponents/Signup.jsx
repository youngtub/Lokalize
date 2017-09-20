import React from 'react';
import {Button} from 'react-bootstrap';
import Axios from 'axios';

class Signup extends React.Component {
  constructor() { //do I need props here? Why/why not?
    super()
    this.state = {
      username: '',
      password: '',
      cityName: ''
    }
  }

  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange (event) {
    this.setState({
      password: event.target.value
    })
  }

  handleCityNameChange (event) {
    this.setState({
      cityName: event.target.value
    })
  }

  handleNewUserSignup (event) {
    Axios.post('/api/signup', {
      username: this.state.username,
      password: this.state.password,
      cityName: this.state.cityName
    })
    .then(function(res) {
      console.log(res);
      // returns true,
      // functionality that logs user in

    })
  }

  render() {
    return(
      <div>
        Username: <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
        Password: <input type="text" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
        City Name: <input type="text" value={this.state.cithName} onChange={this.handleCityNameChange.bind(this)}/>
        <button type="submit" value="Submit" onClick={this.handleNewUserSignup.bind(this)}>Create Account</button>
      </div>

      )
  }
};

export default Signup;





