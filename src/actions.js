import {search} from './giphy';

export const SEARCH_GIFS_REQUEST = 'SEARCH_GIFS_REQUEST';
export const searchGifsRequest = () => ({
    type: SEARCH_GIFS_REQUEST
});

export const SEARCH_GIFS_SUCCESS = 'SEARCH_GIFS_SUCCESS';
export const searchGifsSuccess = gifs => ({
    type: SEARCH_GIFS_SUCCESS,
    gifs
});

export const SEARCH_GIFS_ERROR = 'SEARCH_GIFS_ERROR';
export const searchGifsError = error => ({
    type: SEARCH_GIFS_ERROR,
    error
});

export const searchGifs = term => dispatch => {
  dispatch(searchGifsRequest(term)); //sets loading status
  search(term)
      .then(gifs => dispatch(searchGifsSuccess(gifs)))
      .catch(error => dispatch(searchGifsError(error))); 
};

