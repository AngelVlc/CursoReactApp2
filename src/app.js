import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// expenses reducer

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

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];

        case 'REMOVE_EXPENSE':
            return state.filter((val) => {
                return val.id !== action.id;
            });

        case 'EDIT_EXPENSE':
            console.log(action);
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });

        default:
            return state;
    }
};

// filters reducer

const setTextFilter = (newText = '') => ({
    type: 'SET_TEXT_FILTER',
    newText
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: '',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.newText
            };
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

const first = store.dispatch(addExpense({ description: 'nuevo' }));
const second = store.dispatch(addExpense({ description: 'nuevo2' }));

store.dispatch(removeExpense({ id: second.expense.id }));

store.dispatch(editExpense(first.expense.id, { description: 'nuevoRRR' }));

store.dispatch(setTextFilter('rent'));


