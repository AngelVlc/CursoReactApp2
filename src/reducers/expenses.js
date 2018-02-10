

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

export default expensesReducer;