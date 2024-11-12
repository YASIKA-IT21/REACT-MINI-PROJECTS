import React,{useContext} from 'react';
import { Globalcontext } from './Context/Globalstate';


const Income = () => {
  const{transactions}=useContext(Globalcontext);
  const amounts=transactions.map(transaction=>transaction.amount); 
  const income = amounts
  .filter(item => item > 0) 
  .reduce((acc, item) => acc + item, 0) 
  .toFixed(2); 


const expense = (amounts
  .filter(item => item < 0) 
  .reduce((acc, item) => acc + item, 0) * -1) 
  .toFixed(2); 
  return (
    <div>
        <div className='Income'>
        <h4>Income</h4>
        <p id="income-plus">{income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="income-minus">{expense}</p>
        </div>
        
      
    </div>
  )
}

export default Income
