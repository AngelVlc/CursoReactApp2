import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: 0,
        note: '',
        createdAt: new moment(),
        calendarFocused: false
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onAmountChange = (e) => {
        // le ha puesto input type number para poder hacer la validacion
        const amount = e.target.value;
        if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onNoteChange = (e) => {
        //const note = e.target.value;
        e.persist();
        this.setState(() => ({ note: e.target.value }));
    }

    onCalendarDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }));
    }

    onCalendarFocusChange = ({focused}) => {       
       this.setState(() => ({ calendarFocused: focused }));
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onCalendarDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => {false}}
                    />

                    <textarea
                        placeholder="Add a note"
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>

                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
};

export default ExpenseForm