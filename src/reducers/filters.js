
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export default (state = filtersReducerDefaultState, action) => {
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