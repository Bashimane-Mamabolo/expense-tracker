import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";


function ExpenseItem(props) {
  
  // let title = props.title;
  const [title, setTitle] = useState(props.title)
  console.log("Expenseitem evaluated by react. Title!!!")

  function clickHandler(){
    // title = 'Updated!'
    setTitle("Updated!")
    console.log(title)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">R{props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title!</button>
    </Card>
  );
}

export default ExpenseItem;
