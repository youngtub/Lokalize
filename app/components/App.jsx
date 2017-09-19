import React from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Host from './Host.jsx';
import { Switch, Route } from 'react-router-dom';
import Weather from './Weather.jsx';

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
