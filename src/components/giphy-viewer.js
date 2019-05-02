import React from 'react';
import { connect } from 'react-redux';
import GiphyList from './giphy-list';
import GiphySearch from './giphy-search';
import { searchGiphys } from '../actions';

export class GiphyViewer extends React.Component {
  constructor( props ){
    super( props );
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    //when term changes, issue action to update state and trigger render
    console.log('giphy.viewer | handleTermChange | term: ', term);
//    this.props.dispatch(searchGiphys(term));
    this.props.searchGiphys(term);
  }
 
  render() {

    const giphys = this.props.gifs;
    return (
      <div>
          <GiphySearch onTermChange={this.handleTermChange} />
          <GiphyList gifs={giphys} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {

  return {
    searchGiphys: (term) => {
      dispatch(searchGiphys(term))
    }

  };
};
const mapStateToProps = state => ({
  gifs: state.gifs,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps, mapDispatchToProps)(GiphyViewer);