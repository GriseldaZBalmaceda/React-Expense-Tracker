import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     amount: '',
    //     enteredDate: ''
    // });
    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // });
    };
    const amountChangedHandler = (event) => {
        setAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // });
    };
    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState)=> {
        //     return {
        //         ...prevState,
        //         enteredDate: new Date(event.target.value)
        //     }
        // });
    };
    const stopEditingHandler = () => {
        props.onCancel()
    }
    const sumbitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount: +amount,
            date:new Date(enteredDate)
        };
        setEnteredTitle('');
        setAmount('');
        setEnteredDate('');
        // setUserInput(() => {
        //     return {
        //         enteredTitle: "",
        //         amount:"",
        //         enteredDate: ""
        //     }
        // });
        props.onSaveExpenseData(expenseData);

    };

    return (
        <form onSubmit={sumbitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangedHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={stopEditingHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;

