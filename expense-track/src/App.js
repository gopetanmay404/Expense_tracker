// import { useState } from "react";
// import Expenseform from "./Expenseform";
// import ExpenseList from "./ExpenseList";
// import { Header } from './components/Header'; // Header component ko sahi path se import kiya hai.
// function App() {
//   const [expenses, setExpenses] = useState([]);

//   const addExpenseHandler = (expense) => {
//     setExpenses((prev) => [expense, ...prev]);
//   };
//   return (
//     <div>
//       <h1>Expense Tracker</h1>
//       <Header />
//       <Expenseform onAddExpense={addExpenseHandler} />
//       <ExpenseList expenses={expenses} />
//     </div>
//   );
// }
// export default App;




// import { useState } from "react";
// import Expenseform from "./Expenseform";
// import ExpenseList from "./ExpenseList";
// import { Header } from './components/Header';
// import ExpenseChart from "./ExpenseChart"; // Chart component

// function App() {
//   const [expenses, setExpenses] = useState([]);
//   const [showChart, setShowChart] = useState(false);

//   const addExpenseHandler = (expense) => {
//     setExpenses((prev) => [expense, ...prev]);
//   };
//   const addTransactionHandler = (transaction) => {
//   setExpenses((prev) => [transaction, ...prev]);
// };
//   return (
//     <div>
//       <Header />
//       <Expenseform onAddExpense={addExpenseHandler} />
//       <ExpenseList expenses={expenses} />
      
//       <button onClick={() => setShowChart(true)}>Show Chart</button>
      
//       {showChart && <ExpenseChart expenses={expenses} />}
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import ExpenseForm from "./Expenseform";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./Expensechart";
import { Header } from './components/Header';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [showChart, setShowChart] = useState(false);

  const addTransactionHandler = (transaction) => {
    setExpenses((prev) => [transaction, ...prev]);
  };

  // Calculate totals for display
  const totalIncome = expenses
    .filter(t => t.type === "+")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = expenses
    .filter(t => t.type === "-")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div style={{ width: "90%", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <Header />
      <h3>Total Balance: ₹{balance}</h3>

      <ExpenseForm onAddTransaction={addTransactionHandler} />

      <ExpenseList expenses={expenses} />

      <button 
        style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
        onClick={() => setShowChart(true)}
      >
        Show Expense vs Savings Chart
      </button>

      {showChart && <ExpenseChart expenses={expenses} />}
    </div>
  );
}

export default App;
