function _search(name) {
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
        //console.log('data.data[0].images.original.url: ', data.data[0].images.original.url );
        for (let i=0; i<= data.data.length; i++) {
          console.log(data.data[i].images.original.url);
        }
        data.data.map(images => images.original.url)
      });
}

export function search(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(_search(name)), 500);
    });
}
