import React from 'react';

const EditExpensePage = (props) => (
    <div>
        Editing {props.match.params.id}
    </div>
);

export default EditExpensePage;