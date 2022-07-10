import './NewExpenses.css';
import ExpenseForm from './ExpenseForm.js';
import ExpenseFilter from '../Expenses/Expensefilter';

const NewExpenses = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
};

export default NewExpenses;