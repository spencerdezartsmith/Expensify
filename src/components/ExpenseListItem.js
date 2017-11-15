import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ 
  description, 
  amount, 
  createdAt, 
  id, 
  dispatch 
}) => (
  <div>
    <Link to={`/edit/${id}`}><h3>Description: {description}</h3></Link>
    <p>Amount: {amount}</p>
    <p>Created At: {moment(createdAt).format('LL')}</p>
    <button onClick={() => dispatch(removeExpense({ id }))}>Remove Expense</button>
  </div>
);

export default connect()(ExpenseListItem);
