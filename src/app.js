import { createStore, combineReducers } from 'redux';


// expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
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

console.log(store.getState());

// const demoState = {
//     expenses: [{
//         id: 'asdsa',
//         description: 'dsaklsdaklsda',
//         note: 'asdsdadsa',
//         amount: 10067,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'sdasdasda',
//         sortBy: 'amount', // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };