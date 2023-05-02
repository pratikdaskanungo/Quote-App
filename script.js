const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

//to fetch data from the above url//

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();

   //to display in html//
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getquote(api_url);

//for copy quote//
let btn = document.querySelector('#btn');

   
   const copyContent = async () => {
    try{
        await navigator.clipboard.writeText(quote.innerHTML);
        alert("content copied");
    }catch(err){
        alert("failed to copy");
    }
   };

   