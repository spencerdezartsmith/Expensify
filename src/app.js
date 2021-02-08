import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({ description: 'Gas Bill', amount: 6400 }));
store.dispatch(addExpense({ description: 'Water Bill', amount: 7000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1250, createdAt: 10 }));

const state = store.getState();
const visibileExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibileExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
