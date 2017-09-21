import React from 'react';
import {Button} from 'react-bootstrap';
import Axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
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

  render() {
    return(
      <div>
        Username: <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
        Password: <input type="text" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
      <Button type="submit" value="Submit" onClick={() => this.props.onSignup(this.state.username, this.state.password, this.state.cityName)}>Create My Account</Button>
      </div>

      )
  }
};

export default Signup;
