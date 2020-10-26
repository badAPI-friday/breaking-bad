import "./header.css";
// import logoSrc from "../assets/bb_logo.png";
import { createElement } from "../utils/elements";

function Header() {
  const logo = createElement("img", {
    src: "https://i.ebayimg.com/images/g/uZgAAOSwj61cavG1/s-l300.jpg",
    alt: "Logo",
  });

  const title = createElement("h1", {
    innerText: "Breaking Bad Quotes Quiz",
  });

  const header = createElement("header", {
    className: "header",
    children: [logo, title],
  });
  return header;
}

export default Header;
