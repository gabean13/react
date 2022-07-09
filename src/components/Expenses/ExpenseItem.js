import React, {useState} from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card.js';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
  const [title, setTitle] = useState(props.title);
  
    return (
      <Card className="expense-item">
        <div>
          <ExpenseDate date = {props.date} />
        </div>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    );
}

export default ExpenseItem; 