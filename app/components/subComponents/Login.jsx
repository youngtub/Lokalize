import React from 'react';
import {Button, FormControl, FormGroup} from 'react-bootstrap';

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
      <div className="modal-container">
        <form action="/action_page.php">
          Username: <input type="text" name="fname" onChange={this.usernameChange}/><br/>
          Password: <input type="text" name="lname" onChange={this.passwordChange}/>
        </form>
        <Button bsSize="lg">
          Create Account
        </Button>
        <Button bsSize="lg" onClick={this.onSubmit}>
          Login
        </Button>
      </div>
    )
  }
};

export default Login;


// 'Create Account' button might need to be moved to Signup.jsx for modularity
