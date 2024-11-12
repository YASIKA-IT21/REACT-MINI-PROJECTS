import React, { createContext, useReducer } from 'react';
import AppReducer from './Appcontext';

const initialState = {
    transactions: [
        { id: 1, text: 'flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 400 },
        { id: 3, text: 'Book', amount: -20 },
        { id: 4, text: 'Camera', amount: 80 }
    ]
};

export const Globalcontext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <Globalcontext.Provider value={{ transactions: state.transactions, dispatch }}>
            {children}
        </Globalcontext.Provider>
    );
};

export default GlobalProvider;
