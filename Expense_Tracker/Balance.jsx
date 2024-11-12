import React,{useContext} from 'react'
import { Globalcontext } from './Context/Globalstate'
const Balance = () => {
    const {transactions}=useContext(Globalcontext);
    const amounts=transactions.map(transaction=>transaction.amount); 
    const total=amounts.reduce((acc,item)=>(acc=acc+=item),0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h4 id='balance '>${total}</h4>
    </div>
  )
}

export default Balance
