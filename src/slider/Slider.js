import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import {amber} from '@material-ui/core/colors';
// import MapsTransferWithinAStation from 'material-ui/svg-icons/maps/transfer-within-a-station';

const styles = {
  root: {
    width: 300,
  },
  slider: {
    mark: {
      fontColor: "#ffffff",
    },
    color: amber,
  },
  valueLabel: {
    textAlign: 'center',
  }
};

const marks = [
  {value: 0, label: "Jan 2019"},
  {value: 12, label: "Jan 2020"},
  {value: 24, label: "Jan 2021"},
  {value: 26, label: "Mar 2021"},
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const daysPerMonth = [
  31, 
  {2019: 27, 2020: 28, 2021: 27},
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];

class DateSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateRange: [0, 26]
    };
  }

  handleChange = (event, dateRangeValues) => {
    let orderedRange = [Math.min(...dateRangeValues), Math.max(...dateRangeValues)];

    this.props.updateDateRange(this.toStrings(orderedRange));

    this.setState({
      dateRange: orderedRange
    })
  };

  prettifyText = (value) => {
    let year = 19 + Math.floor(value / 12);
    let month = months[value % 12];

    return month + " '" + year.toString();
  }

  toStrings = (dateRangeValues) => {
    const [start, end] = dateRangeValues;

    // handle start date
    let startYear = 2019 + Math.floor(start / 12);
    let startMonth = start % 12 + 1;
    let startDay = 1;
    let startTime = "00:00:00 AM";

    let startDatetime = startMonth.toString() + "/" + startDay.toString() + "/" + startYear.toString() + " " + startTime;

    // handle end date
    let endYear = 2019 + Math.floor(end / 12);
    let endMonth = end % 12 + 1;
    let endDay = (endMonth === 2) ? daysPerMonth[endMonth-1][endYear] : daysPerMonth[endMonth-1];
    let endTime = "11:59:59 PM";

    let endDatetime = endMonth.toString() + "/" + endDay.toString() + "/" + endYear.toString() + " " + endTime;

    return [startDatetime, endDatetime];
  }

  render() {
    return (
      <div className={styles.root}>
        <br/>
        <Slider
          value={this.state.dateRange}
          onChange={this.handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="discrete-slider-custom"
          valueLabelFormat={this.prettifyText}
          marks={marks}
          min={0}
          max={26}
          styles={styles.slider}
        />
      </div>
    );
  } 
}

export default DateSlider;