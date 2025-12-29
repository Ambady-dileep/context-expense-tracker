import { useContext } from "react"
import { ExpenseContext } from "../context/ExpenseContext"
import ExpenseItem from "./ExpenseItem"

function ExpenseList() {
  const { expenses, deleteExpense } = useContext(ExpenseContext)

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          onDelete={() => deleteExpense(expense.id)}
        />
      ))}
    </ul>
  )
}

export default ExpenseList
