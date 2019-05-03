import {search} from './giphy';
// function search(term) {
//   console.log('Doing search on: ', term);
//   const api = 'https://api.giphy.com/v1/gifs/search';
//   const query = '?q=' + term;
//   const apiKey = '&api_key=' + process.env.REACT_APP_GIF_API_KEY;
//   const limit = '&limit=5';
//   const url = api + query + apiKey + limit; 
//   let imgArr =[];
//   //https://api.giphy.com/v1/gifs/search?q=trending&api_key=4Grsp3LnEfK5jNJUPqmaRA8Mcv6YR5z9&limit=5
//   console.log('searching...', url);
//     return fetch(url)
//     .then(res => {
//         if (!res.ok) {
//             return Promise.reject(res.statusText);
//         }
//         return res.json();
//       // }).then(data => {
//       //   console.log('data.data.length: ', data.data.length );
//       //   console.log('data.data:', data.data);
//       //   //console.log('data.data[0].images.original.url: ', data.data[0].images.original.url );
//       //   let imgArr =[];
//       //   for (let i=0; i <= data.data.length; i++) {
//       //     console.log('Image: ', data.data[i].images.original.url);
//       //     imgArr.push(data.data[i].images.original.url);
//       //     console.log('imgArr: ', imgArr);
//       //   }

//       //   return imgArr;
//       //  // console.log('data.data:', data.data);
          
//       //   //data.data.map(images => images.original.url)
//       // });
//     }).then(data => {
//       console.log('data.data.length: ', data.data.length );
//       console.log('data.data:', data.data);
//       //console.log('data.data[0].images.original.url: ', data.data[0].images.original.url );
//       //extract the urls from the data object

//       for (let i=0; i <= data.data.length; i++) {
//         console.log('Image: ', data.data[i].images.original.url);
//         imgArr.push(data.data[i].images.original.url);
//         //console.log('imgArr: ', imgArr);
//       }

//        return imgArr;
//      // console.log('data.data:', data.data);
        
//       //data.data.map(images => images.original.url)
//     }).then(data => {
//       console.log('data: ', data);
//     });

// }

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
      .then(gifs => {console.log('ok');dispatch(searchGifsSuccess(gifs))})
      .catch(error => dispatch(searchGifsError(error))); 
};

