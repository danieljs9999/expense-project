import React from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";
import "./Exprenses.css";

export const Exprenses = ({ expenses }) => {
  return (
    <ul className="divExp">
      {expenses.map((elem) => {
        return (
          <ExpenseItem
            key={elem.title}
            title={elem.title}
            price={elem.price + " сом"}
            date={elem.date}
          />
        );
      })}
    </ul>
  );
};
