import React from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Host from './Host.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Header />
        <Search />
        <div className="jumbotron">
          <Host />
        </div>
      </div>
    )
  }
};

export default App;
