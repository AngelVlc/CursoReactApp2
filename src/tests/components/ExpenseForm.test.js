import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import { on } from 'cluster';
import moment from 'moment';

test('should render expense form correctly with new expense', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form correctly with existing expense', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);

    // para asegurarse de que no tiene error
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    // para asegurarse de que sale el error
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New desc';

    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('description')).toBe(value);
});


test('should set amount if valid input', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSumit prop for valid from submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    expect(wrapper.state('error')).toBe('');
    // no le paso todo el expenses porq el id es autogenerado
    //expect(onSubmitSpy).toHaveBeenCalledWith(expenses[1]);

    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[1].description,
        note: expenses[1].note,
        createdAt: expenses[1].createdAt,
        amount: expenses[1].amount
    });

    /* Otras
    toHaveBeenCalled
    toHaveBeenCalledTimes()
    toHaveBeenCalledWith()
    toHaveBeenCalledLastCalledWith()
    */
});

test('should set new date', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focused', () => {    
    const value = {focused:  true};
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onFocusChange')(value);
    expect(wrapper.state('calendarFocused')).toEqual(value.focused);
});