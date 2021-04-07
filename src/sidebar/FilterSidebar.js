
//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import { green, purple, white, grey} from '@material-ui/core/colors';
import amber from '@material-ui/core/colors/amber';

import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

//import icons from react icons
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

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

const ColorButton = withStyles((theme) => ({
  root: {
    color: amber500,
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: amber500,
    },
  },
}))(Button);

class FilterSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapse: false,
      filters: {
        "Incident Zip": [],
        "borough": [],
        "neighborhood": [],
        "Location Type": [],
      }, 
      filterOptions: {},
    }
  }

  componentDidMount() {
    // Initally all filters are selected
    this.setState({
      filters: JSON.parse(JSON.stringify(this.props.filterOptions)),
      filterOptions: this.props.filterOptions,
    })
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
    this.props.updateMapData(this.state.filters);
  }

  getSidebarContent() {
    return (
      <div>
        <div style = {tStyle}>Filter by Borough</div>
        <br/>
        <ColorButton variant="contained" onClick={() => { alert('clicked') }}>Apply Filters</ColorButton>    
      </div>
    )
  }

  // for single select field
  handleChangeSingle = (event) => {
    let value = event.target.value;
    let fieldName = event.target.id;

    let currFilters = this.state.filters;
    currFilters[fieldName] = [value];
    this.setState({
      filters: currFilters,
    })
  }

  handleChangeMultiple = (event) => {
    const {options} = event.target;
    let fieldName = event.target.id;

    var values = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }

    let currFilters = this.state.filters;
    currFilters[fieldName] = values;

    this.setState({
      filters: currFilters,
    })
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
                    <div style = {tStyle}>Horne, Phu, Price</div>
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