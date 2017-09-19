import React from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Host from './Host.jsx';
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
        <div className="jumbotron">
          <Host />
        </div>
      </div>
    )
  }
};

export default App;
