import React from 'react';

import DeckGL from '@deck.gl/react';
import {HexagonLayer, GridLayer, IconLayer, ScatterplotLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';

import logo from './logo.svg';
import './App.css';
import ReactSlider from 'react-slider'
import Slider from './slider/Slider';

const config = {
  mapboxAccessToken: "pk.eyJ1IjoibWVsb2R5cGh1IiwiYSI6ImNrbjJlbms0eDE2eTkyb21vb3RpOTJtYmoifQ.KyZkOMUbvjs8btwGKqNyjg" 
  //process.env.MapboxAccessToken
}

// determines size of circles
// TODO: choose our own sizing
const ICON_MAPPING = {
  marker: {x: 0, y: 0, width: 128, height: 128, mask: true}
};

// Viewport settings
// We start in NYC, Manhattan 
const INITIAL_VIEW_STATE = {
  longitude: -74.0060,
  latitude: 40.7128,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer or other Layers
// TODO: Fill in data from csv->json
const json_data = {
  0: {
      coordinates:[73.9857, 40.7484]
    },
  1: {
      coordinates: [73.9665, 40.7812]
  }
};

// Filling in our data for the IconLayer
const iconData = []

for (const obj in json_data) {
  const loc = obj.coordinates;
  iconData.push({sourcePosition: loc, targetPosition: loc})
}

// DeckGL react component
function App() {
  const layers = [
    new IconLayer({
      id: 'icon-layer',
      iconData,
      pickable: true,
      // iconAtlas and iconMapping are required
      // getIcon: return a string
      // TODO: choose our own icon
      iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
      iconMapping: ICON_MAPPING,
      getIcon: d => 'marker',
      sizeScale: 15,
      getPosition: d => d.coordinates,
      getSize: d => 5,
      getColor: d => [Math.sqrt(d.exits), 140, 0] 
    })
  ];
  
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
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[0, 100]}
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={state => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={10}
        />
      </header>
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
