import React from 'react';
// import {connect} from 'react-redux';
// import Spinner from 'react-spinkit';
// import {searchGiphys} from '../actions';

export default class GiphySearch extends React.Component {
  constructor() {
    super();
    this.state = { term: '' }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }
 
    render() {
        return (
            <div className="giphy-search">
              <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}