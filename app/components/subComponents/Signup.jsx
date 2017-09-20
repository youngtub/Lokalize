import React from 'react';
import {Button} from 'react-bootstrap';
import Axios from 'axios';

class CreateAccountForm extends React.Component {
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

// user inputs username and password combo into form in frontend
// Axios takes input, addes to db
// server takes new info, return

    // update database here
      // axios sends data to server
      // recieves post request
      // server processes data
      // server sends back response
        // axios promises (.then)
      // redirect (server-side should already take care of redirecting)
      username: this.state.username,
      password: this.state.password,
      cityName: this.state.cityName
    })
    .then(function(res) {
      console.log('new user created');
    })
  }

  render() {
    return(
      <div input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}>
      </div>

      </div>
      )
  }
};

export default Signup;





