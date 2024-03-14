
// Get DOM elements
const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');

// Temporary array to store transactions
let transactions = [];

// Function to display transactions in the DOM
function displayTransactions() {
    list.innerHTML = '';

    transactions.forEach(transaction => {
        const sign = transaction.amount < 0 ? '-' : '+';
        const item = document.createElement('li');

        item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

        item.innerHTML = `
            ${transaction.text} <span>${sign} &#8377 ${Math.abs(
            transaction.amount
        )}</span> <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
        `;

        list.appendChild(item);
    });
}

// Function to update balance, income, and expense
function updateBalance() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    balance.textContent = `${total}`;
    moneyPlus.textContent = `+${income}`;
    moneyMinus.textContent = `-${expense}`;
}

// Function to add transaction
function addTransaction(e) {
    e.preventDefault();

    if (textInput.value.trim() === '' || amountInput.value.trim() === '') {
        alert('Please add a text and amount');
    } else {
        const transaction = {
            id: generateID(),
            text: textInput.value,
            amount: +amountInput.value
        };

        transactions.push(transaction);

        displayTransactions();
        updateBalance();

        textInput.value = '';
        amountInput.value = '';
    }
}

// Function to generate random ID
function generateID() {
    return Math.floor(Math.random() * 1000000000);
}

// Function to remove transaction
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);

    displayTransactions();
    updateBalance();
}

// Event listeners
form.addEventListener('submit', addTransaction);
