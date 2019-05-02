//import {search} from './giphy';
function search(name) {
  const api = 'https://api.giphy.com/v1/gifs/search';
  const query = '?q=' + name;
  const apiKey = '&api_key=' + process.env.REACT_APP_GIPHY_API_KEY;
  const limit = '&limit=5';
  const url = api + query + apiKey + limit; 
  //https://api.giphy.com/v1/gifs/search?q=trending&api_key=4Grsp3LnEfK5jNJUPqmaRA8Mcv6YR5z9&limit=5
  console.log('searching...');
    return fetch(url)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
      }).then(data => {
        console.log('data.data.length: ', data.data.length );
        console.log('data.data:', data.data);
        //console.log('data.data[0].images.original.url: ', data.data[0].images.original.url );
        let imgArr =[];
        for (let i=0; i <= data.data.length; i++) {
          console.log('Image: ', data.data[i].images.original.url);
          imgArr.push(data.data[i].images.original.url);
          //console.log('imgArr: ', imgArr);
        }

        return imgArr;
       // console.log('data.data:', data.data);
          
        //data.data.map(images => images.original.url)
      });
}

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
  search(name)
      .then(giphys => {
        console.log('attempting dispatch searchGiphysSuccess');
        dispatch(searchGiphysSuccess(giphys))
        console.log('dispatched searchGiphysSuccess');
      })
      .catch(error => dispatch(searchGiphysError(error))); 
};

