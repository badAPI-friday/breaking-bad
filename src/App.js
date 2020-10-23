import "./app.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Quote from "./components/Quote";
import { getQuoteRandom } from "./utils/api";
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
    quotesContainer.append(quoteElement);
  }

  // const clearContainer = () => {
  //   quotesContainer.innerHTML = "";
  // };

  const newQuoteButton = Button({
    innerText: "Load Random Quote",
    onclick: () => {
      quotesContainer.innerHTML = "";
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
    children: [quotesContainer, newQuoteButton],
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
