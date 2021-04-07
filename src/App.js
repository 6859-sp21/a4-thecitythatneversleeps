import React from 'react';
import './App.css';

import data1 from "./data/mapData1";
import data2 from "./data/mapData2";
import data3 from "./data/mapData3";

import BaseMap from "./map/BaseMap";
import FilterSidebar from "./sidebar/FilterSidebar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: {},
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
  updateMapData = (newMapData) => {
    this.setState({
      mapData: newMapData
    })
  }

  // upon initialization
  componentDidMount() {
    let mapData = this.getMapData();
    this.setState({
      mapData: mapData
    })
  }

  render() {
    return (
      <div className="App">
        <BaseMap 
          mapData={this.state.mapData}
        >
        </BaseMap>
      
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