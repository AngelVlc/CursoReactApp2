import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpanseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
         <h3>{description}</h3>
        </Link>
        <p><strong>Amount: </strong>{numeral(amount / 100).format('$0,0.00')}</p>
        <p><strong>Created At: </strong>{moment(createdAt).format('DD/MM/YYYY')}</p>
      
    </div>
);

export default ExpanseListItem;