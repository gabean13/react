import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import ExpenseFilter from './components/NewExpenses/Expensefilter';
import NewExpenses from './components/NewExpenses/NewExpenses';

function App() {
  const [year, setYear] = useState();
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),},
    { 
      id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28), },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12), }, //연습용 데이터 
  ];

  const addExpenseHandler = expense => {
    console.log(expense);
  }

  const changeExpenseyearHandler = changeYear => { 
    setYear(changeYear);
  }

  console.log(year);

  return (
    <div>
      <NewExpenses onAddExpense = {addExpenseHandler} changedYear =  {year}/>
      <ExpenseFilter onChangeExpenseYear = {changeExpenseyearHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;

