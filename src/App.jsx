import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import TotalAmount from "./components/TotalAmount"

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm />
      <TotalAmount />
      <ExpenseList />
    </div>
  )
}

export default App
