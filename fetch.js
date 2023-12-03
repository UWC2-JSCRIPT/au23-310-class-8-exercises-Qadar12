// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
API_KEY = "FIW2P8fg2UWNZ235VGwRGx0lmTQkh007";

// q=cars
const url = `${BASE_URL}?q=cars&api-key=${API_KEY}`;

fetch(url)
  .then(function (data) {
    return data.json();
  })
  .then(function (responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById("article-title").innerText = mainHeadline;

    const snippet = responseJson.response.docs[0].snippet;
    document.getElementById("article-snippet").innerText = snippet;

    const link = responseJson.response.docs[0].web_url;
    document.getElementById("article-link").href = link;

    const authors = responseJson.response.docs[0].byline.original;
    document.getElementById("authors").innerText = authors;

    const subject = responseJson.response.docs[0].keywords[0].value;
    document.getElementById("subject").innerText = subject;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById("article-img").src = imgUrl;
    }
  });
