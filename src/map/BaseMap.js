import React from 'react';
import {CSVLoader} from '@loaders.gl/csv';
import DeckGL from '@deck.gl/react';
import {StaticMap} from 'react-map-gl';

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

const layer = new HexagonLayer({
    data: 'path/to/data.tsv',
    loaders: [CSVLoader],
    loadOptions: {
      csv: {
        delimiter: '\t',
        dynamicTyping: true,
        skipEmptyLines: true
      }
    }
});

class BaseMap extends React.Component {
    render() {
        return (
            <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
                layers={layers}
            >
                <StaticMap mapboxApiAccessToken={config.mapboxAccessToken} />
            </DeckGL>
        );
    }
}

export default BaseMap;
    