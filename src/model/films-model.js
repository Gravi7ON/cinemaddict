import {createFilm} from '../mock/film.js';

export default class FilmsModel {
  #films = Array.from({length: 22}, createFilm);

  get films() {
    return this.#films;
  }
}
