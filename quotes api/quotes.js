const btn = document.querySelector(".inspire");
const quote = document.querySelector(".quote")
btn.addEventListener("click", getQuote);

function getQuote(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        let n = Math.floor(Math.random() * data.length) + 1
        quote.innerHTML=`<h3>${data[n].text}</h3><span>${data[n].author}</span>`
    });
}