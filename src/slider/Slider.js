import React from 'react';
// import { withStyles/*, makeStyles*/ } from "@material-ui/core/styles";
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import ValueLabel from "@material-ui/core/Slider/ValueLabel";
// import MapsTransferWithinAStation from 'material-ui/svg-icons/maps/transfer-within-a-station';

const lightYellow = '#ffdd99';
const mediumYellow = "#ffc34b";

const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      valueLabel: { // the little thumb icon pop-up thingy
        left: '0%',
        '& *': {
          background: 'black',
          color: mediumYellow,
        },
      },
      thumb:{
        color: mediumYellow,
      },
      track: {
        color: mediumYellow
      },
      rail: {
        opacity:'90%',
        color: lightYellow
      },
      markLabelActive: { // the text below
        fontSize: "13px",
        color: "white",
      },
      markLabel: {
        fontSize: "13px",
        color: "white",
      },
      mark: { // the tick marks
        color: "white",
        height: "5px",
      }
    }
}
});

const marks = [
  {value: 0, label: "Jan '19"},
  {value: 12, label: "Jan '20"},
  {value: 24, label: "Jan '21"},
  // {value: 26, label: "Mar '21"}, // removed cause too much overlap
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const daysPerMonth = [31, {2019: 27, 2020: 28, 2021: 27}, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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
      <div styles={{width:300}}>
        <br/>
        <ThemeProvider theme={muiTheme}>
          <Slider
            value={this.state.dateRange}
            onChange={this.handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider-custom"
            valueLabelFormat={this.prettifyText}
            marks={marks}
            min={0}
            max={26}
          />
        </ThemeProvider>
      </div>
    );
  } 
}

export default DateSlider;