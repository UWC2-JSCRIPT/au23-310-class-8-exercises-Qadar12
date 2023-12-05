const formEl = document.getElementById("best-books-form");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("date");

//Fetch bestselling books for date and add top 5 to page
//2019-01-20/hardcover-fiction.json

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const date = `${yearEl.value}-${monthEl.value}-${dayEl.value}`;
  const list = "hardcover-fiction";

  const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/${date}/${list}.json?api-key=${API_KEY}`;

  fetch(apiUrl)
    .then(function (data) {
      return data.json();
    })
    .then(function (responseJson) {
      console.log(responseJson);

      let bookArray = responseJson.results.books;
      console.log(bookArray);

      // Clear out the old content and 5 books
      const bookContainer = document.getElementById("books-container");
      bookContainer.innerHTML = "";

      let ul = document.createElement("ul");
      let textContent = "Best Selling Hardcover Fiction Books";
      ul.append(textContent);
      bookContainer.appendChild(ul);

      // loop bookArray for top 5
      for (let i = 0; i < 5; i++) {
        let li = document.createElement("li");
        let h2 = document.createElement("h2");
        let address = document.createElement("address");
        let p = document.createElement("p");

        h2.textContent = bookArray[i].title;
        address.textContent = bookArray[i].author;
        p.textContent = bookArray[i].description;

        li.appendChild(h2);
        li.appendChild(address);
        li.appendChild(p);

        ul.appendChild(li);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
