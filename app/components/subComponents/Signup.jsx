import React from 'react';
import {Button} from 'react-bootstrap';
import Axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props)
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

  // handleNewUserSignup (event) {
  //   Axios.post('/api/signup', {
  //     username: this.state.username,
  //     password: this.state.password,
  //     cityName: this.state.cityName
  //   })
  //   .then(function(res) {
  //     if(res.data === true) {
  //       this.setState({
  //         username: username
  //       })
  //     } else {
  //       username:''
  //     }
  //     // link this to /signup in backend
  //   })
  // }

  render() {
    return(
      <div>
        Username: <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
        Password: <input type="text" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
        City Name: <input type="text" value={this.state.cityName} onChange={this.handleCityNameChange.bind(this)}/>
        <button type="submit" value="Submit" onClick={() => this.props.onSignup(this.state.username, this.state.password, this.state.cityName)}>Create Account</button>
      </div>

      )
  }
};

export default Signup;





