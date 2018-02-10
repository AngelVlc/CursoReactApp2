import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map(item => {
            return  <ExpenseListItem key={item.id} {...item} />
          })}
    </div>
);

const mapStateToProps = (state) => {
    //defino la info del store a la q tiene q acceder mi componente
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

