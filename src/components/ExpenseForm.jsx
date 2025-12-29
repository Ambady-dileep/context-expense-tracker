import { useContext, useState, useRef } from "react"
import { ExpenseContext } from "../context/ExpenseContext"

function ExpenseForm() {
  const { addExpense } = useContext(ExpenseContext)

  const titleRef = useRef(null)
  const [amount, setAmount] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const title = titleRef.current.value.trim()
    const numAmount = Number(amount)

    const hasLetters = /[a-zA-Z]/.test(title)

    if (!title) {
      setError("Please enter an expense title")
      return
    }
    
    if (!hasLetters) {
      setError("Title must contain at least one letter")
      return
    }
    
    if (!amount) {
      setError("Please enter an amount")
      return
    }
    
    if (numAmount <= 0) {
      setError("Amount must be greater than 0")
      return
    }

    setError("")

    addExpense({
      id: Date.now(),
      title,
      amount: numAmount,
    })

    titleRef.current.value = ""
    setAmount("")

    titleRef.current.focus()
  }

  function handleAmountChange(e) {
    const value = e.target.value
    if (value === "" || Number(value) >= 0) {
      setAmount(value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
      <input
        ref={titleRef}
        type="text"
        placeholder="Expense title"
        onChange={() => setError("")}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleAmountChange}
        min="0"
        step="0.01"
      />
      <button disabled={!amount || Number(amount) <= 0}>Add Expense</button>
    </form>
  )
}

export default ExpenseForm
