import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>Some text from the dashboard</div>
);

const AddExpensePage = () => (
  <div>Some text from the add expense page</div>
);

const EditExpensePage = () => (
  <div>Some text from the edit expense page</div>
);

const HelpPage = () => (
  <div>Some text from the help page</div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={ExpenseDashboardPage} exact={true} />
      <Route path='/create' component={AddExpensePage} />
      <Route path='/edit' component={EditExpensePage} />
      <Route path='/help' component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
