import { useState } from "react";

function Expenseform({ onAddTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("-"); // default: expense

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newTransaction = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      type
    };

    onAddTransaction(newTransaction);

    // Clear inputs
    setTitle("");
    setAmount("");
    setType("-");
  };

  return (
    <form onSubmit={submitHandler} style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "5px", marginRight: "5px" }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "5px", marginRight: "5px", width: "100px" }}
      />
      <select value={type} onChange={(e) => setType(e.target.value)} style={{ padding: "5px", marginRight: "5px" }}>
        <option value="+">Income (+)</option>
        <option value="-">Expense (-)</option>
      </select>
      <button type="submit" style={{ padding: "5px 10px", cursor: "pointer" }}>Add</button>
    </form>
  );
}

export default Expenseform;
