import { useContext } from "react"
import { ExpenseContext } from "../context/ExpenseContext"
import { calculateTotal } from "../helpers/expenseHelpers"
import { formatCurrency } from "../helpers/formatCurrency"

function TotalAmount() {
  const { expenses } = useContext(ExpenseContext)
  const total = calculateTotal(expenses)

  return <h2>Total: ₹{formatCurrency(total)}</h2>
}

export default TotalAmount
