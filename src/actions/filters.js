export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const setStartDate = (newDate = undefined) => ({
    type: 'SET_START_DATE',
    newDate
})

export const setEndDate = (newDate = undefined) => ({
    type: 'SET_END_DATE',
    newDate
})

export const setTextFilter = (newText = '') => ({
    type: 'SET_TEXT_FILTER',
    newText
});
