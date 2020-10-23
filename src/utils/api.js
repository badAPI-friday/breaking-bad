export async function getQuoteRandom() {
  const url = `https://www.breakingbadapi.com/api/quote/random`;
  const response = await fetch(url);
  const quoteRandom = await response.json();
  const quoteRandomFirst = quoteRandom[0];
  return quoteRandomFirst;
}

// const authorSearch = quoteRandomFirst.author.replace (/\s/g, "+")

export async function getMatchingImg(copyAuthor) {
  const url = `https://www.breakingbadapi.com/api/characters?name=${copyAuthor.author}`;
  const response = await fetch(url);
  const matchingImg = await response.json();
  const matchingImgFirst = matchingImg[0];
  return matchingImgFirst;
}

export async function getCharacterRandom() {
  const url = `https://www.breakingbadapi.com/api/character/random`;
  const response = await fetch(url);
  const characterRandom = await response.json();
  const characterRandomFirst = characterRandom[0];
  return characterRandomFirst;
}
