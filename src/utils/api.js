export async function getQuoteRandom() {
  const url = `https://www.breakingbadapi.com/api/quote/random`;
  const response = await fetch(url);
  const quoteRandom = await response.json();
  return quoteRandom;
}
