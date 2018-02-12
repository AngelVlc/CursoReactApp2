import React from 'react';
import { Link } from 'react-router-dom';

const ExpanseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
         <h3>{description}</h3>
        </Link>
        <p><strong>Amount: </strong>{amount}</p>
        <p><strong>Created At: </strong>{createdAt}</p>
      
    </div>
);

export default ExpanseListItem;