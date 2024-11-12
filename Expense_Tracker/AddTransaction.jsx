import React, { useState, useContext } from 'react';
import { Globalcontext } from './Context/Globalstate';

const AddTransactionForm = () => {
    const { dispatch } = useContext(Globalcontext); // Get dispatch function from context

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Make sure both text and amount are provided
        if (text.trim() === '' || amount.trim() === '') {
            alert('Please enter both text and amount');
            return;
        }

        // Dispatch ADD_TRANSACTION action
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000), // Generate a unique ID (you can improve this logic)
            text,
            amount: +amount, // Convert amount to number (e.g., 400 or -400)
        };

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: newTransaction, // Add the new transaction to the state
        });

        // Clear input fields
        setText('');
        setAmount('');
    };

    return (
        <div>
            <h4>Add new transaction</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text"
                    />
                </div>
                <div>
                    <label>Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                    />
                </div>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransactionForm;
