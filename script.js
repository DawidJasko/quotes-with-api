// Get Quote From API
async function getQuote() {
  const proxyUrl =
    'https://cors-anywhere.herokuapp.com/https://phagesdb.org/api/sequenced_phages?page_size=99999999';
  const apiUrl =
    'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    getQuote();
    console.log('whoops, no quote', error);
  }
}

// On Load
getQuote();
