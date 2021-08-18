import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const onSaveExpenseData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    } 
    const startEditing = () => {
        setIsEditing(true);
    }
    const stopEditing = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            { isEditing ? <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={stopEditing} /> : <button onClick={startEditing}>Add Expense</button> }
        </div>
    )
}

export default NewExpense