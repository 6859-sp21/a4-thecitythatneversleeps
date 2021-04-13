import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const hStyle = { color: '#ffdd99', height: '20px', padding:'10px' };

const AirbnbSlider = withStyles({
  root: {
    color: '#ffc34b',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '2px solid #ffc34b',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: '#ffc34b',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

class DateSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    }
  }
  
  getThumbComponent(props) {
    return (
      <span {...props}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </span>
    );
  }

  render() {
    return (
      <div style={{zIndex: 1}}>
        <AirbnbSlider
          ThumbComponent={this.getThumbComponent}
          getAriaLabel={(index) => (index === 0 ? 'Start Month' : 'End Month')}
          defaultValue={[20, 40]}
        />
      </div>
    );
  }
}

export default DateSlider;