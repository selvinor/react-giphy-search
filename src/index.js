import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import GifViewer from './components/giphy-viewer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <GifViewer /> 
  </Provider>,

document.getElementById('app'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();