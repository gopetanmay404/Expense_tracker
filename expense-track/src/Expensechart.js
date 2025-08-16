import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Expensechart({ expenses }) {
  const totalIncome = expenses
    .filter(t => t.type === "+")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = expenses
    .filter(t => t.type === "-")
    .reduce((sum, t) => sum + t.amount, 0);

  const savings = totalIncome - totalExpense;

  const data = {
    labels: ["Expense", "Savings"],
    datasets: [
      {
        data: [totalExpense, savings],
        backgroundColor: ["#FF6384", "#36A2EB"]
      }
    ]
  };

  return (
    <div style={{ width: "80%", maxWidth: "500px", margin: "20px auto", height: "300px" }}>
      <Pie data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
}

export default Expensechart;
