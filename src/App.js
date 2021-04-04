import logo from './logo.svg';
import './App.css';

const config = {
  mapboxAccessToken: ProcessingInstruction.env.MapboxAccessToken
}

/// app.js
import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

// DeckGL react component
function App() {
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];

  return <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers} />;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Slider
              initial={10} 
              max={25} 
              onChange={value => console.log(value)}
            />
        </div>
      </header>
    </div>
  );
}

export default App;
