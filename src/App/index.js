import { Navigation } from "../Navigation";

export class App {
  constructor(container) {
    this.container = container;
  }

  render() {
    new Navigation(this.container).render();
  }
}
