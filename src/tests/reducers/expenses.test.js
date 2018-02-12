import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set up default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });;

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should NOT remove expense by not found id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: -9999 };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const newExpense = { id: 9999 };

    const action = { type: 'ADD_EXPENSE', expense: newExpense };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses.concat(newExpense));
    //expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense', () => {
    const action = { type: 'EDIT_EXPENSE', id: expenses[0].id, updates: { note: 'RRR' } };

    const state = expensesReducer(expenses, action);

    expect(state[0].note).toBe('RRR');
})

test('should NOT edit an expense if not exists', () => {
    const action = { type: 'EDIT_EXPENSE', id: -999, updates: { note: 'RRR' } };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
})