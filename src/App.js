import React, { useState } from "react";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (!description || !amount) return;
    setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
    setDescription("");
    setAmount("");
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="container">
      <h1>Expense Tracker 💸</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Expense description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add</button>
      </div>
      <h2>Total: ₹{totalExpense}</h2>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>
            {exp.description} - ₹{exp.amount}{" "}
            <button onClick={() => deleteExpense(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
