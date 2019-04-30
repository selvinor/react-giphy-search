import {search} from './giphy';
export const SEARCH_GIPHYS_REQUEST = 'SEARCH_GIPHYS_REQUEST';
export const searchGiphysRequest = () => ({
    type: SEARCH_GIPHYS_REQUEST
});

export const SEARCH_GIPHYS_SUCCESS = 'SEARCH_GIPHYS_SUCCESS';
export const searchGiphysSuccess = giphys => ({
    type: SEARCH_GIPHYS_SUCCESS,
    giphys
});

export const SEARCH_GIPHYS_ERROR = 'SEARCH_GIPHYS_ERROR';
export const searchGiphysError = error => ({
    type: SEARCH_GIPHYS_ERROR,
    error
});

export const searchGiphys = name => dispatch => {
  dispatch(searchGiphysRequest());
  console.log('dispatched searchGiphys');
  search(name)
      .then(giphys => {
        console.log('attempting dispatch searchGiphysSuccess');
        dispatch(searchGiphysSuccess(giphys))
        console.log('dispatched searchGiphysSuccess');
      })
      .catch(error => dispatch(searchGiphysError(error))); 
};

