import {
  SEARCH_GIFS_REQUEST,
  SEARCH_GIFS_SUCCESS,
  SEARCH_GIFS_ERROR
} from './actions';

const initialState = {
  gifs: [],
  term: '',
  loading: false,
  error: null
};

export function giphyReducer(state=initialState, action) {
  // Handle these sync actions
  if (action.type === SEARCH_GIFS_REQUEST) {
    return Object.assign({}, state, {
      term: action.term,
      loading: true,
      error: null
    });
  }
  else if (action.type === SEARCH_GIFS_SUCCESS) {
    return Object.assign({}, state, {
      gifs: action.gifs,
      loading: false,
      error: null
  });
  }
  else if (action.type === SEARCH_GIFS_ERROR) {
  }
  return state;
}
