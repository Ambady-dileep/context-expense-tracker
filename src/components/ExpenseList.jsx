import ExpenseItem from "./ExpenseItem"

function ExpenseList({ expenses, onDeleteExpense }) {
    return (
        <ul>
            {expenses.map((expense)=>(
                <ExpenseItem
                    key = {expense.id}
                    title = {expense.title}
                    amount = {expense.amount}
                    onDelete = {() => onDeleteExpense(expense.id)}
                />
            ))}
        </ul>
    )
}

export default ExpenseList