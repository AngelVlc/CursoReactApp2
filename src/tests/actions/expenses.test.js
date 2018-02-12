import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'elId'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'elId'
    });
});

test('should setup add expense action object with provided object', () => {
    const expenseData = {
        description: 'desc',
        amount: 15678,
        createdAt: 1000,
        note: 'note'
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default object', () => {
    const expenseData = { };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            createdAt: 0,
            amount: 0,
            id: expect.any(String)
        }
    });
});