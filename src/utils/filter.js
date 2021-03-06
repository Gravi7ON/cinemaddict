import {FilterType} from '../const.js';

const filter = {
  [FilterType.ALL]: (films) => [...films],
  [FilterType.WATCH_LIST]: (films) => films.filter((film) => film.userDetails.watchlist),
  [FilterType.WATCHED]: (films) => films.filter((film) => film.userDetails.alreadyWatched),
  [FilterType.FAVORITE]: (films) => films.filter((film) => film.userDetails.favorite)
};

export {filter};
