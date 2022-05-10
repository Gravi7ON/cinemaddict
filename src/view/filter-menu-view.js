import {createElement} from '../render.js';

const createFilterMenuTemplate = (film) => (
  `<nav class="main-navigation">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${film.filter((item) => item.user_details.watchlist).length}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${film.filter((item) => item.user_details.already_watched).length}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${film.filter((item) => item.user_details.favorite).length}</span></a>
  </nav>`
);

export default class FilterMenuView {
  #element = null;
  #films = null;

  constructor(film) {
    this.#films = film;
  }

  get template() {
    return createFilterMenuTemplate(this.#films);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
