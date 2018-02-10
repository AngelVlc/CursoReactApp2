import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

const first = store.dispatch(addExpense({ description: 'nuevo', createdAt: 1000, amount: 50 }));
const second = store.dispatch(addExpense({ description: 'nuevo2' }));
store.dispatch(addExpense({ description: 'nuevo3', createdAt: 6000, amount: 90 }));
store.dispatch(addExpense({ description: 'nuevo4', createdAt: 7000, amount: 75 }));
store.dispatch(setTextFilter('nuevo3'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'));



// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// const first = store.dispatch(addExpense({ description: 'nuevo', createdAt: 1000, amount: 50 }));
// const second = store.dispatch(addExpense({ description: 'nuevo2' }));
// store.dispatch(addExpense({ description: 'nuevo3', createdAt: 6000, amount: 90 }));
// store.dispatch(addExpense({ description: 'nuevo4', createdAt: 7000, amount: 75 }));

// store.dispatch(removeExpense({ id: second.expense.id }));

// store.dispatch(editExpense(first.expense.id, { description: 'nuevoRRR' }));

// //store.dispatch(setTextFilter('nuevo3'));

//  store.dispatch(sortByAmount());
// // store.dispatch(sortByDate());

// //store.dispatch(setStartDate(6000));
// //store.dispatch(setStartDate());
// //store.dispatch(setEndDate(120));


