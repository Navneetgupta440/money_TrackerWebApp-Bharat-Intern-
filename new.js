document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const transactionsList = document.getElementById('transactions');
    const totalIncomeElem = document.getElementById('total-income');
    const totalExpensesElem = document.getElementById('total-expenses');
    const balanceElem = document.getElementById('balance');
    
    let transactions = [];
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const type = document.getElementById('type').value;
        
        const transaction = {
            description,
            amount,
            type
        };
        
        transactions.push(transaction);
        displayTransactions();
        updateSummary();
        
        form.reset();
    });
    
    function displayTransactions() {
        transactionsList.innerHTML = '';
        transactions.forEach((transaction, index) => {
            const li = document.createElement('li');
            li.textContent = `${transaction.description}: $${transaction.amount} (${transaction.type})`;
            transactionsList.appendChild(li);
        });
    }
    
    function updateSummary() {
        let totalIncome = 0;
        let totalExpenses = 0;
        
        transactions.forEach(transaction => {
            if (transaction.type === 'income') {
                totalIncome += transaction.amount;
            } else if (transaction.type === 'expense') {
                totalExpenses += transaction.amount;
            }
        });
        
        const balance = totalIncome - totalExpenses;
        
        totalIncomeElem.textContent = `$${totalIncome.toFixed(2)}`;
        totalExpensesElem.textContent = `$${totalExpenses.toFixed(2)}`;
        balanceElem.textContent = `$${balance.toFixed(2)}`;
    }
});
