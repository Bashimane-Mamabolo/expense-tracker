import React, {useState} from "react"
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2024')

  let filterInfoText = '2023, 2025 & 2026'

  if (filteredYear === '2023'){
    filterInfoText = '2024, 2025 & 2026'
  } else if (filteredYear === '2025'){
    filterInfoText = '2023, 2024 & 2026'
  } else{
    filterInfoText = '2023, 2024 & 2025'
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  return (
    <Card className="expenses">

      < ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <p> Data for years {filterInfoText} is hidden.</p>
      
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
    </Card>
  );
}

export default Expenses;
