export function calculateTotal(expenses){
    return expenses.reduce((sum, expense) => {
        return sum + expense.amount
    },0)
}

export function addExpense(expenses, newExpense) {
    return [...expenses, newExpense]
}

export function removeExpense(expenses,id){
    return expenses.filter((expense)=> expense.id !== id)
}