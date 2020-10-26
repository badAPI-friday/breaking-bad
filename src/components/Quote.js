import "./quote.css";
import { createElement } from "../utils/elements";

function Quote({ quote, author }) {
  const quoteMarksOpen = createElement("p", {
    className: "quotemarks",
    innerText: "»",
  });

  const quoteText = createElement("p", {
    className: "quote__text",
    innerText: quote,
  });

  const quoteMarksClose = createElement("p", {
    className: "quotemarks",
    innerText: "«",
  });

  const authorName = createElement("p", {
    className: "author__name",
    innerText: author,
  });

  const whoSaidIt = createElement("div", {
    className: "whosaidit",
    innerText: "Who said it?",
  });

  const quoteWithMarks = createElement("div", {
    className: "quote__withmarks",
    children: [quoteMarksOpen, quoteText, quoteMarksClose],
  });

  const container = createElement("article", {
    className: "card--quote",
    children: [quoteWithMarks, authorName, whoSaidIt],
  });

  return container;
}

export default Quote;
