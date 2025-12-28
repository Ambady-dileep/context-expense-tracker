import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import TotalAmount from "./components/TotalAmount"

function App() {
  const expenses = [
    {id:1, title: "Groceries", amount: 500},
    {id:2, title: "Rent", amount: 8000},
  ]
  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseList expenses={expenses} />
      <TotalAmount expenses={expenses} />
    </div>
  )
}

export default App
