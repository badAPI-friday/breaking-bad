import "./card.css";
import { createElement } from "../utils/elements";

function Card(author) {
  const authorImage = createElement("img", {
    src:
      "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    alt: "Picture of ...",
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
