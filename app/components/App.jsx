import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './subComponents/Header.jsx';
import Search from './subComponents/Search.jsx';
import Host from './subComponents/Host.jsx';
import Weather from './subComponents/Weather.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Header />
        <Weather />
        <Search />
        <Switch>
          <Route exact path='/host' component={Host}/>
        </Switch>
      </div>
    )
  }
};

export default App;
