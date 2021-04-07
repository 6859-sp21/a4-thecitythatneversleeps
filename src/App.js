import React from 'react';
import './App.css';

import data1 from "./data/mapData1";
import data2 from "./data/mapData2";
import data3 from "./data/mapData3";

import BaseMap from "./map/BaseMap";
import FilterSidebar from "./sidebar/FilterSidebar";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: {},
      layers: [],
      iconData: [],
      startDatetime: 'January 1, 2019, 00:00:00 AM',
      endDatetime: 'March 31, 2021, 11:59:59 PM',
      // add any other default filter parameters here
      openSidebar: false,
    }
  }

  handleDrawerOpen = () => {
    this.setState({
      openSidebar: true
    })
  };

  handleDrawerClose = () => {
    this.setState({
      openSidebar: false
    })
  };

  // gets map data
  getMapData = () => {
    const mapData = {
      ...data1.mapData1,
      ...data2.mapData2,
      ...data3.mapData3,
    };
    return mapData;
  }

  // for filtering data
  updateData = (mapData) => {
    // create icon data
    let iconData = [];

    for (const key in mapData) {
      let datapoint = mapData[key];
      let loc = datapoint["Location"];
      let arrLoc = loc.slice(1, loc.length - 1).split(", ");

      if (arrLoc && arrLoc.length == 2) {
        iconData.push({coordinates: [parseFloat(arrLoc[0]), parseFloat(arrLoc[1])], exits:9});
      }
    }

    console.log(iconData);

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

    // update the state of the component
    this.setState({
        mapData: mapData,
        iconData: iconData,
        layers: layers,
    });
  }
  
  // when the component is first created
  componentDidMount() {
    let mapData = this.getMapData();
    this.updateData(mapData);
  }

  render() {
    console.log(this.state.layers);
    return (
      <div className="App">
        {/* <BaseMap 
          mapData={this.state.mapData}
        >
        </BaseMap> */}
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={this.state.layers}
        >
          <StaticMap mapboxApiAccessToken={config.mapboxAccessToken} />
        </DeckGL>
      
        <FilterSidebar 
          updateMapData={this.updateMapData} 
          mapData={this.state.mapData} 
          open={this.state.openSidebar}
        >
        </FilterSidebar>
      </div>
    );
  }
}

export default App;