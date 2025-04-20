import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Rent", amount: 7000, date: new Date(2025, 3, 4) },
    { title: "Transport", amount: 230, date: new Date(2025, 3, 8) },
    { title: "Cursor", amount: 400, date: new Date(2025, 3, 30) },
  ];

  return (
    <div>
      <h2>Hello Coders!</h2>
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
