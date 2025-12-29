import { createContext, useState } from "react"
import { addExpense, removeExpense } from "../helpers/expenseHelpers"

export const ExpenseContext = createContext()

function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([])

  function handleAddExpense(expense) {
    setExpenses((prev) => addExpense(prev, expense))
  }

  function handleDeleteExpense(id) {
    setExpenses((prev) => removeExpense(prev, id))
  }

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense: handleAddExpense,
        deleteExpense: handleDeleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseProvider
