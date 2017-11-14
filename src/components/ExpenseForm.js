import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calFocused: false
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({ description });
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState({ note });
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  }

  onDateChange = (createdAt) => (
    this.setState(() => ({ createdAt }))
  )
  
  onFocusChange = ({ focused }) => (
    this.setState({ calFocused: focused })
  )

  render() {
   return (
    <div>
      <form>
        <input 
          type='text'
          placeholder='Add description'
          value={this.state.description}
          onChange={this.onDescriptionChange}
          autoFocus 
        />
        <input
          type='text'
          placeholder='Enter amount'
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker 
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder='Add a note for your expense (optional)'
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <button>Add Expense</button>
      </form>
    </div>
   );
 }
}

