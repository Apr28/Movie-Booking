// Store the wallet amount to your local storage with key "amount"
let money = document.getElementById('amount'); 
let wallet = document.getElementById('wallet'); 

let h1Wallet = document.getElementById('wallet');
let moneyAvailable = JSON.parse(localStorage.getItem('amount')) || 0; 
h1Wallet.textContent = moneyAvailable; 

function storeMoney(){
    moneyAvailable += Number(money.value);
    

    localStorage.setItem('amount', JSON.stringify(moneyAvailable))

    h1Wallet.textContent = moneyAvailable; 

    money.value = ""
}

