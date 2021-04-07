import React from 'react';
import './App.css';

import BaseMap from "./map/BaseMap";

// DeckGL react component
function App() {
  return (
    <div className="App">
      <header className="App-header"/>
      <BaseMap/>
    </div>
  );
}

export default App;
