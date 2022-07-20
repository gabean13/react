import React, {useState} from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm.js';
import ExpenseFilter from '../Expenses/Expensefilter';

const NewExpenses = (props) => {
    const [buttonClicked, setButtonClicked] = useState(false)
  
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    const buttonHandler = () => {
      setButtonClicked(true);
    }

    const quitForm = () => {
      setButtonClicked(false);
    }
    
    return (
      <div className="new-expense">
        {!buttonClicked && (
          <button onClick={buttonHandler}>Add New Expense</button>
        )}
        {buttonClicked && (
          <ExpenseForm
            onAddExpense={quitForm}
            onSaveExpenseData={saveExpenseDataHandler}
          />
        )}
      </div>
    );
};

export default NewExpenses;