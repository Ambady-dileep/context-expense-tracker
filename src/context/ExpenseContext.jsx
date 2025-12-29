import { createContext, useState, useEffect } from "react"
import { addExpense, removeExpense } from "../helpers/expenseHelpers"

export const ExpenseContext = createContext()

function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem("expenses")
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

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
