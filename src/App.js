import React from 'react';
import './App.css';

import filterData from "./data/filterOptions";

import BaseMap from "./map/BaseMap";
import FilterSidebar from "./sidebar/FilterSidebar";
import LoadingModal from "./modal/LoadingModal";

const dataURL = 'https://thecitythatneversleep.s3.us-east-2.amazonaws.com/allMapData.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      mapData: [],
      filteredData: [],
      layers: [],
      iconData: [],
      startDatetime: 'January 1, 2019, 00:00:00 AM',
      endDatetime: 'March 31, 2021, 11:59:59 PM',
      // add any other default filter parameters here
      openSidebar: false,
      filterOptions: filterData.filterOptions,
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

  showModal = () => {
    this.setState({
      show: true,
    })
  }

  // gets map data
  getMapData = () => {
    console.log("fetching data");
    fetch(dataURL)
      .then(response => response.json())
      .then((mapData) => {
        console.log("success!");
        console.log(mapData[0]);
        this.setState({
          show: false,
          mapData: mapData,
          filteredData: JSON.parse(JSON.stringify(mapData))
        })
      })
      .catch((error) => {
        // handle your errors here
        console.error(error);
      })
  }

  updateMapData = (dateRange, selectedFilters) => {
    console.log("date range: ", dateRange);
    console.log("selected Filters: ", selectedFilters);
    
    const startDate = new Date(dateRange[0]);
    const endDate = new Date(dateRange[1]);
    
    let mapData = this.state.mapData;
    var filteredData = [];

    for (const datapoint of mapData) {
      let shouldInclude = true;

      // compare dates
      let thisDate = new Date(datapoint['Created Date']);
      if (thisDate > endDate || thisDate < startDate) {
        shouldInclude = false;
      }

      // check all filters
      for (const field in selectedFilters) {
        let selectedOptions = selectedFilters[field];
        let value = datapoint[field];

        // once it doesn't match one of the filters, drop it
        if (!selectedOptions.includes(value)) {
          shouldInclude = false;
        }
      }

      // add to new filtered dataset
      if (shouldInclude) {
        filteredData.push(JSON.parse(JSON.stringify(datapoint)));
      }
    }

    this.setState({
      show: false,
      filteredData: filteredData
    })
  }

  componentDidMount() {
    this.getMapData();

    this.setState({
      filterOptions: filterData.filterOptions,
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
            showModal={this.showModal}
          >
          </FilterSidebar>
        <LoadingModal show={this.state.show}/>
      </div>
    );
  }
}

export default App;
