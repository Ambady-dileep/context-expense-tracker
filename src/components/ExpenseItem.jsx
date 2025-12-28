function ExpenseItem({title, amount}){
    return (
        <li>
            <span>{title}</span>
            <span>₹{amount}</span>
            <button>Delete</button>
        </li>
    )
}

export default ExpenseItem