import React from 'react';
import {Button} from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="modal-container">
        <Button
          bsSize="lg"
        >
          Create Account
        </Button>
        <Button
          bsSize="lg"
        >
          Login
        </Button>
      </div>
    )
  }
};

export default Login;
