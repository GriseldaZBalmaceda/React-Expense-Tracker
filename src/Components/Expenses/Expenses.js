import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from '../UI/ExpenseFilter';
import ExpenseList from './ExpensesList';
import ExpenseChart from './ExpensesChart';
import './Expenses.css'
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = selectedyear => {
        setFilteredYear(selectedyear);
    }
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() === Number(filteredYear))

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangedFilter={filterChangeHandler} />
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpenseList filteredExpenses={filteredExpenses} />
        </Card>
        </div>

    )
}

export default Expenses;