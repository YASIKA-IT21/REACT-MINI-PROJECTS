import React from 'react'
import Balance from './Balance'
import Income from './Income'
import Transaction from './TrasactionList'
import AddTransaction from './AddTransaction'
import { GlobalProvider } from './Context/Globalstate'
const Expense = () => {
  return (
    <GlobalProvider>
    <div>
        <h1>Expense tracker</h1>
        <Balance/>
        <Income/>
        <Transaction/>
        <AddTransaction/>
    </div>
    </GlobalProvider>
  )
}

export default Expense
