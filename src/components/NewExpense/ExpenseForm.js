import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpensesForm = (props) => {
  // NOTE bt default
  // whenever tou listen to the change event for an input
  // if you read the value of that input element
  // it'll always be a string even if is store as a number
  // it'll ba a number as a string
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // setUserInput({ ...userInput, enteredTitle: event.target.value })

    // NOTE - 55  React schedules state updates
    // yet, it doesn't perform them instantly
    // theoretically, if you schedule a lot of state update at the same time, you could be depending on an outdated or incorrect state snapshot

    // NOTE the function pass to setUserInput
    // setUserInput((prevState) => {
    // will be automatically executed by React
    // React would guarantee that the state snapshot is the latest state
    //   return { ...prevState, enteredTitle: event.target.value }
    // })
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput({ ...userInput, enteredAmount: event.target.value })
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput({ ...userInput, enteredDate: event.target.value })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpensesForm
