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

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (newDate = undefined) => ({
    type: 'SET_START_DATE',
    newDate
})

const setEndDate = (newDate = undefined) => ({
    type: 'SET_END_DATE',
    newDate
})

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

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
            break;

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
            break;

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.newDate
            }
            break;

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.newDate
            }
            break;

        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
        const textMatch = expense.description.includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if ( sortBy  === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const first = store.dispatch(addExpense({ description: 'nuevo', createdAt: 1000, amount: 50 }));
const second = store.dispatch(addExpense({ description: 'nuevo2' }));
store.dispatch(addExpense({ description: 'nuevo3', createdAt: 6000, amount: 90 }));
store.dispatch(addExpense({ description: 'nuevo4', createdAt: 7000, amount: 75 }));

store.dispatch(removeExpense({ id: second.expense.id }));

store.dispatch(editExpense(first.expense.id, { description: 'nuevoRRR' }));

//store.dispatch(setTextFilter('nuevo3'));

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(6000));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(120));


