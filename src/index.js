import React from 'react';
import ReactDOM from 'react-dom';
import GiphyList from './components/giphy-list';
import GiphySearch from './components/giphy-search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: [
        {
            id: 1,
            url: 'https://media2.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif'
        },
        {
            id: 2,
            url: 'https://media0.giphy.com/media/aC45M5Q4D07Pq/200_s.gif'
        },
        {
            id: 3,
            url: 'https://media1.giphy.com/media/5oBRpcOT04dq0/200.gif'
        }
      ]
    }
  }

  handleTermChange(term) {
    console.log(term);
  }

    render() {
      return (
        <div>
            <GiphySearch onTermChange={this.handleTermChange} />
            <GiphyList gifs={this.state.gifs} />
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));