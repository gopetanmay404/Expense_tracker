import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} />
      ))}
    </ul>
  );
}

export default ExpenseList;
