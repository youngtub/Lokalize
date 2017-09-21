import React from 'react';
import { Switch, Route, BrowserRouter, DefaultRoute, Redirect } from 'react-router-dom';
import Home from './Home.jsx';
import Join from './Join.jsx';
import Create from './Create.jsx';
import Header from './subComponents/Header.jsx';
// import Host from './subComponents/Host.jsx';
import Login from './subComponents/Login.jsx';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
      uid: ''
    }
    this.requireAuth = this.requireAuth.bind(this)
    this.onLogout = this.onLogout.bind(this)
  }

  onLogin (username, password){
    axios.post('/api/login',{
      username: username,
      password: password
    })
    .then((res) => {
      console.log('RES IN APP.jsx', res)
      if (res.data) {
        this.setState({
          isLoggedIn: true,
          username: username,
          uid: res.data
        })
      }
    })
  }

  onLogout() {
    this.setState({
      isLoggedIn: false,
      username: ''
    })
  }

  requireAuth(){
    return !this.state.isLoggedIn
  }

  render() {
    return (
      <div>
        <Header onLogout={this.onLogout}/>
        <Switch>
          <Route path='/login' render={() => (
            this.requireAuth() ? (
            <Login onLogin={this.onLogin.bind(this)}/>
          ) : (
            <Redirect to="/home"/>
          )
          )}/>
          <Route exact path='/home' render={() => (
            this.requireAuth() ? (
              <Redirect to="/login"/>
            ) : (
              <Home />
            )
          )}/>

          <Route exact path='/join' render={() => (
            this.requireAuth() ? (
              <Redirect to="/login"/>
            ) : (
              <Join />
            )
          )}/>

          <Route exact path='/host' render={() => (
            this.requireAuth() ? (
              <Redirect to="/login"/>
            ) : (
              <Create userid={this.state.uid}/>
            )
          )}/>

        </Switch>
      </div>
    )
  }
};

export default App;
