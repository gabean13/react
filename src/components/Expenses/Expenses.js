import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './Expensefilter';

function Expenses(props){
  const [filteredYear, setYearChange] = useState();

  const changeExpenseyearHandler = changeYear => { 
    setYearChange(changeYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expenseContent = <p>No expenses found</p>

  if(filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />));
  }

    return (
      <div>
        <Card className="expenses">
          <ExpenseFilter
            selected={filteredYear}
            onChangeExpenseYear={changeExpenseyearHandler}
          />
          {expenseContent}
        </Card>
      </div>
    );
}

export default Expenses;