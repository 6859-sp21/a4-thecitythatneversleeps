import React from 'react';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import {AmbientLight, PointLight, LightingEffect} from '@deck.gl/core';
import {HexagonLayer} from '@deck.gl/aggregation-layers';
import DeckGL from '@deck.gl/react';

const config = {
  mapboxAccessToken: "pk.eyJ1IjoibWVsb2R5cGh1IiwiYSI6ImNrbjJlbms0eDE2eTkyb21vb3RpOTJtYmoifQ.KyZkOMUbvjs8btwGKqNyjg" 
}

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const INITIAL_VIEW_STATE = {
    longitude: -74,
    latitude: 40.75,
    zoom: 10,
    minZoom: 10,
    maxZoom: 20,
    pitch: 40.5,
    bearing: 0
}; 

const ambientLight = new AmbientLight({
    color: [255, 255, 255],
    intensity: 1.0
});

const pointLight1 = new PointLight({
    color: [255, 255, 255],
    intensity: 0.8,
    position: [-0.144528, 49.739968, 80000]
});

const pointLight2 = new PointLight({
    color: [255, 255, 255],
    intensity: 0.8,
    position: [-3.807751, 54.104682, 8000]
});

const lightingEffect = new LightingEffect({ambientLight, pointLight1, pointLight2});

const material = {
    ambient: 0.64,
    diffuse: 0.6,
    shininess: 32,
    specularColor: [51, 51, 51]
};

export const colorRange = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78]
];

const radius = 100;
const upperPercentile = 100;
const coverage = 0.6;

// DeckGL react component
class HexagonMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layers: [],
            mapData: {},
        }
    }

    updateData(mapData) {
        this.setState({
            mapData: mapData
        })
    }

    getTooltipInfo({object}) {
        if (!object) {
          return null;
        }
        const lat = object.position[1];
        const lng = object.position[0];
        const count = object.points.length;
      
        return `\
          latitude: ${Number.isFinite(lat) ? lat.toFixed(6) : ''}
          longitude: ${Number.isFinite(lng) ? lng.toFixed(6) : ''}
          ${count} Incidents`;
    }

    // updates the general datasets from new props
    generateLayer() {
        var data = [];

        for (const key in this.state.mapData) {
          let datapoint = this.state.mapData[key];
          let loc = datapoint["Location"];
          let arrLoc = loc.slice(1, loc.length - 1).split(", ");
    
          if (arrLoc && arrLoc.length === 2) {
            data.push({coordinates: [parseFloat(arrLoc[0]), parseFloat(arrLoc[1])], weight:1});
          }
        }

        const layer = new HexagonLayer({
            id: 'heatmap',
            colorRange,
            coverage,
            data,
            elevationRange: [0, 500],
            elevationDomain: [0, 5000],
            elevationScale: data && data.length ? 50 : 0,
            extruded: true,
            getPosition: d => d.coordinates,
            pickable: true,
            radius,
            upperPercentile,
            material,
            transitions: {
                elevationScale: 200
            }
        });
        
        return [layer];
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
                    className={'HexagonMap'}
                    initialViewState={INITIAL_VIEW_STATE}
                    controller={true}
                    layers={this.generateLayer()}
                    viewState={this.props.viewState}
                    getTooltip={this.getTooltipInfo}
                    effects={[lightingEffect]}
                >
                <StaticMap reuseMaps mapStyle={MAP_STYLE} preventStyleDiffing={true} mapboxApiAccessToken={config.mapboxAccessToken} />
                </DeckGL>
            </div>
        );
    }
}

export default HexagonMap;