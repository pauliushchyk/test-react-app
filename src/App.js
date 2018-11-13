import React, { Component, StrictMode } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import { Ads } from './containers/Ads';
import { store } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StrictMode>
          <Ads />
        </StrictMode>
      </Provider>
    );
  }
}

export default App;
