import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpenseList = (props) => {

    const filteredOutput = props.filteredExpenses.map((expense) => (
        <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
        />
    ));
    const noExpenseOutput = <p className="expenses-list__fallback">No Expenses Found.</p>
    return (
        <ul className='expenses-list'>
            {props.filteredExpenses.length === 0 ? noExpenseOutput : filteredOutput}
        </ul>
    )
}

export default ExpenseList