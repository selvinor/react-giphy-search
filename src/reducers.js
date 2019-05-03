import {
  SEARCH_GIFS_REQUEST,
  SEARCH_GIFS_SUCCESS,
  SEARCH_GIFS_ERROR
} from './actions';

const initialState = {
  gifs: [
  //   {
  //     id: 1,
  //     url: 'https://media2.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif'
  // },
  // {
  //     id: 2,
  //     url: 'https://media0.giphy.com/media/aC45M5Q4D07Pq/200_s.gif'
  // },
  // {
  //     id: 3,
  //     url: 'https://media1.giphy.com/media/5oBRpcOT04dq0/200.gif'
  // }
  ],
  term: '',
  loading: false,
  error: null
};

export function giphyReducer(state=initialState, action) {
  // Handle these sync actions
  if (action.type === SEARCH_GIFS_REQUEST) {
    console.log('Reducer for SEARCH_GIFS_REQUEST');
    return Object.assign({}, state, {
      term: action.term,
      loading: true,
      error: null
    });
  }
  else if (action.type === SEARCH_GIFS_SUCCESS) {
    console.log('SEARCH_GIFS_SUCCESS');
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
