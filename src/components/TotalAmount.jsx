function TotalAmount({ expenses }) {
  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0)

  return <h2>Total: ₹{total}</h2>
}

export default TotalAmount
