import "./app.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Card from "./components/Card";
import {
  getQuoteRandom,
  getMatchingImg,
  getCharacterRandom,
} from "./utils/api";
import { createElement /*styled*/ } from "./utils/elements";

// const PrimaryButton = styled(Button, "bg-primary");

function App() {
  const header = Header();

  const quotesContainer = createElement("section", {
    className: "quotes-container",
  });

  async function loadQuotes(quote, author) {
    const randomquote = await getQuoteRandom(quote, author);
    const quoteElement = Quote({
      quote: randomquote.quote,
      author: randomquote.author,
    });

    const imgElement = await getMatchingImg(randomquote);
    const correctCard = Card(imgElement.img, randomquote.author);

    const randomcharacter1 = await getCharacterRandom();
    let falseCard1 = Card(randomcharacter1.img, randomcharacter1.name);
    if (falseCard1 === correctCard) {
      falseCard1 = Card(randomcharacter1.img, randomcharacter1.name);
    }
    const randomcharacter2 = await getCharacterRandom();
    let falseCard2 = Card(randomcharacter2.img, randomcharacter2.name);
    if (falseCard2 === falseCard1) {
      falseCard2 = Card(randomcharacter2.img, randomcharacter2.name);
    }
    cardsContainer.append(correctCard, falseCard1, falseCard2);
    quotesContainer.append(quoteElement);
  }

  const cardsContainer = createElement("section", {
    className: "cards-container",
  });

  // const clearContainer = () => {
  //   quotesContainer.innerHTML = "";
  // };

  const newQuoteButton = Button({
    innerText: "Load Random Quote",
    onclick: () => {
      quotesContainer.innerHTML = "";
      cardsContainer.innerHTML = "";
      loadQuotes();
    },
  });

  // async function loadQuotes(quote, author) {
  //   const quotes = await getQuoteRandom(quote, author);
  //   const quoteElement = quotes.map((randomquote) =>
  //     Quote({
  //       quote: randomquote.quote,
  //       author: randomquote.author,
  //     })
  //   );
  //   quotesContainer.append(quoteElement);
  // }

  loadQuotes();

  const main = createElement("main", {
    children: [quotesContainer, cardsContainer, newQuoteButton],
  });

  const container = createElement("div", {
    children: [
      header,
      main,
      // Button({ innerText: "Hello" }),
      // PrimaryButton({ innerText: "World" }),
    ],
  });
  return container;
}

export default App;
