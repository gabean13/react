import './NewExpenses.css';
import ExpenseForm from './ExpenseForm.js';
import ExpenseFilter from './Expensefilter';

const NewExpenses = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    console.log(props.changedYear)

    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
};

export default NewExpenses;