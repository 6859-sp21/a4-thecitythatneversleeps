
//import useState hook to create menu collapse state
import React, { Component, useState } from "react";
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
import {createMuiTheme, withStyles, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import {amber, grey, blue} from '@material-ui/core/colors';

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

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

const styles = {
  formControl: {
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
};

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
    }
  }

  // MultiSelect = (defaultValues, options, labelName) => {

  //   let handleChange = (newValue, actionMeta) => {
  //     this.setState({filters: {
  //       zipcode: zipcode == labelName? newValue: this.state.filters.zipcode,
  //       borough: borough == labelName? newValue: this.state.filters.borough,
  //       neighborhood: neighborhood == labelName? newValue: this.state.filters.neighborhood,
  //       location_type: location_type == labelName? newValue: this.state.filters.location_type,
  //       }
  //     });

  //     // this.props.updateMapData(this.state.filters)
  //   };
  
  //   return (
  //     <div className="tinyspace">
  //       <Select
  //         closeMenuOnSelect={false}
  //         styles={customStyles}
  //         onChange={handleChange}
  //         // components={animatedComponents}
  //         defaultValue={defaultValues}
  //         isMulti
  //         options={options}
  //       />
  //     </div>
  //   );
  // }

  // TODO: add slider object here to make our lives easier
  // update the state (add start and end date date times??? or just strings?)

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
    // TODO: we also want to update the date range
    this.props.showModal();
    setTimeout(() => {this.props.updateMapData(this.state.selectedFilters); }, 2000);
    
  }

  prettifyText = (fieldName) => {
    if (fieldName == "borough"){
      return "Borough";
    } else if (fieldName == "neighborhood") {
      return "Neighborhood";
    } else {
      return fieldName;
    }
  }

  getSidebarContent() {
    return (
      <div>
        <div style={hStyle}>
            Filters
        </div>
        <br/>
        {fieldNames.map(fieldName => {
          const fieldOptions = this.state.filterOptions[fieldName];
          return(
            <FormControl className={styles.formControl}>
              <div style = {tStyle}>{this.prettifyText(fieldName)}</div>
              <br/>
              <Select
                labelId={"multiple-select-"+fieldName}
                id={fieldName}
                name={fieldName}
                multiple
                value={this.state.selectedFilters[fieldName]}
                onChange={this.handleChangeMultiple}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => selected.join(', ').slice(0, 27)+"..."}
                MenuProps={MenuProps}
                style={{backgroundColor: "#f5f5f5"}}
              >
                {fieldOptions.map((name) => {
                  return (
                  <MenuItem key={name} value={name} >
                    <Checkbox 
                      checked={this.state.selectedFilters[fieldName].indexOf(name) > -1} 
                      color={"fff176"}
                    />
                    <ListItemText primary={name} />
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
            Date Range
        </div>
        <DateSlider/>
        <div style={{paddingTop:'10px'}}>
          <Button variant="contained" onClick={this.onSubmit}>Apply Filters</Button>   
        </div>
      </div>
    );
  }

  handleChangeMultiple = (event) => {
    console.log(event);
    const selectedOptions = event.target.value;
    const fieldName = event.target.name;

    console.log("all options: ", selectedOptions);
    console.log("field name:", fieldName);

    let newSelectedFilters = this.state.selectedFilters;
    newSelectedFilters[fieldName] = selectedOptions.slice();

    this.setState({
      selectedFilters: newSelectedFilters,
    })

    console.log(this.state.selectedFilters);
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