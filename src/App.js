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
import { shuffle } from "./utils/arrays";

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
    const correctCard = Card(imgElement.img, randomquote.author, correctAnswer);

    const randomcharacter1 = await getCharacterRandom();
    let falseCard1 = Card(
      randomcharacter1.img,
      randomcharacter1.name,
      false1Answer
    );
    if (randomcharacter1.name === randomquote.author) {
      await getCharacterRandom();
    }
    const randomcharacter2 = await getCharacterRandom();
    let falseCard2 = Card(
      randomcharacter2.img,
      randomcharacter2.name,
      false2Answer
    );
    if (randomcharacter2.name === randomcharacter1.name) {
      await getCharacterRandom();
    }

    function correctAnswer() {
      correctCard.classList.add("correctanswer");
      alert("Yepp, that's correct!");
    }

    function false1Answer() {
      falseCard1.classList.add("falseanswer");
      alert("Beep, that's wrong!");
    }

    function false2Answer() {
      falseCard2.classList.add("falseanswer");
      alert("Nope, you got the wrong guy!");
    }

    // correctCard.addEventListener(onclick, correctAnswer() => {
    //   correctCard.classList.add("correctanswer");
    //   alert("Correct!");
    // });

    let cardArray = [correctCard, falseCard1, falseCard2];
    shuffle(cardArray);

    cardsContainer.append(...cardArray);
    quotesContainer.append(quoteElement);
  }

  const cardsContainer = createElement("section", {
    className: "cards-container",
  });

  const newQuoteButton = Button({
    innerText: "Get me another quote!",
    onfocus: () => {},
    onclick: () => {
      quotesContainer.innerHTML = "";
      cardsContainer.innerHTML = "";
      loadQuotes();
    },
  });

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
