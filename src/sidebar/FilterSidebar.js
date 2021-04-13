
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

//import icons from react icons
import { /*FiHome, FiLogOut,*/ FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";

const lightYellow = '#ffdd99';
const mediumYellow = "#ffc34b";
const mediumGrey = '#2b2d2f';
const hStyle = { position: 'relative', left:'10px', top:'5px', padding:'5px'};
const hTextStyle = { color: 'white', height: '20px'}
const h2Style = { color: mediumYellow, height: '20px' }
const h3Style = { color: 'white', height: '10px' }
const tStyle = { color: lightYellow };
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
      dateRange: ["1/1/2019 00:00:00 AM", "3/31/20212 11:59:59 PM"]
    }
  }

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
    this.props.showModal();
    setTimeout(() => {this.props.updateMapData(this.state.dateRange, this.state.selectedFilters); }, 2000);
    
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
        <div style={h2Style}>
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
                input={<Input id={fieldName} />}
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
                      color={mediumGrey}
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
            Select Date Range
        </div>
        <DateSlider
          updateDateRange={this.handleDateRange}
        />
        <div style={{paddingTop:'10px'}}>
          <Button variant="contained" onClick={this.onSubmit} style={{
            color: mediumGrey,
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