import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


// function Child(props){
//   const sentDataToParent =() => {
//     props.onSendData("Hello from child")
//   }
//   return <button onClick={sentDataToParent}>Send Data</button>
// }

function App() {
  const expenses = [
    { title: "Rent", amount: 7000, date: new Date(2025, 3, 4) },
    { title: "Transport", amount: 230, date: new Date(2025, 3, 8) },
    { title: "Cursor", amount: 400, date: new Date(2025, 3, 30) },
  ];
  const addExpenseHandler = (expense) => {
    console.log("In APP.js")
    console.log(expense)
  }

  // const handleChildData = (data) => {
  //   console.log("Data from child:: ", data)
  // }
  // return <Child onSendData={handleChildData} />

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
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


