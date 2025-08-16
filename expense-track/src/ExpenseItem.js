function ExpenseItem({ title, amount }) {
  return (
    <li>
      {title} - ₹{amount}
    </li>
  );
}

export default ExpenseItem;
