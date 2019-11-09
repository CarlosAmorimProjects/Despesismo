import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === "Data") {
      this.props.sortByDate();
    } else if (e.target.value === "Montante") {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      <div className="content_container">
      <div className= "input-group">
        <div className= "input-group_item">
         <input
          type="text"
          className = "text-input"
          placeholder = "Procurar despesas"
          value={this.props.filters.text}
          onChange={this.onTextChange}
          />
      </div>
      <div className= "input-group_item">
        <select
          className = "select"
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
          >
          <option value="Data">Data</option>
          <option value="Montante">Montante</option>
          </select>
      </div>
      <div className= "input-group_item">
        <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
        />
      </div>
      </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
