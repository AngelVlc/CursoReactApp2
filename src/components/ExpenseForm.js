import React from 'react';
import { connect } from 'react-redux';

export class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: 0,
        note: ''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onAmountChange = (e) => {
        // le ha puesto input type number para poder hacer la validacion
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onNoteChange = (e) => {
        //const note = e.target.value;
        e.persist();
        this.setState(() => ({ note: e.target.value }));
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