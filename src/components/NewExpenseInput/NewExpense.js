import React from 'react';
import {ExpenseForm} from '../../components';
import './NewExpense.css';
function NewExpense(props) {
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(expenseData);
        props.addExpenseItem(expenseData);
    }
    
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
    //saveExpenseDataHandler is now a props
}

export default NewExpense;