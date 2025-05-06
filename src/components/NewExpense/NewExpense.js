import React, { useState } from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsFormVisible(false);
  };

  const startEditingHandler = () => {
    setIsFormVisible(true);
  };

  const cancelEditingHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className='new-expense'>
      {!isFormVisible ? (
        <button onClick={startEditingHandler} className="new-expense__add-button">
          Add New Expense
        </button>
      ) : (
        <ExpenseForm 
          onSaveExpenseData={saveExpenseDataHandler} 
          onCancel={cancelEditingHandler} 
        />
      )}
    </div>
  );
}

export default NewExpense