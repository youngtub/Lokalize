import React from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Host from './Host.jsx';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Header />
        <Search />
        <Switch>
          <Route exact path='/host' component={Host}/>
        </Switch>
      </div>
    )
  }
};

export default App;
