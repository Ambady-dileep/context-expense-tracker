function ExpenseItem({title, amount, onDelete }){
    return (
        <li>
            <span>{title}</span>
            <span>₹{amount}</span>
            <button onClick={onDelete}>Delete</button>
        </li>
    )
}

export default ExpenseItem