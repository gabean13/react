import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './Expensefilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

function Expenses(props){
  const [filteredYear, setYearChange] = useState();

  const changeExpenseyearHandler = changeYear => { 
    setYearChange(changeYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

    return (
      <div>
        <Card className="expenses">
          <ExpenseFilter
            selected={filteredYear}
            onChangeExpenseYear={changeExpenseyearHandler}
          />
          <ExpenseChart expenses = {filteredExpenses}/>
          <ExpensesList items = {filteredExpenses} />
        </Card>
      </div>
    );
}

export default Expenses;