import React from 'react';
import {Button, FormControl, FormGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  usernameChange(e) {
    this.setState({username: e.target.value})
  }

  passwordChange(e) {
    this.setState({password: e.target.value})
  }

  onSubmit(){
    this.props.onLogin(this.state.username, this.state.password)
  }

  render() {
    return (
      <div className="modal-container, EventForm">
        <form action="/action_page.php" className="LoginForm">
          Username: <input type="text" name="fname" onChange={this.usernameChange}/><br/>
          Password: <input type="password" name="lname" onChange={this.passwordChange}/>
      </form><br></br>
        <Button bsSize="sm" onClick={this.onSubmit}>
          Login
        </Button>
        <Link to="/signup">
          <Button bsSize="sm">
            Create Account
          </Button>
        </Link>
      </div>
    )
  }
};

export default Login;


// 'Create Account' button might need to be moved to Signup.jsx for modularity
