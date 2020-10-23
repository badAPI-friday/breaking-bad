import "./card.css";
import { createElement } from "../utils/elements";

function Card(imgSrc, author) {
  const authorImage = createElement("img", {
    src: imgSrc,
    alt: `Picture of ${author}`,
  });

  const authorName = createElement("p", {
    innerText: author,
  });

  const authorCard = createElement("div", {
    className: "author-card",
    children: [authorImage, authorName],
  });
  return authorCard;
}

export default Card;
