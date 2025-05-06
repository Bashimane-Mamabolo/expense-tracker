import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
import "./App.css";

// function Child(props){
//   const sentDataToParent =() => {
//     props.onSendData("Hello from child")
//   }
//   return <button onClick={sentDataToParent}>Send Data</button>
// }

function App() {
  const initialExpenses = [
    { id: "e1", title: "Rent", amount: 7000, date: new Date(2025, 3, 4) },
    { id: "e2", title: "Transport", amount: 230, date: new Date(2025, 3, 8) },
    { id: "e3", title: "Cursor", amount: 400, date: new Date(2025, 3, 30) },
  ];
  
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  // const handleChildData = (data) => {
  //   console.log("Data from child:: ", data)
  // }
  // return <Child onSendData={handleChildData} />

  return (
    <div>
      <h1 className="app-title">Expense Tracker</h1>
      <Card className="app-container">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </Card>
    </div>
  );
  //   return React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h2", {}, "Hello Coders!"),
  //     React.createElement(Expenses, { items: expenses })
  //   );
}

export default App;


