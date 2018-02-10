import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpanseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <p><strong>Description: </strong>{description}</p>
        <p><strong>Amount: </strong>{amount}</p>
        <p><strong>Created At: </strong>{createdAt}</p>
        <button onClick={(e) => {dispatch(removeExpense({id}))}}>Remove</button>
    </div>
);

export default connect()(ExpanseListItem);