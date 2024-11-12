import React, { useContext } from 'react';
import { Globalcontext } from './Context/Globalstate';
import Transaction from './Transaction';

const TrasactionList = () => {
    const { transactions } = useContext(Globalcontext);
   
    return (
        <div>
            <h4>History</h4>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                  <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </div>
    );
}

export default TrasactionList;
