const Film = {
  RATED_LIST: 'RATED',
  COMMENTED_LIST: 'COMMENTED'
};

const FILMS_COUNT_PER_STEP = 5;
const FILMS_COUNT_ADDITIONAL_BLOCK = 2;
const durationInMinutes = 60;

const Mode = {
  DEFAULT: 'DEFAULT',
  POPUP: 'POPUP'
};

const SortType = {
  DEFAULT: 'DEFAULT',
  DATE: 'DATE',
  RATING: 'RATING'
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
  ALL: 'ALL',
  WATCH_LIST: 'WATCHLIST',
  WATCHED: 'WATCHED',
  FAVORITE: 'FAVORITE'
};

const TimeLimit = {
  LOWER_LIMIT: 200,
  UPPER_LIMIT: 450,
};

export {Film, Mode, SortType, FILMS_COUNT_PER_STEP, UpdateType, UserAction, FilterType, TimeLimit, FILMS_COUNT_ADDITIONAL_BLOCK, durationInMinutes};
