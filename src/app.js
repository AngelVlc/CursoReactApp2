import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0 } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

// expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];

        case 'REMOVE_EXPENSE':
            console.log(action);
            return state.filter((val) => {
                return val.id !== action.id;
            });

        default:
            return state;
    }
};

// filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: '',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addExpense({ description: 'nuevo' }));
const added = store.dispatch(addExpense({ description: 'nuevo2' }));

store.dispatch(removeExpense({ id: added.expense.id }));


const demoState = {
    expenses: [{
        id: 'asdsa',
        description: 'dsaklsdaklsda',
        note: 'asdsdadsa',
        amount: 10067,
        createdAt: 0
    }],
    filters: {
        text: 'sdasdasda',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};


console.log('spread obj', {...demoState, nuevoCampo:  292929});