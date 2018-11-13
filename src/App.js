import React, { Component, StrictMode } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import { Card } from './components/Card';

class App extends Component {
  render() {
    return (
      <Provider>
        <StrictMode>
          <div className="ads">
            <h1 className="ads__title">VIP объявления</h1>
            <div className="ads__cards">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </StrictMode>
      </Provider>
    );
  }
}

export default App;
