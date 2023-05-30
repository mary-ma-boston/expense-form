import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpenses = (props) => {

    const [addExpense, setAddExpense] = useState(false);

    const handleAddExpense = () => {
        setAddExpense(!addExpense);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    }

    const stopEditingHandler =() => {
        setAddExpense(false);
    }


    return (
            <div className='new-expense'>
                {(!addExpense) && (<button onClick={handleAddExpense}>Add new expense</button>)}
                { addExpense && (<ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler}/>)}
             </div>
     
    )
}

export default NewExpenses