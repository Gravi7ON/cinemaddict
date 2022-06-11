const Films = {
  COMMON_LIST: 'common',
  RATED_LIST: 'rated',
  COMMENTED_LIST: 'commented'
};

const FILMS_COUNT_PER_STEP = 5;
const UPDATE_COUNT = 1;
const DELETE_COUNT = 1;

const Mode = {
  DEFAULT: 'DEFAULT',
  POPUP: 'POPUP'
};

const SortType = {
  DEFAULT: 'default',
  DATE: 'date',
  RATING: 'rating'
};

const UserAction = {
  UPDATE_FILM: 'UPDATE_FILM',
  ADD_COMMENT: 'ADD_COMMENT',
  DELETE_COMMENT: 'DELETE_COMMENT'
};

const UpdateType = {
  PATCH: 'PATCH',
  PRE_MINOR: 'PRE_MINOR',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT'
};

const FilterType = {
  ALL: 'all',
  WATCH_LIST: 'watch',
  WATCHED: 'watched',
  FAVORITES: 'favorites'
};

export {Films, Mode, SortType, FILMS_COUNT_PER_STEP, UpdateType, UserAction, FilterType, UPDATE_COUNT, DELETE_COUNT};
