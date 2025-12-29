import { useContext } from "react"
import { ExpenseContext } from "../context/ExpenseContext"
import { calculateTotal } from "../helpers/expenseHelpers"

function TotalAmount() {
  const { expenses } = useContext(ExpenseContext)
  const total = calculateTotal(expenses)

  return <h2>Total: ₹{total}</h2>
}

export default TotalAmount
