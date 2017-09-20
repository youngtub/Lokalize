import React from 'react';
import { Switch, Route, BrowserRouter, DefaultRoute, Redirect } from 'react-router-dom';
import Home from './Home.jsx';
import Join from './Join.jsx';
import Create from './Create.jsx';
import Header from './subComponents/Header.jsx';
// import Host from './subComponents/Host.jsx';
import Login from './subComponents/Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    }
    this.requireAuth = this.requireAuth.bind(this)
  }

  requireAuth(){
    return !this.state.isLoggedIn
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/login' component={Login}  onEnter={this.requireAuth.bind(this)}/>
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
              <Create />
            )
          )}/>

        </Switch>
      </div>
    )
  }
};

//backend route - with a /* redirect '/'

export default App;
