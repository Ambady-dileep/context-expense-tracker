import { useContext, useState } from "react"
import { ExpenseContext } from "../context/ExpenseContext"

function ExpenseForm() {
    const { addExpense } = useContext(ExpenseContext)
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")

    function handleSubmit(e){
        e.preventDefault()

        if (!title || !amount) return 

        addExpense({
            id: Date.now(),
            title,
            amount:Number(amount),
        })

        setTitle("")
        setAmount("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Expense title"
            />
            <input 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Amount"
            />
            <button>Add Expense</button>
        </form>
    )
}

export default ExpenseForm