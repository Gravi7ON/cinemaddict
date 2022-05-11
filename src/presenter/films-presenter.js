import SortMenuView from '../view/sort-menu-view.js';
import FilmsBoardView from '../view/films-board-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsTopRatedListView from '../view/films-top-rated-list-view.js';
import FilmsMostCommentedListView from '../view/films-most-commented-list-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import MovieCardView from '../view/movie-card-view';
import ButtonShowMoreView from '../view/button-show-more-view.js';
import PopupView from '../view/popup-view.js';
import FilmsListEmptyView from '../view/films-list-empty-view.js';
import UserProfileView from '../view/user-profile-view.js';
import FilterMenuView from '../view/filter-menu-view.js';
import FilmAmountView from '../view/film-amount-view.js';
import {RenderPosition, render} from '../render.js';

const FILM_COUNT_PER_STEP = 5;
const FILMS_RATED_LIST = 'rated';
const FILMS_COMMENTED_LIST = 'commented';

export default class FilmsPresenter {
  #boardContainer = null;
  #filmsModel = null;
  #filmsContainer = null;
  #filmsTopRatedContainer = null;
  #filmsMostCommentedContainer = null;
  #filmsCards = [];
  #renderedFilmCount = FILM_COUNT_PER_STEP;

  constructor(boardContainer, filmsModel) {
    this.#boardContainer = boardContainer;
    this.#filmsModel = filmsModel;
  }

  init() {
    this.#filmsCards = [...this.#filmsModel.films];
    this.#renderFilmLists();
  }

  #bodyContentElement = document.body;
  #userProfileElement = document.querySelector('.header');
  #footerContentElement  = document.querySelector('.footer');
  #filmAmountElement = document.querySelector('.footer__statistics');

  #filmsBoard = new FilmsBoardView();
  #filmsList = new FilmsListView();
  #filmsTopRatedList = new FilmsTopRatedListView();
  #filmsMostCommentedList = new FilmsMostCommentedListView();
  #showMoreButtonComponent = new ButtonShowMoreView();

  #renderFilms = (card, typeList) => {
    const cardComponent = new MovieCardView(card);
    const popupComponent = new PopupView(card);

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        this.#bodyContentElement.removeChild(popupComponent.element);
        this.#bodyContentElement.classList.remove('hide-overflow');
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    cardComponent.element.querySelector('.film-card__link').addEventListener('click', () => {
      if (this.#bodyContentElement.querySelector('.film-details')) {
        this.#bodyContentElement.querySelector('.film-details__close-btn').click();
      }

      render(popupComponent, this.#footerContentElement, RenderPosition.AFTEREND);
      this.#bodyContentElement.classList.add('hide-overflow');
      document.addEventListener('keydown', onEscKeyDown);
    });

    popupComponent.element.querySelector('.film-details__close-btn').addEventListener('click', () => {
      this.#bodyContentElement.removeChild(popupComponent.element);
      this.#bodyContentElement.classList.remove('hide-overflow');
      document.removeEventListener('keydown', onEscKeyDown);
    });

    switch (typeList) {
      case FILMS_RATED_LIST:
        render(cardComponent, this.#filmsTopRatedContainer.element);
        break;
      case FILMS_COMMENTED_LIST:
        render(cardComponent, this.#filmsMostCommentedContainer.element);
        break;
      default:
        render(cardComponent, this.#filmsContainer.element);
        break;
    }
  };

  #renderFilmLists = () => {
    this.#filmsCards = [...this.#filmsModel.films];
    this.#filmsContainer = new FilmsContainerView();
    this.#filmsTopRatedContainer = new FilmsContainerView();
    this.#filmsMostCommentedContainer = new FilmsContainerView();

    if (this.#filmsCards.length === 0) {
      render(new FilterMenuView(this.#filmsCards), this.#boardContainer);
      render(this.#filmsBoard, this.#boardContainer);
      render(new FilmsListEmptyView(), this.#filmsBoard.element);
      render(new FilmAmountView(this.#filmsCards), this.#filmAmountElement);

      return;
    }
    render(new UserProfileView(this.#filmsCards), this.#userProfileElement);
    render(new FilterMenuView(this.#filmsCards), this.#boardContainer);
    render(new SortMenuView(), this.#boardContainer);
    render(this.#filmsBoard, this.#boardContainer);
    render(this.#filmsList, this.#filmsBoard.element);
    render(this.#filmsContainer, this.#filmsList.element);

    const totalFilmsAvailable = Math.min(this.#filmsCards.length, FILM_COUNT_PER_STEP);

    for (let i = 0; i < totalFilmsAvailable; i++) {
      this.#renderFilms(this.#filmsCards[i]);
    }

    if (this.#filmsCards.length > FILM_COUNT_PER_STEP) {
      render(this.#showMoreButtonComponent, this.#filmsList.element);

      this.#showMoreButtonComponent.element.addEventListener('click', this.#onShowMoreButtonClick);
    }

    render(this.#filmsTopRatedList, this.#filmsBoard.element);
    render(this.#filmsTopRatedContainer, this.#filmsTopRatedList.element);

    render(this.#filmsMostCommentedList, this.#filmsBoard.element);
    render(this.#filmsMostCommentedContainer, this.#filmsMostCommentedList.element);

    for (const filmCard of this.#filmsCards.slice(0, 2)) {
      this.#renderFilms(filmCard, FILMS_RATED_LIST);
      this.#renderFilms(filmCard, FILMS_COMMENTED_LIST);
    }
    render(new FilmAmountView(this.#filmsCards), this.#filmAmountElement);
  };

  #onShowMoreButtonClick = (evt) => {
    evt.preventDefault();
    this.#filmsCards
      .slice(this.#renderedFilmCount, this.#renderedFilmCount + FILM_COUNT_PER_STEP)
      .forEach((film) => this.#renderFilms(film));

    this.#renderedFilmCount += FILM_COUNT_PER_STEP;

    if (this.#renderedFilmCount >= this.#filmsCards.length) {
      this.#showMoreButtonComponent.element.remove();
      this.#showMoreButtonComponent.removeElement();
    }
  };
}
