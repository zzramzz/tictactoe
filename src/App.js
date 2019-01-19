import React, { Component } from 'react';

import store from './util/store';
import { Provider } from 'react-redux';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Component1 from './views/Component1';
import Container from './views/Container';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Component1} />
            <Route exact path="/cont" component={Container} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
