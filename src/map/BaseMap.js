import React from 'react';
import {StaticMap} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import {HeatmapLayer} from '@deck.gl/aggregation-layers';

const config = {
  mapboxAccessToken: "pk.eyJ1IjoibWVsb2R5cGh1IiwiYSI6ImNrbjJlbms0eDE2eTkyb21vb3RpOTJtYmoifQ.KyZkOMUbvjs8btwGKqNyjg" 
}

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const INITIAL_VIEW_STATE = {
    longitude: -73.75,
    latitude: 40.73,
    zoom: 9,
    maxZoom: 16,
    pitch: 0,
    bearing: 0
  };  

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

    updateData(mapData) {
        this.setState({
            mapData: mapData
        })
    }

    // updates the general datasets from new props
    _generateLayer() {
        var data = [];

        for (const key in this.state.mapData) {
          let datapoint = this.state.mapData[key];
          let loc = datapoint["Location"];
          let arrLoc = loc.slice(1, loc.length - 1).split(", ");
    
          if (arrLoc && arrLoc.length == 2) {
            data.push({coordinates: [parseFloat(arrLoc[0]), parseFloat(arrLoc[1])], weight:1});
          }
        }
    
        const layer = new HeatmapLayer({
            id: 'heatmapLayer',
            data,
            getPosition: d => d.coordinates,
            getWeight: d => d.weight,
            aggregation: 'SUM'
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
                    className={'BYE'}
                    initialViewState={INITIAL_VIEW_STATE}
                    controller={true}
                    layers={this._generateLayer()}
                    viewState={this.props.viewState}
                >
                <StaticMap mapStyle={MAP_STYLE} mapboxApiAccessToken={config.mapboxAccessToken} />
                </DeckGL>
            </div>
        );
    }
}

export default BaseMap;














    