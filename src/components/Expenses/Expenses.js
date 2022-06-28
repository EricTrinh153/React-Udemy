import React, { useState } from "react";
import { ExpenseItem, Card, ExpensesFilter } from "../../components";
import "./Expenses.css";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filteredExpenses = props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onChangeYear={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.amount}
        />
      ))}
      
    </Card>
  );
}

export default Expenses;
