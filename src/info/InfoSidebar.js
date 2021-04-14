
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

const h3Style = { color: 'white', height: '20px' }
const bStyle = { color: 'white' };

class InfoSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapse: true,
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
        This is what we're learning
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

export default InfoSideBar;