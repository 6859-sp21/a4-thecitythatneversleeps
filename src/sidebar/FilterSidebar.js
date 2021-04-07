
//import useState hook to create menu collapse state
import React, { Component, useState } from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple, white, grey} from '@material-ui/core/colors';
import amber from '@material-ui/core/colors/amber';


//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";
import { amber500 } from "material-ui/styles/colors";

const lightYellow = '#ffdd99';
const hStyle = { color: '#ffdd99', height: '20px' };
const tStyle = { color: 'white' };
const bStyle = { color: 'black' };
const shade = amber[500];

const theme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: amber500,
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: amber500,
    },
  },
}))(Button);

const animatedComponents = makeAnimated();

const zipcode = "Incident Zip";
const borough = "borough";
const neighborhood = "neighborhood";
const location_type= "Location Type";

class FilterSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapse: false,
      filters: {
        zipcode: [], // needs to contain {value: ... , label: ...}
        borough: [],
        neighborhood: [],
        location_type: [],
      }, 
    }
  }

  MultiSelect(defaultValues, options, labelName){

    let handleChange = (newValue, actionMeta) => {
      this.setState({filters = {
        zipcode: zipcode == labelName? newValue: this.state.filters.zipcode,
        borough: borough == labelName? newValue: this.state.filters.borough,
        neighborhood: neighborhood == labelName? newValue: this.state.filters.neighborhood,
        location_type: location_type == labelName? newValue: this.state.filters.location_type,
        }
      });

      this.props.updateMapData(this.state.filters)
    };
  
    return (
      <Select
        closeMenuOnSelect={false}
        onChange={handleChange}
        components={animatedComponents}
        defaultValue={defaultValues}
        isMulti
        options={options}
      />
    );
  }

  // componentDidMount() {
  //   // Initally all filters are selected
  //   this.setState({
  //     filters: JSON.parse(JSON.stringify(this.props.filterOptions))
  //   })
  // }

  setMenuCollapse(value) {
    this.setState({
      menuCollapse: value
    })
  }

  menuIconClick = () => {
    this.setMenuCollapse(!this.state.menuCollapse);
  }

  onSubmit = () => {
    this.props.updateMapData(this.state.filters);
  }

  render() {
    return (
      <>
        <div id="header">
            {/* collapsed props to change menu size using menucollapse state */}
          <ProSidebar collapsed={this.state.menuCollapse} style = {bStyle}>
            <SidebarHeader>
              <div className="logotext">
                {/* small and big change using menucollapse state */}
                <p>{this.state.menuCollapse ? (
                  <div style={hStyle}>
                    A4
                  </div>
                ) : (
                  <div style={hStyle}>
                    The City that Never Sleeps
                  </div>
                )}</p>
              </div>
              <div className="closemenu" onClick={this.menuIconClick}>
                  {/* changing menu collapse icon on click */}
                {this.state.menuCollapse ? (
                  <div className="space">
                    <FiArrowRightCircle
                      color = {'#ffdd99'}
                    />
                  </div>
                ) : (
                  <div className="space">
                    <FiArrowLeftCircle
                      color = {'#ffdd99'}
                    />
                  </div>
                )}
              </div>
            </SidebarHeader>
            <div> 
              {this.state.menuCollapse ? (
                <div/>
              ) : (
                <div>
                  <div className="space">
                    <SidebarContent>
                      <div style = {tStyle}>Filters</div>
                      {MultiSelect(this.props.filterOptions[zipcode], this.state.filters[zipcode], zipcode)}
                      {MultiSelect(this.props.filterOptions[neighborhood], this.state.filters[neighborhood], neighborhood)}
                      {MultiSelect(this.props.filterOptions[borough], this.state.filters[borough], borough)}
                      {MultiSelect(this.props.filterOptions[location_type], this.state.filters[location_type], location_type)}
                      <ColorButton variant="contained" onClick={() => { alert('clicked') }}>Click me</ColorButton>
                    </SidebarContent>
                  </div>
                  <div className="bottom-space">
                    <SidebarFooter>
                    <div style = {tStyle}>Horne, Phu, Price</div>
                    </SidebarFooter>
                  </div>
                </div>
              )}
            </div>
          </ProSidebar>
        </div>
      </>
    );
  }
}

export default FilterSideBar;