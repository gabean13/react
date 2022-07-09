import React, { useState } from "react";

const ExpenseFilter = (props) => {
  const [changedFilteryear, setFilterYear] = useState("");

  const yearchangeHandler = (event) => {
    setFilterYear(event.target.value);

    props.onChangeExpenseYear(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__yearselection">
        <select onChange={yearchangeHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className="expense-filter__month"></div>
    </div>
  );
};

export default ExpenseFilter;
