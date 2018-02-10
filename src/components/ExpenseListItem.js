import React from 'react';

const ExpanseListItem = ({description, amount, createdAt}) => (
    <div>
        <p><strong>Description: </strong>{description}</p>
        <p><strong>Amount: </strong>{amount}</p>
        <p><strong>Created At: </strong>{createdAt}</p>
    </div>
);

export default ExpanseListItem;