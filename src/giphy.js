function _search(term) {
  const api = 'https://api.giphy.com/v1/gifs/search';
  const query = '?q=' + term;
  const apiKey = '&api_key=' + process.env.REACT_APP_GIPHY_API_KEY;
  const limit = '&limit=5';
  const url = api + query + apiKey + limit; 
  //https://api.giphy.com/v1/gifs/search?q=trending&api_key=4Grsp3LnEfK5jNJUPqmaRA8Mcv6YR5z9&limit=5
  console.log('searching url...', url);
    return fetch(url).then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
  }).then(data => data.data.map(gif => gif.images.fixed_height.url));
}

export function search(term) {
  return new Promise((resolve, reject) => {
      setTimeout(() => resolve(_search(term)), 500);
  });
}