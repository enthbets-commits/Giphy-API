// display gifs on page
// final version with search working

const apiKey = "mwSJtuDbG0UKBadARkMhXt2i7BAPmRts";

const button = document.querySelector("#fetch-gif-btn");
const gifContainer = document.querySelector("#gif-container");
const searchInput = document.querySelector("#search-input");

button.addEventListener("click", async () => {
  const searchTerm = searchInput.value || "funny";

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=8`;

  const response = await fetch(url);
  const data = await response.json();

  gifContainer.innerHTML = "";

  data.data.forEach(gif => {
    gifContainer.innerHTML += `
      <img src="${gif.images.original.url}">
    `;
  });
});