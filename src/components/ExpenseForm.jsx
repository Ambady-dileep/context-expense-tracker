import { useContext, useState, useRef } from "react"
import { ExpenseContext } from "../context/ExpenseContext"

function ExpenseForm() {
  const { addExpense } = useContext(ExpenseContext)

  const titleRef = useRef(null)
  const [amount, setAmount] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const title = titleRef.current.value

    if (!title || !amount) return

    addExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
    })

    titleRef.current.value = ""
    setAmount("")

    titleRef.current.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={titleRef}
        type="text"
        placeholder="Expense title"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button disabled={!amount}>Add Expense</button>
    </form>
  )
}

export default ExpenseForm
