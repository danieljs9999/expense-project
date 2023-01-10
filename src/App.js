import { useState } from "react";
import "./App.css";
import NevExpenses from "./component/nevExprenses/NevExprenses";
import { Exprenses } from "./component/exprenses/Exprenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Наушник",
      price: 300,
      date: new Date().getDate().toString(),
    },
    {
      title: "Зарядник",
      price: 400,
      date: new Date().getDate().toString(),
    },
  ]);

  const addNevExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <NevExpenses onNewExpenseAdd={addNevExpenseHandler} />
      <Exprenses expenses={expenses} />
    </div>
  );
}

export default App;
