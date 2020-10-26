import "./card.css";
import { createElement } from "../utils/elements";

function Card(imgSrc, author, action) {
  const authorImage = createElement("img", {
    src: imgSrc,
    alt: `Picture of ${author}`,
  });

  const authorName = createElement("p", {
    innerText: author,
  });

  const authorCard = createElement("button", {
    className: "author-card",
    children: [authorImage, authorName],
    onclick: () => {
      action(author);
    },
  });
  return authorCard;
}

export default Card;
