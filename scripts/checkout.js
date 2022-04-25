// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let seats = document.getElementById('number_of_seats');

let walletMoney = JSON.parse(localStorage.getItem('amount')) || 0;

let h1Wallet = document.getElementById('wallet'); 
h1Wallet.textContent = walletMoney; 

let movieContainer = document.getElementById('movie')

let movie = JSON.parse(localStorage.getItem('movie'))

function createDOM(){
    movieContainer.innerHTML = null; 
    let box = document.createElement('div');
    box.setAttribute('id', 'box');
    let img = document.createElement('img'); 
    img.src = movie.Poster;
    let name = document.createElement('h4');
    name.textContent = movie.Title;
    box.append(name, img); 
    movieContainer.append(box)
}
createDOM(); 

document.querySelector('form').addEventListener('submit', function(){
    event.preventDefault();
    let numberOfSeats = Number(seats.value);
    totalAmount = numberOfSeats * 100; 

    if(totalAmount > walletMoney){
        alert('Insufficient Balance !')
    }
    else if(totalAmount <= walletMoney){
        walletMoney -= totalAmount 
        localStorage.setItem('amount', walletMoney)
        h1Wallet.textContent = walletMoney;
        alert('Booking successful!')
    }
})
