import React from 'react';
import './App.css';

import data1 from "./data/mapData1";
import data2 from "./data/mapData2";
import data3 from "./data/mapData3";

import BaseMap from "./map/BaseMap";
import FilterSidebar from "./sidebar/FilterSidebar";

const fieldNames = ['Location Type', 'borough', 'neighborhood', 'Incident Zip'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: {},
      filteredData: {},
      layers: [],
      iconData: [],
      startDatetime: 'January 1, 2019, 00:00:00 AM',
      endDatetime: 'March 31, 2021, 11:59:59 PM',
      // add any other default filter parameters here
      openSidebar: false,
      filterOptions: {},
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
    var mapData = {
      ...data1.mapData1,
      ...data2.mapData2,
      ...data3.mapData3,
    };

    return mapData;
  }

  // TODO find all unique values of things to filter by
  getFilterOptions(mapData) {
    var filterOptions = {
      'Location Type': [],
      'borough': [],
      'neighborhood': [],
      'Incident Zip': [],
    }
    for (const key in mapData) {
      let datapoint = mapData[key];

      for (const field of fieldNames) {
        let value = datapoint[field];

        if (filterOptions[field] && !filterOptions[field].includes(value)){
          filterOptions[field].push(value);
        }
      }
    }
    return filterOptions;
  }

  // for filtering data, called by FilterSidebar.js
  // filters = {'fieldName': [all selected options]}
  updateMapData = (filters) => {
    // TODO clip the dataset by the start and end datetimes
    // for every data point
    
    let mapData = this.state.mapData;
    var filteredData = {};

    for (const key in mapData) {
      let datapoint = mapData[key];
      let shouldInclude = true;

      // check all filters
      for (const field in filters) {
        let selectedOptions = filters[field];
        let value = datapoint[field];

        // once it doesn't match one of the filters, drop it
        if (!selectedOptions.includes(value)) {
          shouldInclude = false;
        }
      }
      if (shouldInclude) {
        filteredData[key] = JSON.parse(JSON.stringify(datapoint));
      }
    }

    this.setState({
      filteredData: filteredData
    })
  }
  
  // when the component is first created
  componentDidMount() {
    var mapData = this.getMapData();
    var filterOptions = this.getFilterOptions(mapData);

    this.setState({
      mapData: mapData,
      filterOptions: filterOptions,
      filteredData: JSON.parse(JSON.stringify(mapData))
    })
  }

  render(viewState) {
    return (
      <div>
        <BaseMap 
          mapData={this.state.filteredData}
          viewState={viewState}
        >
        </BaseMap>
        <FilterSidebar 
          updateMapData={this.updateMapData} 
          open={this.state.openSidebar}
          filterOptions={this.state.filterOptions}
        >
        </FilterSidebar>
      </div>
    );
  }
}

export default App;
