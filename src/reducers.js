import {
  SEARCH_GIPHYS_REQUEST,
  SEARCH_GIPHYS_SUCCESS,
  SEARCH_GIPHYS_ERROR
} from './actions';

const initialState = {
  giphys: [],
  term: '',
  loading: false,
  error: null
};

export function giphyReducer(state=initialState, action) {
  // Handle these sync actions
  if (action.type === SEARCH_GIPHYS_REQUEST) {
    console.log('made it here to giphyReducer');
    return Object.assign({}, state, {
      loading: true,
      error: null
  });
  }
  else if (action.type === SEARCH_GIPHYS_SUCCESS) {
    console.log('SEARCH_GIPHYS_SUCCESS');
    return Object.assign({}, state, {
      giphys: action.giphys,
      loading: false,
      error: null
  });
  }
  else if (action.type === SEARCH_GIPHYS_ERROR) {
  }
  return state;
}
