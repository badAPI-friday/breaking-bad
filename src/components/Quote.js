import "./quote.css";
import { createElement } from "../utils/elements";

function Quote({ quote, author }) {
  const quoteText = createElement("p", {
    className: "quote__text",
    innerText: quote,
  });

  const authorName = createElement("p", {
    className: "author__name",
    innerText: author,
  });

  const container = createElement("article", {
    className: "card--quote",
    children: [quoteText, authorName],
  });

  return container;
}

export default Quote;
