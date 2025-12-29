import { useState } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import TotalAmount from "./components/TotalAmount"
import { addExpense, removeExpense } from "./helpers/expenseHelpers"

function App() {
  const [expenses, setExpenses] = useState([])

  function handleAddExpense(expense) {
    setExpenses((prev) => addExpense(prev,expense))
  }

  function handleDeleteExpense(id) {
    setExpenses((prev) => removeExpense(prev, id))
  }


  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <TotalAmount expenses={expenses} />
      <ExpenseList 
      expenses={expenses}
      onDeleteExpense={handleDeleteExpense}
      />
    </div>
  )
}

export default App
