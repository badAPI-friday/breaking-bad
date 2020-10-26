import "./quote.css";
import { createElement } from "../utils/elements";

function Quote({ quote }) {
  const quoteText = createElement("blockquote", {
    className: "quote-text",
    innerText: quote,
  });

  const question = createElement("p", {
    className: "question",
    innerText: "Who said that quote?",
  });

  // const authorName = createElement("p", {
  //   innerText: author,
  // });

  const container = createElement("article", {
    children: [question, quoteText],
  });

  return container;
}

export default Quote;
