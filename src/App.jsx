import { useState } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import TotalAmount from "./components/TotalAmount"

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Groceries", amount: 500 },
    { id: 2, title: "Rent", amount: 8000 },
  ])

  function addExpense(expense) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense]
    })
  }

  function deleteExpense(){
    setExpenses((prevExpenses)=>{
      prevExpenses.filter((expense)=> expense.id !== id)
    })
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <TotalAmount expenses={expenses} />
      <ExpenseList 
      expenses={expenses}
      onDeleteExpense={deleteExpense}
      />
    </div>
  )
}

export default App
