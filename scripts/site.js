//required for webpack
import "../styles/main.scss";

// imports to all components
import Example from "./components/example";

class Site {
  constructor() {
    this.parseContent();
  }

  find(selector) {
    return this.root.matches(selector)
      ? [this.root]
      : Array.from(this.root.querySelectorAll(selector));
  }

  parseContent(root = document.body) {
    this.root = root;

    //use classes
    new Example("Bla bla bla");
  }
}

new Site();
