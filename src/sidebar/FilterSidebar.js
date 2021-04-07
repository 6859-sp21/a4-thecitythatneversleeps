
//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";

const hStyle = { color: '#ffdd99', height: '20px' };
const tStyle = { color: 'white' };
const bStyle = { color: 'black' };

class FilterSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapse: false,
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