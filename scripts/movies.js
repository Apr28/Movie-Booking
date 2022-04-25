// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// 650bad4f
//http://www.omdbapi.com/?apikey=387ff6b0&s=batman

let walletMoney = JSON.parse(localStorage.getItem("amount")) || 0;

let h1Wallet = document.getElementById("wallet");
h1Wallet.textContent = walletMoney;

let movieContainer = document.getElementById("movies");

let oldDebounce;

let query = document.getElementById("search");

async function searchMovie() {
  try {
    let inputquery = query.value;
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=650bad4f&s=${inputquery}`
    );
    let data = await res.json();
    return data.Search;
  } catch (er) {
    console.log(er);
  }
}

async function main() {
  let movies = await searchMovie();
  if (movies === undefined) {
    return;
  }

  movieDOM(movies);
}

function movieDOM(movieArr) {
  movieContainer.innerHTML = null;
  movieArr.map(function (ele) {
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    let img = document.createElement("img");
    if (ele.Poster !== "N/A") {
      img.src = ele.Poster;
    } else {
      return;
    }
    let name = document.createElement("h4");
    name.textContent = ele.Title;
    let book = document.createElement("button");
    book.textContent = "Book now";
    book.setAttribute("class", "book_now");

    box.append(img, name, book);
    movieContainer.append(box);

    book.onclick = function () {
      storeMovie(ele);
    };
  });
}

function debouncing(func, delay) {
  if (oldDebounce) {
    clearTimeout(oldDebounce);
  }
  setTimeout(function () {
    func();
  }, delay);
}

function storeMovie(obj) {
  localStorage.setItem("movie", JSON.stringify(obj));
  window.location.href = "./checkout.html";
}
