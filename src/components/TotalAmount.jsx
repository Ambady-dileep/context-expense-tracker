import { calculateTotal } from "../helpers/expenseHelpers"

function TotalAmount({ expenses }) {
  const total = calculateTotal(expenses)
  
  return <h2>Total: ₹{total}</h2>
}

export default TotalAmount
