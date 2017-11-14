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
    calFocused: false,
    error: ''
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
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }
  
  onFocusChange = ({ focused }) => (
    this.setState({ calFocused: focused })
  )

  onFormSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState({ error: 'Please enter a description and an amount' });
    } else {
      this.setState(() => ({
        description: '',
        amount: '',
        error: ''
      }));
    }
  }

  render() {
   return (
    <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.onFormSubmit}>
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

