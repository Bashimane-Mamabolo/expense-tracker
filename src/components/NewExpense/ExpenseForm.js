import React, {useState} from 'react'
import './ExpenseForm.css'


function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        // console.log(event)
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        // console.log(event)
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        // console.log(event)
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData ={
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        // console.log(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    // track the title as is being typed and comp re-renders and re-evaluate
    // useEffect(
    //     ()=>{
    //         console.log(enteredTitle)
    //     }, [enteredTitle])

  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'  onChange={titleChangeHandler} value={enteredTitle}/>
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' onChange={amountChangeHandler}  value={enteredAmount} min='0.01' step='0.01' />
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler} value={enteredDate} min='2025-02-30' max='2027-12-31' />
            </div>

        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>

  )
}

export default ExpenseForm