import React, { useContext } from 'react';
import { Globalcontext } from './Context/Globalstate';

const Transaction = ({ transaction }) => {
    const { dispatch } = useContext(Globalcontext); // Get the dispatch function

    const sign = transaction.amount < 0 ? '-' : '+';

    const handleDelete = () => {
        // Dispatch the DELETE_TRANSACTION action with the transaction id as payload
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: transaction.id
        });
    };

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={handleDelete} className="delete-btn">x</button>
        </li>
    );
};

export default Transaction;
