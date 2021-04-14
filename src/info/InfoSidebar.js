
//import useState hook to create menu collapse state
import React /*,{ Component, useState }*/ from "react";

//import react pro sidebar components
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./infosidebar.css";

const lightYellow = '#ffdd99';
const mediumYellow = "#ffc34b";

const h3Style = { color: mediumYellow, height: '20px' }
const bStyle = { color: 'white' };

class InfoSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapse: true,
      urlOpenData: 'https://data.cityofnewyork.us/Social-Services/311-Noise-Complaints/p5f6-bkga',
      urlGithub: 'https://github.com/6859-sp21/a4-thecitythatneversleeps',
    }
  }

  setMenuCollapse(value) {
    this.setState({
      menuCollapse: value
    })
  }

  menuIconClick = () => {
    this.setMenuCollapse(!this.state.menuCollapse);
  }

  getSidebarContent() {
    return (
      <div>
        <p>
        <a>
        The data used in this visualization was gathered from NYC Open Data, a free public data project published 
        by New York City agencies and other partners. Here we have created a compilation of noise complaints in 
        New York City, and you can look at the data yourself 
        </a>
        <a> </a>
        <a href={this.state.urlOpenData} style={{color:lightYellow}} rel="noreferrer"> here</a>
        <a>.</a>
        </p>
        <p>
          On the left, you can toggle instantly between a heat map and hexagon map. You can also filter
          the data via dropdowns, and select the range of time over which you want to observe aggregate trends. Press the "apply filters" button to see the map update. You can pan, zoom, and adjust the angle the map using normal 3D controls. 
        </p>
        <p>
          <a>For more information on this project, including how we processed the dataset, check out our Github repository at</a>
          <a> </a>
          <a href={this.state.urlGithub} style={{color:lightYellow}} rel="noreferrer">this link</a>
          <a>.</a>
        </p>
      </div>
    );
  }

  render() {
    return (
      <>
        <div id="info-header" style={bStyle}>
            {/* collapsed props to change menu size using menucollapse state */}
          <ProSidebar className="pro-sidebar" collapsed={this.state.menuCollapse} style = {bStyle}>
            <SidebarHeader className="pro-sidebar-header">
              <div onClick={this.menuIconClick}>
                    {/* changing menu collapse icon on click */}
                  {this.state.menuCollapse ? (
                    <div className="space">
                      <FiArrowDownCircle
                        color = {mediumYellow}
                      />
                    </div>
                  ) : (
                    <div className="space">
                      <FiArrowUpCircle
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
                    <div style = {h3Style}>Amanda Horne, Melody Phu, Magdalena Price</div>
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

export default InfoSideBar;