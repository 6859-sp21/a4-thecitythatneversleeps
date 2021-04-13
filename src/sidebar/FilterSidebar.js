
//import useState hook to create menu collapse state
import React /*,{ Component, useState }*/ from "react";
import filterData from "./../data/filterOptions";
// import makeAnimated from 'react-select/animated';
import DateSlider from "./../slider/Slider";

//import react pro sidebar components
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import Button from '@material-ui/core/Button';
// import {createMuiTheme, withStyles, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
// import {amber, grey, blue} from '@material-ui/core/colors';

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

//import icons from react icons
import { /*FiHome, FiLogOut,*/ FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";

const lightYellow = '#ffdd99';
const mediumYellow = "#ffc34b";
const mediumGrey = '#2b2d2f';

const h2Style = { color: mediumYellow, height: '20px' }
const h3Style = { color: 'white', height: '10px' }
const tStyle = { color: lightYellow };
const bStyle = { color: 'black' };
const toggleStyle = {paddingTop: '15px', paddingBottom: '15px'}
const sliderStyle = {paddingLeft: '15px', paddingRight: '15px', paddingBottom: '15px'}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const fieldNames = ["borough", "neighborhood", "Incident Zip", "Location Type"];

class FilterSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapse: false,
      filterOptions: filterData.filterOptions,
      selectedFilters: JSON.parse(JSON.stringify(filterData.filterOptions)),
      dateRange: ["1/1/2019 00:00:00 AM", "3/31/20212 11:59:59 PM"],
      mapView: 0,
    }
  }

  componentDidMount() {
    console.log("Filter Options", this.state.filterOptions);
    console.log("Selected Filters", this.state.selectedFilters);
  }

  setMenuCollapse(value) {
    this.setState({
      menuCollapse: value
    })
  }

  menuIconClick = () => {
    this.setMenuCollapse(!this.state.menuCollapse);
  }

  onSubmit = () => {
    this.props.showModal();
    setTimeout(() => {this.props.updateMapData(this.state.dateRange, this.state.selectedFilters); }, 2000);
    
  }

  switchMapView = (event, value) => {
    this.setState({
      mapView: value
    });

    this.props.switchMapView(value);
  }

  prettifyText = (fieldName) => {
    if (fieldName === "borough"){
      return "Borough";
    } else if (fieldName === "neighborhood") {
      return "Neighborhood";
    } else {
      return fieldName;
    }
  }

  handleDateRange = (dateRange) => {
    this.setState({
      dateRange: dateRange
    })
  }

  getSidebarContent() {
    return (
      <div>
        <div style={h2Style} key="map type header">
            Map Type
        </div>
        <div style={toggleStyle}>
          <ToggleButtonGroup
            value={this.state.mapView}
            size="small"
            exclusive
            onChange={this.switchMapView}
            aria-label="map view"
          >
            <ToggleButton value={0} aria-label="heat map" style={{backgroundColor: 'white'}}>
              Heat Map
            </ToggleButton>
            <ToggleButton value={1} aria-label="hexagon map" style={{backgroundColor: 'white'}}>
              Hexagon Map
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div style={h2Style} key="filter header">
            Filters
        </div>
        <br/>
        {fieldNames.map(fieldName => {
          const fieldOptions = this.state.filterOptions[fieldName];
          return(
            <FormControl 
              style={{
              minWidth: 120,
              maxWidth: 300
              }} 
              key = {fieldName+'-form'}
              id={fieldName+'-form'}>
              <div style = {tStyle}>{this.prettifyText(fieldName)}</div>
              <br/>
              <Select
                labelId={"multiple-select-"+fieldName}
                id={fieldName}
                key={fieldName}
                name={fieldName}
                multiple
                value={this.state.selectedFilters[fieldName]}
                onChange={this.handleChangeMultiple}
                input={<Input id={fieldName} key={fieldName+'-input'} />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                style={{
                  backgroundColor: 'white',
                  paddingLeft: '10px', 
                  width:'260px' , 
                  paddingRight: '5px', 
                  borderRadius: '5px',
                  color: mediumGrey,
                }}
              >
                {fieldOptions.map((name) => {
                  return (
                  <MenuItem key={name} value={name} >
                    <Checkbox 
                      checked={this.state.selectedFilters[fieldName].indexOf(name) > -1} 
                      color="default" // changed from mediumGrey
                    />
                    <ListItemText key={name+'-list-item-text'} primary={name} />
                  </MenuItem>
                  )
                })}
              </Select>
              <br/>
            </FormControl>
          );
        })}
        <br/>

        <div style={tStyle}>
            Select Date Range
        </div>
        <div style={sliderStyle}>
          <DateSlider
            updateDateRange={this.handleDateRange}
          />
        </div>
        <div style={{paddingTop:'0px'}}>
          <Button variant="contained" onClick={this.onSubmit} style={{
            color: "default", // changed from mediumGrey
            size: "small",
            backgroundColor: mediumYellow,
          }}>Apply Filters</Button>   
        </div>
      </div>
    );
  }

  handleChangeMultiple = (event) => {
    console.log(event);
    const selectedOptions = event.target.value;
    const fieldName = event.target.name;

    let newSelectedFilters = this.state.selectedFilters;
    newSelectedFilters[fieldName] = selectedOptions.slice();

    this.setState({
      selectedFilters: newSelectedFilters,
    })
  }

  render() {
    return (
      <>
        <div id="header">
            {/* collapsed props to change menu size using menucollapse state */}
          <ProSidebar collapsed={this.state.menuCollapse} style = {bStyle}>
            <SidebarHeader>
              <div  className='logotext'>
                {/* small and big change using menucollapse state */}
                <p>{this.state.menuCollapse ? 'A4' : 'The City that Never Sleeps'}</p>
              </div>
              <div className="closemenu" onClick={this.menuIconClick}>
                  {/* changing menu collapse icon on click */}
                {this.state.menuCollapse ? (
                  <div className="space">
                    <FiArrowRightCircle
                      color = {mediumYellow}
                    />
                  </div>
                ) : (
                  <div className="space">
                    <FiArrowLeftCircle
                      color = {mediumYellow}
                    />
                  </div>
                )}
              </div>
            </SidebarHeader>
            {!this.state.menuCollapse &&(
              <div> 
                <div>
                  <div className="space">
                    <SidebarContent>
                      {this.getSidebarContent()}
                    </SidebarContent>
                  </div>
                  <div className="bottom-space">
                    <SidebarFooter>
                    <div style = {h3Style}>Horne, Phu, Price</div>
                    </SidebarFooter>
                  </div>
                </div>
              </div>
            )}
          </ProSidebar>
        </div>
      </>
    );
  }
}

export default FilterSideBar;