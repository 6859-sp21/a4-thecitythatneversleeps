import React from 'react';

import DeckGL from '@deck.gl/react';
import {HexagonLayer, GridLayer, IconLayer, ScatterplotLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';

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

// // Data to be used by the LineLayer or other Layers
// // TODO: Fill in data from csv->json
// const json_data = {
//   0: {
//       coordinates:[-73.9857, 40.7484]
//     },
//   1: {
//       coordinates: [-73.9665, 40.7812]
//   }
// };

// // Filling in our data for the IconLayer
// const iconData = []

// for (const obj in json_data) {
//   const loc = obj.coordinates;
//   iconData.push({coordinates: loc, exits: 9})
// }

// DeckGL react component
class BaseMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layers: [],
            mapData: {},
            iconData: []
        }
    }

    // updates the general datasets from new props
    updateData(mapData) {
        // create icon data
        let iconData = [];
        for (const obj in mapData) {
            const loc = obj.coordinates;
            iconData.push({coordinates: loc, exits:9});
        }

        // recreate the layers
        let layers = [
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

        console.log(iconData.length);

        // update the state of the component
        this.setState({
            mapData: mapData,
            iconData: iconData,
            layers: layers,
        });
    }

    // when the props change (ie. global filters should affect the map)
    componentWillReceiveProps(nextProps) {
        this.updateData(nextProps.mapData);
    }
    
    // when the component is first created
    componentDidMount() {
        this.updateData(this.props.mapData);
    }
  
    render() {
        return(
            <div>
                <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
                layers={this.state.layers}
                >
                <StaticMap mapboxApiAccessToken={config.mapboxAccessToken} />
                </DeckGL>
            </div>
        );
    }
}

export default BaseMap;

    