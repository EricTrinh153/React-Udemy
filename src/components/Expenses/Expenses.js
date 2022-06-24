import React, { useState } from "react";
import { ExpenseItem, Card, ExpensesFilter } from "../../components";
import "./Expenses.css";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onChangeYear={filterChangeHandler}
      />
      {props.expenses.map((expense)=>(
        <ExpenseItem title={expense.title} date={expense.date} price={expense.amount} />
      )
)}
    </Card>
  );
}

export default Expenses;
