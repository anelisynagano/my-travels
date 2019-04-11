import React, { Component } from 'react';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div>
        <Travel
          destination="Cristo Redentor"
          country="Brazil"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cristo_redentor.jpg/220px-Cristo_redentor.jpg"
          distance="3000km"
        />
        <Travel
          destination="Coliseum"
          country="Italy"
          photo="https://upload.wikimedia.org/wikipedia/commons/a/a5/Colosseum_at_night.jpg"
          distance="1000km"
        />      
        </div>
    );
  }
}

export default App;
