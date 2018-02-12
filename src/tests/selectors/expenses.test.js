import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [
    {
        id: '1',
        description: 'desc1 RR',
        note: 'note1',
        amount: 500,
        createdAt: moment(0).add(4, 'days').valueOf()
    },
    {
        id: '2',
        description: 'desc2 RR',
        note: 'note2',
        amount: 100,
        createdAt: 0
    },
    {
        id: '3',
        description: 'desc3',
        note: 'note3',
        amount: 300,
        createdAt: moment(0).add(-4, 'days').valueOf()
    },
]

test('shoult filter by text value', () => {
    const filters = {
        text: 'RR',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2]]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
});

