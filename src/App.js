import React from 'react';

import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';

import logo from './logo.svg';
import './App.css';
import Slider from './slider/Slider.js';

const config = {
  mapboxAccessToken: "pk.eyJ1IjoibWVsb2R5cGh1IiwiYSI6ImNrbjJlbms0eDE2eTkyb21vb3RpOTJtYmoifQ.KyZkOMUbvjs8btwGKqNyjg" 
  //process.env.MapboxAccessToken
}

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -74.0060,
  latitude: 40.7128,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-74.0060, 40.7128], targetPosition: [-74.0060, 40.7128]}
];

// DeckGL react component
function App() {
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];
  
  return (
    <div className="App">
      <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
      >
        <StaticMap mapboxApiAccessToken={config.mapboxAccessToken} />
      </DeckGL>
      <div>
        <Slider
            initial={10} 
            max={25} 
            onChange={value => console.log(value)}
          />
      </div>
    </div>
  );
}

export default App;
