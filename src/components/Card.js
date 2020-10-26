import "./card.css";
import { createElement } from "../utils/elements";

function Card(imgSrc, author, onClick) {
  const authorImage = createElement("img", {
    src: imgSrc,
    alt: `Picture of ${author}`,
  });

  const authorName = createElement("p", {
    innerText: author,
  });

  const authorCard = createElement("button", {
    className: "author-card",
    onclick: onClick,
    children: [authorImage, authorName],
  });

  // const buttonIsCard = createElement("button", {
  //   className: "buttoniscard",
  //   onclick: () => {
  //     if () {
  //       alert("That's correct");
  //     } else {
  //       alert("That's wrong");
  //     }
  //   },
  //   children: [authorCard],
  // });

  return authorCard;
}

export default Card;
